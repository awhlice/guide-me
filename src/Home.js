import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
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
          <a className="Home-log-out-link"><NavLink to="/">Log Out</NavLink></a>
        </div>
        <body className="Home-bar">
        <p>Patient Name | Prescriptions</p>
        </body>
          <body className = "Home-morning">
            <a className="Home-morning-link"><NavLink to="/morning">MORNING</NavLink></a>
          </body>
          <body className = "Home-afternoon">
          	<a className="Home-morning-link"><NavLink to="/morning">AFTERNOON</NavLink></a>
          </body>
          <body className = "Home-evening">
          	<a className="Home-morning-link"><NavLink to="/morning">EVENING</NavLink></a>
          </body>
          <body className = "Home-bedtime">
          	<a className="Home-morning-link"><NavLink to="/morning">BEDTIME</NavLink></a>
          </body>
          <body className = "Home-as-needed">
          	<a className="Home-morning-link"><NavLink to="/morning">AS-NEEDED</NavLink></a>
          </body>
          <body className = "Home-print">
          	<a className="Home-morning-link"><NavLink to="/morning">PRINT</NavLink></a>
          </body>
      </div>
    );
  }
}

export default Home;