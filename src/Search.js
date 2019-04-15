import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './Search.css';
import FilterForm from "./FilterForm";
import ScrollingList from "./ScrollingList";

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientFilter: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      patientFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className="Search-container">
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
          <div className="Search-left">
            <FilterForm onChange={this.props.firstNameFilter} placeholder="First Name"/>
            <FilterForm onChange={this.props.lastNameFilter} placeholder="Last Name"/>
            <FilterForm onChange={this.props.lastNameFilter} placeholder="Date of Birth: MMDDYYYY"/>
            <div className ="Add-button">
              <a className="Add-link"><NavLink to="/home">ADD PATIENT</NavLink></a>
            </div>
          </div>
          <ScrollingList filteredPatients={this.props.filteredPatients} />
      </div>


    )
  }
}

export default Search;

// {this.props.filteredPatients.map((item) => (
//   <p>{item.firstName}</p>
// ))}

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
