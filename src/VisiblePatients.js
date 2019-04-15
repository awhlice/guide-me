import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Search.css';
import Search from "./Search";

class VisiblePatients extends Component {
  constructor() {
    super()
    this.state = {
      patients: [],
      filteredPatients: []
    }
    this.firstNameFilter = this.firstNameFilter.bind(this);
    this.lastNameFilter = this.lastNameFilter.bind(this);
  }

  componentWillMount() {
    this.setState({
      patients: [{firstName: "Gregory", lastName: "Naratil"}, {firstName: "Alice", lastName: "Wu"}, {firstName: "Robert", lastName: "Gerdisch"}, {firstName: "Evelyn", lastName: "Chan"}, {firstName: "Xenophon", lastName: "Papademetris"}, {firstName: "Dave", lastName: "O'Connor"}],
      filteredPatients: [{firstName: "Gregory", lastName: "Naratil"}, {firstName: "Alice", lastName: "Wu"}, {firstName: "Robert", lastName: "Gerdisch"}, {firstName: "Evelyn", lastName: "Chan"}, {firstName: "Xenophon", lastName: "Papademetris"}, {firstName: "Dave", lastName: "O'Connor"}]
    })
  }

  firstNameFilter(patientFilter) {
    let filteredPatients = this.state.patients
    filteredPatients = filteredPatients.filter((patient) => {
      let patientName = patient.firstName.toLowerCase()
      return patientName.indexOf(
        patientFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredPatients
    })
  }

  lastNameFilter(patientFilter) {
    let filteredPatients = this.state.patients
    filteredPatients = filteredPatients.filter((patient) => {
      let patientName = patient.lastName.toLowerCase()
      return patientName.indexOf(
        patientFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredPatients
    })
  }

  render() {
    return (
      <Search firstNameFilter={this.firstNameFilter} lastNameFilter={this.lastNameFilter} filteredPatients={this.state.filteredPatients} />
    )
  }
}

export default VisiblePatients;
