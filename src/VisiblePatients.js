import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Search.css';
import Search from "./Search";

class VisiblePatients extends Component {
  constructor() {
    super()
    this.state = {
      patients: [{firstName: "Greg", lastName: "Naratil"}],
      filteredPatients: [{firstName: "Greg", lastName: "Naratil"}]
    }
    this.filterPatients = this.filterPatients.bind(this);
  }

  componentWillMount() {
    this.setState({
      patients: [{firstName: "Greg", lastName: "Naratil"}],
      filteredPatients: [{firstName: "Greg", lastName: "Naratil"}]
    })
  }

  filterPatients(patientFilter) {
    let filteredPatients = this.state.patients
    filteredPatients = filteredPatients.filter((patient) => {
      let patientName = patient.firstName.toLowerCase() + patient.lastName.toLowerCase()
      return patientName.indexOf(
        patientFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredPatients
    })
  }

  render() {
    return (
      <Search onChange={this.filterPatients} filteredPatients={this.state.filteredPatients} />
    )
  }
}

export default VisiblePatients;
