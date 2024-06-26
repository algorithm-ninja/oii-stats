from collections import defaultdict
import datetime
import hashlib
import os
import json
from functools import cache, cached_property, reduce, partial
from typing import Dict, List, Optional

from homepage import homepage

MEDAL_NAMES = {
    "G": "gold",
    "S": "silver",
    "B": "bronze",
}


def cast_or_none(func, a):
    if a is None:
        return None
    return func(a)


def venue_to_region(venue: str):
    if not venue:
        return None
    return venue[:3]


def fold_with_none(func, a, b):
    if a is None:
        return b
    if b is None:
        return a
    return func((a, b))


def min_with_none(a: List[Optional[float]]):
    return reduce(partial(fold_with_none, min), a, None)


def max_with_none(a: List[Optional[float]]):
    return reduce(partial(fold_with_none, max), a, None)


def sum_with_none(a: List[Optional[float]]):
    return reduce(partial(fold_with_none, sum), a, None)


def medals_key(medals):
    return (medals["gold"], medals["silver"], medals["bronze"])


class Storage:
    def __init__(self, storage_dir: str):
        self.storage_dir = storage_dir
        os.makedirs(self.storage_dir)

        self.regions: List[Region] = list()
        self.users: Dict[User, User] = dict()
        self.contests: Dict[int, Contest] = dict()
        self.tasks: Dict[int, Dict[str, Task]] = defaultdict(dict)
        self.participations: Dict[int, List[Participation]] = defaultdict(list)
        self.task_scores: Dict[int, Dict[str, List[TaskScore]]] = defaultdict(
            lambda: defaultdict(list)
        )
        self.internationals: Dict[str, International] = dict()

    def path(self, path: str):
        return os.path.join(self.storage_dir, path)

    def finish(self):
        self.finish_contests()
        self.finish_regions()
        self.finish_tasks()
        self.finish_users()
        self.finish_homepage()
        self.finish_search()

    def write(self, path: str, data):
        dest = self.path(path)
        dirname = os.path.dirname(dest)
        os.makedirs(dirname, exist_ok=True)
        with open(self.path(path), "w") as f:
            f.write(json.dumps(data))

    def finish_contests(self):
        contests = [c.to_json() for c in self.contests.values()]
        contests.sort(key=lambda c: -c["year"])
        self.write("contests.json", {"contests": contests})

        for year, contest in self.contests.items():
            self.write(f"contests/{year}.json", contest.to_json())
            self.write(f"contests/{year}/results.json", contest.results_to_json())

    def finish_regions(self):
        regions = [r.to_json() for r in self.regions]
        regions.sort(key=lambda r: r["id"])
        self.write("regions.json", {"regions": regions})

        for region in self.regions:
            self.write(f"regions/{region.id}.json", region.to_json_detail())
            self.write(f"regions/{region.id}/results.json", region.results_to_json())

    def finish_tasks(self):
        tasks = []
        for year, year_tasks in self.tasks.items():
            tasks.append(
                {
                    "year": year,
                    "tasks": [t.to_json() for t in year_tasks.values()],
                }
            )
        tasks.sort(key=lambda t: -t["year"])
        self.write("tasks.json", {"tasks": tasks})

        for year, year_tasks in self.tasks.items():
            for task in year_tasks.values():
                self.write(f"tasks/{year}/{task.name}.json", task.to_json_detail())

    def finish_users(self):
        users = [u.to_json() for u in self.users.values()]
        users.sort(key=lambda u: (*medals_key(u["num_medals"]), u["contestant"]["last_name"].startswith("Bort"), u["participations"][0]["year"]), reverse=True)
        self.write("users.json", {"users": users})

        for user in self.users.values():
            self.write(f"users/{user.id()}.json", user.to_json_detail())

    def finish_homepage(self):
        self.write("home.json", homepage(self))

    def finish_search(self):
        index = []
        for c in self.contests.values():
            index.append(
                {
                    "id": f"contest:{c.year}",
                    "k": c.search_key,
                    "v": {"contest": c.to_json()},
                }
            )
        for year, tasks in self.tasks.items():
            for task in tasks.values():
                index.append(
                    {
                        "id": f"task:{year}:{task.name}",
                        "k": task.search_key,
                        "v": {"task": {"year": year, "task": task.to_json()}},
                    }
                )
        for r in self.regions:
            index.append(
                {
                    "id": f"region:{r.id}",
                    "k": r.search_key,
                    "v": {"region": r.to_json()},
                }
            )
        for u in self.users:
            index.append(
                {"id": f"user:{u.id()}", "k": u.search_key, "v": {"user": u.to_json()}}
            )
        self.write("search.json", index)


class International:
    def __init__(
        self,
        storage: Storage,
        code: str,
        name: str,
        link: Optional[str],
        color: str,
    ):
        self.storage = storage
        self.code = code
        self.name = name
        self.link = link
        self.color = color

    def __repr__(self) -> str:
        return f"<International {self.code} {self.name}>"

    def to_json(self):
        return {
            "code": self.code,
            "name": self.name,
            "link": self.link,
            "color": self.color,
        }


class User:
    def __init__(
        self,
        storage: Storage,
        name: str,
        surname: str,
        birth: Optional[str],
        gender: str,
        username: Optional[str],
        **kwargs,
    ):
        self.storage = storage
        self.name = name
        self.surname = surname
        self.birth = None  # type: Optional[datetime.date]
        if birth is not None:
            if isinstance(birth, datetime.datetime):
                self.birth = birth.date()
            elif isinstance(birth, str):
                day, month, year = map(int, birth.split("/"))
                self.birth = datetime.date(year, month, day)
        self.gender = gender
        self.username = username
        # automatically added when a Participation is constructed
        self.participations = []

    def __eq__(self, other: "User"):
        if self.name != other.name or self.surname != other.surname:
            return False
        if self.birth is None:
            self.birth = other.birth
            return True
        if other.birth is None:
            other.birth = self.birth
            return True
        return self.birth == other.birth

    def id(self) -> str:
        return hashlib.md5(
            ("%s:%s:%s" % (self.name, self.surname, self.birth)).encode()
        ).hexdigest()

    def __hash__(self):
        return hash(self.name) ^ hash(self.surname)

    def __repr__(self):
        return "<User %s %s -- %s id=%s>" % (
            self.name,
            self.surname,
            str(self.birth),
            self.id(),
        )

    @property
    def search_key(self):
        return f"{self.name or ''} {self.surname or ''}"

    @property
    def contestant(self):
        return {
            "id": self.id(),
            "username": self.username,
            "first_name": self.name,
            "last_name": self.surname,
        }

    @cached_property
    def num_medals(self):
        medals = {"gold": 0, "silver": 0, "bronze": 0}
        for participation in self.participations:
            if participation.medal is not None:
                medals[participation.medal] += 1
        return medals

    @cached_property
    def best_rank(self):
        return min_with_none([p.rank for p in self.participations])

    @cached_property
    def win_at_first_participation(self):
        first = min(self.participations, key=lambda p: p.contest.year)
        return first.rank == 1

    def to_json(self):
        return {
            "contestant": self.contestant,
            "num_medals": self.num_medals,
            "best_rank": self.best_rank,
            "participations": sorted(
                [
                    {
                        "year": p.contest.year,
                        "internationals": p.internationals_info,
                        "medal": p.medal,
                    }
                    for p in self.participations
                ],
                key=lambda p: -p["year"],
            ),
        }

    def to_json_detail(self):
        return {
            "contestant": self.contestant,
            "num_medals": self.num_medals,
            "best_rank": self.best_rank,
            "participations": sorted(
                [
                    {
                        "year": p.contest.year,
                        "internationals": p.internationals_info,
                        "medal": p.medal,
                        "rank": p.rank,
                        "region": venue_to_region(p.venue),
                        "scores": [
                            {
                                "task": s.task.name,
                                "score": s.score,
                                "max_score_possible": s.task.max_score_possible,
                            }
                            for s in p.scores
                        ],
                    }
                    for p in self.participations
                ],
                key=lambda p: -p["year"],
            ),
        }


class Contest:
    def __init__(
        self,
        storage: Storage,
        year: int,
        location: Optional[str],
        region: Optional[str],
        gmaps: Optional[str],
        latitude: Optional[str],
        longitude: Optional[str],
    ):
        self.storage = storage
        self.year = cast_or_none(int, year)
        self.location = location
        self.region = region
        self.gmaps = gmaps
        self.latitude = cast_or_none(float, latitude)
        self.longitude = cast_or_none(float, longitude)

    def id(self) -> str:
        return str(self.year)

    def __repr__(self):
        return "<Contest year=%s>" % self.year

    @property
    def search_key(self):
        tasks = " ".join(self.storage.tasks[self.year].keys())
        return f"{self.location or ''} {self.region or ''} {tasks}"

    @property
    def tasks(self):
        return self.storage.tasks[self.year]

    @property
    def task_names(self):
        return [t.name for t in self.tasks.values()]

    @property
    def participations(self):
        return self.storage.participations[self.year]

    @cached_property
    def has_all_regions(self):
        return all(p.venue is not None for p in self.participations)

    @cached_property
    def max_score_possible(self) -> float:
        return sum_with_none(t.max_score_possible for t in self.tasks.values())

    @cached_property
    def max_score(self) -> float:
        return sum_with_none(t.max_score for t in self.tasks.values())

    @cached_property
    def avg_score(self) -> float:
        return sum_with_none(t.avg_score for t in self.tasks.values())

    @cached_property
    def num_ex_aequo(self):
        max_score = self.max_score
        if max_score is None:
            return None
        return sum(1 for p in self.participations if p.score == max_score)

    @cached_property
    def num_girls(self):
        return sum(1 for p in self.participations if p.user.gender == "F")

    @cached_property
    def num_boys(self):
        return sum(1 for p in self.participations if p.user.gender == "M")

    @property
    def navigation(self):
        get_year = lambda y: y if y in self.storage.contests else None
        return {
            "current": self.year,
            "previous": get_year(self.year - 1),
            "next": get_year(self.year + 1),
        }

    @property
    def location_info(self):
        return {
            "location": self.location,
            "gmaps": self.gmaps,
            "latitude": self.latitude,
            "longitude": self.longitude,
        }

    @cache
    def to_json(self):
        return {
            "year": self.year,
            "navigation": self.navigation,
            "location": self.location_info,
            "region": self.region,
            "num_contestants": len(self.participations),
            "max_score_possible": self.max_score_possible,
            "max_score": self.max_score,
            "avg_score": self.avg_score,
            "tasks": [self.task_to_json(t) for t in self.tasks.values()],
            "medals": {
                medal: self.medal_to_json(medal)
                for medal in ["gold", "silver", "bronze"]
            },
        }

    def task_to_json(self, task: "Task"):
        return {
            "contest_year": self.year,
            "name": task.name,
            "title": task.title,
            "link": task.link,
            "index": task.index,
            "max_score_possible": task.max_score_possible,
        }

    def medal_to_json(self, medal: str):
        count = sum(1 for p in self.participations if p.medal == medal)
        cutoff = min_with_none(
            p.score for p in self.participations if p.medal == medal
        )
        return {
            "count": count or None,  # assume the number of medals is positive
            "cutoff": cutoff,
        }

    def results_to_json(self):
        participations = sorted(self.participations, key=lambda p: p.rank or 100000)
        return {
            "navigation": self.navigation,
            "tasks": list(self.tasks.keys()),
            "results": [p.to_json() for p in participations],
        }


class Task:
    def __init__(
        self,
        storage: Storage,
        name: str,
        contest: Contest,
        index: str,
        max_score_possible: float,
        title: str,
        link: Optional[str],
    ):
        self.storage = storage
        self.name = name
        self.contest = contest
        self.index = cast_or_none(int, index)
        self.max_score_possible = cast_or_none(float, max_score_possible)
        self.title = title
        self.link = link

    def id(self) -> str:
        return "%s-%s" % (self.contest.id(), self.name)

    def __repr__(self):
        return "<Task name=%s contest=%s index=%d>" % (
            self.name,
            self.contest,
            self.index,
        )

    @property
    def search_key(self):
        return f"{self.name} {self.title}"

    @cached_property
    def navigation(self):
        year = self.contest.year
        current = {"year": year, "name": self.name}
        names = self.contest.task_names
        if self.index > 0:
            previous = {"year": year, "name": names[self.index - 1]}
        elif year > min(self.storage.tasks.keys()):
            prev_names = self.storage.contests[year - 1].task_names
            previous = {"year": year - 1, "name": prev_names[-1]}
        else:
            previous = None

        if self.index + 1 < len(names):
            next = {"year": year, "name": names[self.index + 1]}
        # Not the last year, and the next year has tasks.
        elif self.storage.tasks.get(year + 1, []):
            next_names = self.storage.contests[year + 1].task_names
            next = {"year": year + 1, "name": next_names[0]}
        else:
            next = None
        return {"current": current, "previous": previous, "next": next}

    @property
    def scores(self):
        return self.storage.task_scores[self.contest.year][self.name]

    @cached_property
    def max_score(self):
        return max_with_none(s.score for s in self.scores)

    @cached_property
    def avg_score(self):
        if not self.scores:
            return None
        scores = [s.score for s in self.scores]
        if any(s is None for s in scores):
            return None
        return sum(scores) / len(scores)

    @cached_property
    def num_zeros(self):
        if self.max_score_possible is None:
            return None
        return sum(1 for s in self.scores if s.score == 0)

    @cached_property
    def num_full_scores(self):
        if self.max_score_possible is None:
            return None
        return sum(1 for s in self.scores if s.score == self.max_score_possible)

    def to_json(self):
        return {
            "contest_year": self.contest.year,
            "name": self.name,
            "title": self.title,
            "link": self.link,
            "index": self.index,
            "max_score_possible": self.max_score_possible,
            "max_score": self.max_score,
            "avg_score": self.avg_score,
            "navigation": self.navigation,
        }

    def to_json_detail(self):
        return {
            "contest_year": self.contest.year,
            "name": self.name,
            "title": self.title,
            "link": self.link,
            "index": self.index,
            "max_score_possible": self.max_score_possible,
            "max_score": self.max_score,
            "navigation": self.navigation,
            "scores": sorted(
                [
                    {
                        "contestant": s.participation.contestant,
                        "internationals": s.participation.internationals_info,
                        "rank": s.participation.rank,
                        "score": s.score,
                    }
                    for s in self.scores
                ],
                key=lambda s: -(s["score"] or 0),
            ),
        }


class Participation:
    def __init__(
        self,
        storage: Storage,
        user: User,
        contest: Contest,
        rank: Optional[str],
        school: Optional[str],
        venue: Optional[str],
        medal: Optional[str],
        internationals: Optional[str],
        score: Optional[str],
        **kwargs,
    ):
        self.storage = storage
        self.user = user
        self.contest = contest
        self.rank = cast_or_none(int, rank)
        self.school = school
        self.venue = venue
        self.medal = MEDAL_NAMES[medal] if medal else None
        if internationals:
            self.internationals = [
                self.storage.internationals[name] for name in internationals.split(",")
            ]
        else:
            self.internationals = []
        self.score = cast_or_none(float, score)
        user.participations.append(self)
        # automatically added on TaskScore construction
        self.scores = []

    def id(self) -> str:
        return "%s-%s" % (self.contest.id(), self.user.id())

    def __repr__(self):
        return "<Participation user=%s contest=%s>" % (self.user, self.contest)

    @property
    def contestant(self):
        return self.user.contestant

    @property
    def internationals_info(self):
        return [i.to_json() for i in self.internationals]

    def to_json(self):
        past_participations = [
            {"year": p.contest.year, "medal": p.medal}
            for p in self.user.participations
            if p.contest.year < self.contest.year
        ]
        scores = [s.score for s in self.scores]
        return {
            "rank": self.rank,
            "contestant": self.contestant,
            "internationals": self.internationals_info,
            "region": venue_to_region(self.venue),
            "score": self.score,
            "scores": scores,
            "medal": self.medal,
            "past_participations": sorted(
                past_participations, key=lambda p: -p["year"]
            ),
        }


class TaskScore:
    def __init__(
        self,
        storage: Storage,
        task: Task,
        participation: Participation,
        score: Optional[str],
    ):
        self.storage = storage
        self.task = task
        self.participation = participation
        self.score = cast_or_none(float, score)
        assert task.contest == participation.contest
        participation.scores.append(self)

    def id(self) -> str:
        return "%s-%s" % (self.task.id(), self.participation.user.id())

    def __repr__(self):
        return "<TaskScore task=%s participation=%s score=%s>" % (
            self.task,
            self.participation,
            self.score,
        )


class Region:
    def __init__(self, storage: Storage, id: str, name: str):
        self.storage = storage
        self.id = id
        self.name = name

    def __repr__(self):
        return "<Region id=%s name=%s>" % (self.id, self.name)

    @property
    def search_key(self):
        return f"{self.id} {self.name}"

    @property
    def navigation(self):
        index = self.storage.regions.index(self)
        get = (
            lambda i: self.storage.regions[i].id
            if 0 <= i < len(self.storage.regions)
            else None
        )
        return {
            "current": self.id,
            "previous": get(index - 1),
            "next": get(index + 1),
        }

    @cached_property
    def participations(self):
        participations = []
        for contest in self.storage.participations.values():
            participations.extend(
                [p for p in contest if venue_to_region(p.venue) == self.id]
            )
        return participations

    @cached_property
    def num_contestants(self):
        return len(self.participations)

    @cached_property
    def num_medals(self):
        medals = {"gold": 0, "silver": 0, "bronze": 0}
        for p in self.participations:
            if p.medal:
                medals[p.medal] += 1
        return medals

    @cached_property
    def num_first_places(self):
        return sum(1 for p in self.participations if p.rank == 1)

    @cached_property
    def avg_contestants_per_year(self):
        total = 0
        num_valid_contests = 0
        for p in self.participations:
            if not p.contest.has_all_regions:
                continue
            total += 1
        for c in self.storage.contests.values():
            if c.has_all_regions:
                num_valid_contests += 1
        return total / num_valid_contests

    @cached_property
    def hosted(self):
        hosted = []
        for c in self.storage.contests.values():
            if c.region == self.id:
                hosted.append(c.year)
        return sorted(hosted, key=lambda c: -c)

    @cached_property
    def years(self):
        def init(year: int):
            return {
                "year": year,
                "location": self.storage.contests[year].location_info,
                "num_contestants": 0,
                "num_medals": {"gold": 0, "silver": 0, "bronze": 0},
            }

        years = dict()
        for p in self.participations:
            year = years.setdefault(p.contest.year, init(p.contest.year))
            year["num_contestants"] += 1
            if p.medal:
                year["num_medals"][p.medal] += 1
        return sorted(years.values(), key=lambda y: -y["year"])

    @cached_property
    def results(self):
        by_year = defaultdict(list)
        for p in self.participations:
            by_year[p.contest.year].append(p)
        results = []
        for year, participations in by_year.items():
            contestants = [
                {
                    "contestant": p.contestant,
                    "internationals": p.internationals_info,
                    "rank": p.rank,
                    "medal": p.medal,
                    "task_scores": [
                        {
                            "name": s.task.name,
                            "score": s.score,
                            "max_score_possible": s.task.max_score_possible,
                        }
                        for s in p.scores
                    ],
                }
                for p in participations
            ]
            results.append({"year": year, "contestants": contestants})
        return sorted(results, key=lambda r: -r["year"])

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "navigation": self.navigation,
            "num_contestants": self.num_contestants,
            "medals": self.num_medals,
            "avg_contestants_per_year": self.avg_contestants_per_year,
            "hosted": self.hosted,
        }

    def to_json_detail(self):
        return {
            "id": self.id,
            "name": self.name,
            "navigation": self.navigation,
            "num_contestants": self.num_contestants,
            "medals": self.num_medals,
            "avg_contestants_per_year": self.avg_contestants_per_year,
            "hosted": self.hosted,
            "years": self.years,
        }

    def results_to_json(self):
        return {
            "navigation": self.navigation,
            "results": self.results,
        }
