import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './FilterForm.css';

class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientFirstFilter: "",
      patientLastFilter: "",
      patientDateFilter: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    if (this.props.placeholder == "First Name") {
      this.setState({
        patientFirstFilter: e.target.value
      })
      this.props.onChange(e.target.value, this.props.lastName, this.props.birthDate)
    }
    else if (this.props.placeholder == "Last Name") {
      this.setState({
        patientLastFilter: e.target.value
      })
      this.props.onChange(this.props.firstName, e.target.value, this.props.birthDate)
    }
    else if (this.props.placeholder == "Date of Birth: MMDDYYYY") {
      this.setState({
        patientDateFilter: e.target.value
      })
      this.props.onChange(this.props.firstName, this.props.lastName, e.target.value)
    }
  }

  render() {
    return (
      <div className="Filters">
        <form className="Filter-bar">
          <input className = "Input-box" type="text" id="filter"
            placeholder={this.props.placeholder}
            onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default FilterForm;
