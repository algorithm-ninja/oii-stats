// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

mod contest;
mod region;
mod task;
mod user;

use db::DbConn;
use diesel::result::Error;

#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "snake_case")]
pub enum HomepageStat {
    RegionWithMostMedals(region::RegionWithMostMedals),
    RegionWithMostMedalsPerParticipant(region::RegionWithMostMedalsPerParticipant),
    RegionWithMostFirstPlaces(region::RegionWithMostFirstPlaces),
    RegionWithMostParticipants(region::RegionWithMostParticipants),

    BestStudent(user::BestStudent),
    WinAtFirstParticipation(user::WinAtFirstParticipation),
    StudentWithMostParticipations(user::StudentWithMostParticipations),
    #[serde(rename = "ioist_with_worst_rank")]
    IOIstWithWorstRank(user::IOIstWithWorstRank),

    TaskWithLowestAvgScore(task::TaskWithLowestAvgScore),
    TaskWithHighestAvgScore(task::TaskWithHighestAvgScore),
    TaskWithLowestMaxScore(task::TaskWithLowestMaxScore),
    TaskWithMostZeros(task::TaskWithMostZeros),
    TaskWithMostFullscores(task::TaskWithMostFullscores),

    ContestWithMostParticipants(contest::ContestWithMostParticipants),
    ContestWithMostExAequo(contest::ContestWithMostExAequo),
    MostNorthernContest(contest::MostNorthernContest),
    MostSouthernContest(contest::MostSouthernContest),
    ContestWithMostGirls(contest::ContestWithMostGirls),
    NumBoysGirls(contest::NumBoysGirls),
    NumParticipantsPerYear(contest::NumParticipantsPerYear),
    MostUsedLocation(contest::MostUsedLocation),
}

#[derive(Serialize, Deserialize, Debug)]
pub struct HomepageStats {
    results: Vec<HomepageStat>,
}

pub fn get_homepage_stats(conn: &DbConn) -> Result<HomepageStats, Error> {
    let mut results: Vec<HomepageStat> = vec![];
    region::get_region_stats(conn, &mut results)?;
    user::get_user_stats(conn, &mut results)?;
    task::get_task_stats(conn, &mut results)?;
    contest::get_contest_stats(conn, &mut results)?;
    Ok(HomepageStats { results: results })
}
