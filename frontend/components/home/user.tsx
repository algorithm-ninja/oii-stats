import { Contestant } from "lib/remote/common";
import {
  BestStudent,
  IOIstWithWorstRank,
  StatsUser,
  StudentWithMostParticipations,
  WinAtFirstParticipation,
} from "lib/remote/home";
import { Tile } from "./tile";
import Link from "next/link";
import styles from "./tile.module.scss";
import { Medals } from "components/medals/medals";
import { ContestantImage } from "components/contestant/contestantImage";

function ContestantImageLink({ contestant }: { contestant: Contestant }) {
  return (
    <Link href={`/contestant/${contestant.id}`}>
      <a className={styles.image}>
        <ContestantImage contestant={contestant} />
      </a>
    </Link>
  );
}

function ContestantLink({ contestant }: { contestant: Contestant }) {
  return (
    <Link href={`/contestant/${contestant.id}`}>
      <a>
        {contestant.first_name} {contestant.last_name}
      </a>
    </Link>
  );
}

function BestStudentTile({ stat }: { stat: BestStudent }) {
  const { contestant, num_medals } = stat.best_student;
  return (
    <div>
      <ContestantImageLink contestant={contestant} />
      The student that won the most is{" "}
      <ContestantLink contestant={contestant} />
      <Medals medals={num_medals} />
    </div>
  );
}

function WinAtFirstParticipationTile({
  stat,
}: {
  stat: WinAtFirstParticipation;
}) {
  const { contestant, year } = stat.win_at_first_participation;
  return (
    <div>
      <ContestantImage contestant={contestant} />
      <ContestantLink contestant={contestant} /> won the {year} edition, at
      first try!
    </div>
  );
}

function StudentWithMostParticipationsTile({
  stat,
}: {
  stat: StudentWithMostParticipations;
}) {
  const { contestant, num_participations } =
    stat.student_with_most_participations;
  return (
    <div>
      <ContestantImage contestant={contestant} />
      <ContestantLink contestant={contestant} /> is the student that did the
      highest number of national competitions, {num_participations}!
    </div>
  );
}

function IOIstWithWorstRankTile({ stat }: { stat: IOIstWithWorstRank }) {
  const { contestant, contest_year, rank } = stat.ioist_with_worst_rank;
  return (
    <div>
      <ContestantImage contestant={contestant} />
      In {contest_year}, <ContestantLink contestant={contestant} /> went to IOI
      even if he arrived at {rank} place at the national competition.
    </div>
  );
}

export function UserTile({ stat }: { stat: StatsUser }) {
  let content = null;
  if ("best_student" in stat) {
    content = <BestStudentTile stat={stat} />;
  }
  if ("win_at_first_participation" in stat) {
    content = <WinAtFirstParticipationTile stat={stat} />;
  }
  if ("student_with_most_participations" in stat) {
    content = <StudentWithMostParticipationsTile stat={stat} />;
  }
  if ("ioist_with_worst_rank" in stat) {
    content = <IOIstWithWorstRankTile stat={stat} />;
  }

  return <Tile variant="user">{content}</Tile>;
}
