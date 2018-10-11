import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { value: "", isOpen: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${encodeURI(this.state.value)}`);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-12">
          <Link to="/" className="logo-header">
            <img src="/oiistats.png" height="50" alt="logo" />
          </Link>
        </div>
        <Navbar color="white" light expand="lg">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className="">
            <Nav className="" navbar>
              <NavItem>
                <Link to="/" className="navbar-nav nav-link ">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contests" className="navbar-nav nav-link ">
                  Contests
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contestants" className=" navbar-nav nav-link ">
                  Hall of Fame
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/regions" className="navbar-nav nav-link ">
                  Regions
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/tasks" className="navbar-nav nav-link ">
                  Tasks
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contribute" className="navbar-nav nav-link ">
                  Contribute
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="navbar-nav nav-link ">
                  About
                </Link>
              </NavItem>
              <NavItem style={{ marginLeft: "25px" }}>
                <form
                  className="form-inline my-2 my-lg-0 float-right"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    className="form-control mr-sm-2"
                    value={this.state.value}
                    onChange={this.handleChange}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    required
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
