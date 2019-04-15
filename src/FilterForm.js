import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './FilterForm.css';

class FilterForm extends Component {
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
      <div className="Filters">
        <form className="Filter-bar">
          <input className = "Input-box" type="text" id="filter"
            placeholder={this.props.placeholder}
            value={this.state.patientFilter}
            onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default FilterForm;

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
