import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchRegions } from "../actions/regions";
// import { Link } from "react-router-dom";

import { RegionListItem } from "../components";

class RegionsContainer extends Component {
  componentDidMount() {
    this.props.fetchRegions();
  }

  renderRegions(regions) {
    if (!regions) return <div className="Loading">Loading ...</div>;
    console.log(regions);
    const regions_list = _.map(regions, (region, i) => {
      return <RegionListItem region={region} key={i} />;
    });
    return <ul className="list-group">{regions_list}</ul>;
  }

  render() {
    const { error } = this.props;
    if (error) return <div>{error}</div>;
    const { regions } = this.props;
    if (!regions) return <div className="Loading">Loading ...</div>;
    console.log(regions);
    return (
      <div className="row">
        <div className="col-12">
          <h2>Regions</h2>
        </div>
        <div className="col-12">{this.renderRegions(regions)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.regions && state.regions.error)
    return { error: "Connection Error" };
  return { regions: state.regions };
}

export default connect(
  mapStateToProps,
  { fetchRegions }
)(RegionsContainer);
