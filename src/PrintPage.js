import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './PrintPage.css';
import Guide from "./Guide";
import PrintOption from "./PrintOption";

class PrintPage extends Component {
  constructor(props) {
    super(props);
  }

  logOut = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
      <div className="Print">
        <div className="Print-header">
          <img src={logo} className="Print-logo" alt="logo" />
          <p className= "Print-text">GUIDE ME</p>
        </div>
        <button
          className="Print-log-out"
          type="button"
          onClick={this.logOut}
        >
        Log Out
        </button>
        <body className="Print-bar">
        <p>{this.props.location.state.currentPatient} | Print Guide</p>
        </body>
        </div>
        <div className="Print-left">
          <Guide />
        </div>
        <div className="Print-right">
          <div className="Print-section">
            <h1 className="Print-text-size">TEXT SIZE</h1>
            <PrintOption option="Small" />
            <PrintOption option="Medium" />
            <PrintOption option="Large" />
            <hr className="horizontal-line"/>
          </div>
          <div className="Print-section">
            <h1 className="Print-colorblind">COLORBLIND</h1>
            <PrintOption option="Yes" />
            <PrintOption option="No" />
            <hr className="horizontal-line"/>
          </div>
          <div className ="Print-button">
            <a className="Print-link"><NavLink to="/print">PRINT</NavLink></a>
          </div>
        </div>
      </div>
    )
  }
}

export default PrintPage;
