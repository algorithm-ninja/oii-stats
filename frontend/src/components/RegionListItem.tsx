import React, { Component } from "react";
import { Link } from "react-router-dom";

import { RegionItem } from "../remote/region";
import { round } from "../utils/math";
import Medals from "./Medals";

type Props = {
  region: RegionItem;
};

export default class RegionListItem extends Component<Props> {
  render() {
    const { region } = this.props;

    const avg_contestants_per_year = region.avg_contestants_per_year
      ? round(region.avg_contestants_per_year, 2)
      : "N/a";

    const medals = {
      gold: { number: region.medals.gold, cutoff: 0 },
      silver: { number: region.medals.silver, cutoff: 0 },
      bronze: { number: region.medals.bronze, cutoff: 0 }
    };

    return (
      <li className="RegionListItemContainer list-group-item">
        <div className=" row">
          <div className="col-12">
            <Link className="text-success" to={`/region/${region.id}`}>
              <h6>{region.name}</h6>
            </Link>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <div className="media">
              <Link to={`/region/${region.id}`}>
                <img
                  className="mr-3 align-self-start img-fluid"
                  src={`/regions/${region.name}.png`}
                  alt="Region"
                  onError={(event: any) => {
                    event.target.src = "/placeholder.jpg";
                  }}
                  width="125"
                />
              </Link>
              <div className="media-body">
                <dl className="row">
                  <dt className="col-sm-6">Avg Contestants per Year</dt>
                  <dd className="col-sm-6">{avg_contestants_per_year}</dd>
                  <dt className="col-sm-6">Number of Contestants</dt>
                  <dd className="col-sm-6">
                    {region.num_contestants || "N/a"}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 align-items-center text-center">
            <Medals medals={medals} cutoffs={false} />
          </div>
        </div>
      </li>
    );
  }
}