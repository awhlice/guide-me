import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" /> 
          <p className= "Home-text">GUIDE ME</p>
        </div>
        <div className= "Home-log-out">
          <a
            className="Home-log-out-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            Log Out
          </a>
        </div>
        <body className="Home-bar">
        <p>Patient Name | Prescriptions</p>
        </body>
          <body className = "Home-morning">
          <a
            className="Home-morning-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            MORNING
          </a>
          </body>
          <body className = "Home-afternoon">
          <a
            className="Home-afternoon-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            AFTERNOON
          </a>
          </body>
          <body className = "Home-evening">
          <a
            className="Home-evening-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            EVENING
          </a>
          </body>
          <body className = "Home-bedtime">
          <a
            className="Home-bedtime-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            BEDTIME
          </a>
          </body>
          <body className = "Home-as-needed">
          <a
            className="Home-as-needed-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            AS NEEDED
          </a>
          </body>
          <body className = "Home-print">
          <a
            className="Home-print-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            PRINT
          </a>
          </body>
      </div>
    );
  }
}

export default Home;
