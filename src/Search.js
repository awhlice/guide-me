import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './Search.css';
import FilterForm from "./FilterForm";

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientFilter: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      patientFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div>
        <div className="Search">
          <div className="Search-header">
            <img src={logo} className="Search-logo" alt="logo" />
            <p className= "Search-text">GUIDE ME</p>
          </div>
          <div className= "Search-log-out">
            <a className="Search-log-out-link"><NavLink to="/">Log Out</NavLink></a>
          </div>
          <body className="Search-bar">
            <p>Search Patients</p>
          </body>
        </div>
        <FilterForm onChange={this.props.onChange}/>
        <div className="Search-space">
          {this.props.filteredPatients.map((item) => (
            <p>{item.firstName}</p>
          ))}
        </div>
      </div>


    )
  }
}

export default Search;

//<form>
  //<input
    //type="text"
    //placeholder="Search Patients..."
    //value={this.props.filterText}
    //ref="filterTextInput"
    //onChange={this.handleChange}
  ///>
//</form>

  // <label htmlFor="filter">Filter by Poet: </label>
  // <input type="text" id="filter"
  //   value={this.state.poetFilter}
  //   onChange={this.handleChange}/>
