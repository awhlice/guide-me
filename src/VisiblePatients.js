import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Search.css';
import Search from "./Search";

class VisiblePatients extends Component {
  constructor() {
    super()
    this.state = {
      patients: [],
      filteredPatients: [],
      firstName: "",
      lastName: "",
      birthDate: ""
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  logOut = () => {
    this.props.history.push('/')
  }

  componentWillMount() {
    this.setState({
      patients: [{firstName: "Gregory", lastName: "Naratil", dateOfBirth:"07101998"}, {firstName: "Alice", lastName: "Wu", dateOfBirth:"07101998"}, {firstName: "Robert", lastName: "Gerdisch", dateOfBirth:"07101997"}, {firstName: "Evelyn", lastName: "Chan", dateOfBirth:"08101998"}, {firstName: "Xenophon", lastName: "Papademetris", dateOfBirth:"07111998"}, {firstName: "Dave", lastName: "O'Connor", dateOfBirth:"12101998"}],
      filteredPatients: [{firstName: "Gregory", lastName: "Naratil", dateOfBirth:"07101998"}, {firstName: "Alice", lastName: "Wu", dateOfBirth:"07101998"}, {firstName: "Robert", lastName: "Gerdisch", dateOfBirth:"07101997"}, {firstName: "Evelyn", lastName: "Chan", dateOfBirth:"08101998"}, {firstName: "Xenophon", lastName: "Papademetris", dateOfBirth:"07111998"}, {firstName: "Dave", lastName: "O'Connor", dateOfBirth:"12101998"}],
      firstName: "",
      lastName: "",
      birthDate: ""
    })
  }

  handleFilter(filterFirst, filterLast, filterDate) {
    let filteredPatients = this.state.patients
    filteredPatients = filteredPatients.filter((patient) => {
      let patientFirst = patient.firstName.toLowerCase()
      let patientLast = patient.lastName.toLowerCase()
      let patientDate = patient.dateOfBirth
      return patientFirst.indexOf(filterFirst.toLowerCase()) !== -1 &&
            patientLast.indexOf(filterLast.toLowerCase()) !== -1 &&
            patientDate.startsWith(filterDate)
    })
    this.setState({
      filteredPatients: filteredPatients,
      firstName: filterFirst,
      lastName: filterLast,
      birthDate: filterDate
    })
  }

  render() {
    return (
      <Search handleFilter={this.handleFilter} firstName={this.state.firstName} lastName={this.state.lastName} birthDate={this.state.birthDate} filteredPatients={this.state.filteredPatients} logOut={this.logOut}/>
    )
  }
}

export default VisiblePatients;
