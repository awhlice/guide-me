import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import arrow from './arrow.png';
import './Morning.css';

class Morning extends Component {
  render() {
    return (
      <div className="Morning">
        <div className="Morning-header">
          <img src={logo} className="Morning-logo" alt="logo" /> 
          <p className= "Morning-text">GUIDE ME</p>
        </div>
        <div className= "Morning-log-out">
          <a
            className="Morning-log-out-link"
            href="https://reactjs.org"
            target="_self"
            rel="noopener noreferrer"
          >
            Log Out
          </a>
        </div>
        <div className="Morning-bar">
          <div className="Morning-bar-text">
            <p>Patient Name | Prescriptions | Morning </p>
          </div>
          <div className="Morning-bar-back">
            <a className="Morning-back-link"><NavLink to="/">
            <img src={arrow} className="Morning-arrow" alt="arrow" /> 
            </NavLink></a>
          </div>
        </div>
        <div className = "Morning-body">
          <div className = "Morning-prescription"> PRESCRIPTION 
            <body className = "Morning-prescription-edit">
             <form action="database.php" method="post">
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Name" value="Name">
               </input>
              </form>
            </body>
          </div>
          <div className = "Morning-dosage"> DOSAGE
            <body className = "Morning-dosage-edit">
              <form action="database.php" method="post">
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Dosage" value="Dosage">
               </input>
              </form>
            </body>
            </div>
          <div className = "Morning-instruction"> INSTRUCTION
            <body className = "Morning-instruction-edit">
              <form action="database.php" method="post">
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
               <input className = "Morning-edit-bar" type="text" id="Instruction" value="Instruction">
               </input>
              </form>
            </body>
            </div>
        </div>
        <div className = "Morning-update-add-remove">
          <div className = "Morning-update">
            <input className = "Morning-update-text" type="submit" value="UPDATE">
            </input>
          </div> 
          <div className = "Morning-add">
            <input className = "Morning-add-text" type="submit" value="ADD">
            </input>
          </div> 
          <div className = "Morning-remove">
            <input className = "Morning-remove-text" type="submit" value="REMOVE">
            </input>
          </div>
        </div>
      </div>
    );
  }
}

export default Morning;
