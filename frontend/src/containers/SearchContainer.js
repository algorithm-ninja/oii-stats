import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchSearchResults } from '../actions/search'
import { Link } from 'react-router-dom'


class SearchContainer extends Component {

  componentDidMount() {
    const q = this.props.match.params.q
    this.props.fetchSearchResults(q)
  }

  renderSearch(results) {
    return _.map(results, (value, key) => {
      const chiave = Object.keys(value)
      return (
        <div key={key}>
          {value[chiave].first_name} {value[chiave].last_name}
        </div>
      )
    } )
  }

  render() {
    const {search} = this.props
    console.log(search);
    const q = this.props.match.params.q
    if(!search) return <div>Loading ...</div>
    const no_results =  search.length === 0 ? <div>No results</div> : <div></div>
    return (
      <div>
        Search Results for {q}
        {no_results}
        {this.renderSearch(search)}
      </div>
    )
  }

}


function mapStateToProps(state) {
  console.log(state.search);
  return { search: state.search }
}

export default connect(mapStateToProps, { fetchSearchResults })(SearchContainer)