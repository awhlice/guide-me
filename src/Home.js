import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
  }

  goMorning = () => {
    this.props.history.push('/morning')
  }

  goAfternoon = () => {
    this.props.history.push('/morning')
  }

  goEvening = () => {
    this.props.history.push('/morning')
  }

  goBedtime = () => {
    this.props.history.push('/morning')
  }

  goAsNeeded = () => {
    this.props.history.push('/morning')
  }

  goPrint = () => {
    this.props.history.push('/morning')
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Morning-logo" alt="logo" /> 
          <p className= "Morning-text">GUIDE ME</p>
        </div>
        <button
          className="Morning-log-out"
          type="button"
          onClick={this.logOut}
        >
        Log Out
        </button>
        <body className="Home-bar">
        <p>Patient Name | Prescriptions</p>
        </body>
          <button
              className="Home-morning"
              type="button"
              onClick={this.goMorning}
          >
          MORNING
          </button>
          <button
              className="Home-afternoon"
              type="button"
              onClick={this.goAfternoon}
          >
          AFTERNOON
          </button>
          <button
              className="Home-evening"
              type="button"
              onClick={this.goEvening}
          >
          EVENING
          </button>
          <button
              className="Home-bedtime"
              type="button"
              onClick={this.goBedtime}
          >
          BEDTIME
          </button>
          <button
              className="Home-as-needed"
              type="button"
              onClick={this.goAsNeeded}
          >
          AS-NEEDED
          </button>
          <button
              className="Home-print"
              type="button"
              onClick={this.goPrint}
          >
          PRINT
          </button>
      </div>
    );
  }
}

export default Home;