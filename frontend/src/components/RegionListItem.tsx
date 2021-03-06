import React, { Component } from "react";
import { Link } from "react-router-dom";

import { RegionItem } from "../remote/region";
import { round } from "../utils/math";
import Medals from "./Medals";
import RegionsSVG from "./regions/Regions";

type Props = {
  region: RegionItem;
};

export default class RegionListItem extends Component<Props> {
  render() {
    const { region } = this.props;

    const avg_contestants_per_year = region.avg_contestants_per_year
      ? round(region.avg_contestants_per_year, 2)
      : "N/a";

    const SVG = RegionsSVG[region.id];

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
                <div className="region-container">
                  <SVG className="mr-3 align-self-start img-fluid region" preserveAspectRatio="xMidYMid" />
                </div>
              </Link>
              <div className="media-body">
                <dl className="row">
                  <dt className="col-sm-6">Avg Contestants per Year</dt>
                  <dd className="col-sm-6">{avg_contestants_per_year}</dd>
                  <dt className="col-sm-6">Number of Contestants</dt>
                  <dd className="col-sm-6">{region.num_contestants || "N/a"}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 align-items-center text-center">
            <Medals medals={region.medals} />
          </div>
        </div>
      </li>
    );
  }
}
