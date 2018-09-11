import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { TaskListItem } from "../components";

function renderResults(results) {
  if (!results) return <div className="Loading">Loading ...</div>;
  const contestants = _.map(results.results, contestant => {
    const medal = contestant.medal
      ? renderMedal(contestant.medal, contestant.medal, false)
      : "";
    return (
      <tr key={contestant.contestant.id}>
        <th scope="row">{contestant.rank}</th>
        <td>
          <Link to={`/contestant/${contestant.contestant.id}`}>
            {contestant.contestant.first_name} {contestant.contestant.last_name}
          </Link>
        </td>
        <td>{contestant.score}</td>
        <td className="text-center">{medal}</td>
        <td>{contestant.region}</td>
      </tr>
    );
  });
  return (
    <div>
      <h3> Results </h3>
      <table className="table table-striped table-responsive-xs">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Contestant</th>
            <th scope="col">Score</th>
            <th className="text-center" scope="col">
              Medal
            </th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        <tbody>{contestants}</tbody>
      </table>
    </div>
  );
}

function renderMedal(medal, type, expanded) {
  const medal_icon = expanded ? (
    <div className={`${type} d-inline-block p-4 text-center`}>
      <ion-icon name="medal" size="large" />
      <div>{medal[type].number}</div>
      <div className="border-top">{medal[type].cutoff} points</div>
    </div>
  ) : (
    <div className={`${type} `}>
      <ion-icon name="medal" size="small" />
    </div>
  );
  return medal_icon;
}

function renderMedals(medals) {
  if (!medals) return <div className="Loading">Loading ...</div>;
  return (
    <div>
      <h3>Medals</h3>
      <div className="gold d-inline-block p-4 text-center">
        <ion-icon name="medal" size="large" />
        <div>{medals.gold.number}</div>
        <div className="border-top">{medals.gold.cutoff} points</div>
      </div>
      <div className="silver d-inline-block p-4 text-center">
        <ion-icon name="medal" size="large" />
        <div>{medals.silver.number}</div>
        <div className="border-top">{medals.silver.cutoff} points</div>
      </div>
      <div className="bronze d-inline-block p-4 text-center">
        <ion-icon name="medal" size="large" />
        <div>{medals.bronze.number}</div>
        <div className="border-top">{medals.bronze.cutoff} points</div>
      </div>
    </div>
  );
}

function renderTasks(tasks, year) {
  if (!tasks) return <div className="Loading">Loading ...</div>;
  const tasks_list = _.map(tasks, task => {
    return <TaskListItem key={task.name} task={task} year={year} />;
  });
  return (
    <div>
      <h3>Tasks</h3>
      <ul className="list-group">{tasks_list}</ul>
    </div>
  );
}

function renderInfo(contest) {
  if (!contest) return <div className="Loading">Loading ...</div>;
  const num_contestants = contest.num_contestants
    ? contest.num_contestants
    : "N/a";
  const max_score_possible = contest.max_score_possible
    ? contest.max_score_possible
    : "N/a";
  const max_score = contest.max_score ? contest.max_score : "N/a";
  const avg_score = contest.avg_score ? contest.avg_score.toFixed(2) : "N/a";
  return (
    <div>
      <h3>Info</h3>
      <dl className="row">
        <dt className="col-sm-7">Contestants</dt>
        <dd className="col-sm-5">{num_contestants}</dd>

        <dt className="col-sm-7">Max possible score</dt>
        <dd className="col-sm-5">{max_score_possible}</dd>

        <dt className="col-sm-7">Max score</dt>
        <dd className="col-sm-5">{max_score}</dd>

        <dt className="col-sm-7">Avg score</dt>
        <dd className="col-sm-5">{avg_score}</dd>
      </dl>
    </div>
  );
}

const ContestItem = ({ contest, results }) => {
  if (!contest) return <div className="Loading">Loading ...</div>;
  return (
    <div className="ContestItemContainer">
      <div className="row">
        <div className="col-12 col-md-6">{renderInfo(contest)}</div>
        <div className="col-12 col-md-6">{renderMedals(contest.medals)}</div>
        <div className="col-12">
          {renderTasks(contest.tasks, contest.navigation.current)}
        </div>
        <div className="col-12">{renderResults(results)}</div>
      </div>
    </div>
  );
};

export default ContestItem;
