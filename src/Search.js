import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './Search.css';
import FilterForm from "./FilterForm";
import ScrollingList from "./ScrollingList";

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Search-container">
        <div className="Search">
          <div className="Search-header">
            <img src={logo} className="Search-logo" alt="logo" />
            <p className= "Search-text">GUIDE ME</p>
          </div>
          <button
            className="Search-log-out"
            type="button"
            onClick={this.props.logOut}
          >
          Log Out
          </button>
          <body className="Search-bar">
            <p>Search Patients</p>
          </body>
        </div>
          <div className="Search-left">
            <FilterForm onChange={this.props.handleFilter} firstName={this.props.firstName} lastName={this.props.lastName} birthDate={this.props.birthDate} placeholder="First Name"/>
            <FilterForm onChange={this.props.handleFilter} firstName={this.props.firstName} lastName={this.props.lastName} birthDate={this.props.birthDate} placeholder="Last Name"/>
            <FilterForm onChange={this.props.handleFilter} firstName={this.props.firstName} lastName={this.props.lastName} birthDate={this.props.birthDate} placeholder="Date of Birth: MMDDYYYY"/>
            <div className ="Add-button">
              <a className="Add-link"><NavLink to="/search">ADD PATIENT</NavLink></a>
            </div>
          </div>
          <ScrollingList filteredPatients={this.props.filteredPatients} />
      </div>
    )
  }
}

export default Search;
