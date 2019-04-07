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
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder="Name">
               </input>
              </form>
            </body>
          </div>
          <div className = "Morning-dosage"> DOSAGE
            <body className = "Morning-dosage-edit">
              <form action="database.php" method="post">
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
               <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder="Dosage">
               </input>
              </form>
            </body>
            </div>
          <div className = "Morning-instruction"> INSTRUCTION
            <body className = "Morning-instruction-edit">
              <form action="database.php" method="post">
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
                <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                  <option value="By mouth">By mouth</option>
                  <option value="Place under the tongue">Place under the tongue</option>
                  <option value="Apply topically">Apply topically</option>
                </select>
              </form>
            </body>
            </div>
        </div>
        <div className = "Morning-update-add-remove">
          <div className = "Morning-update">
            <form action="database.php" method="post">
              <input className = "Morning-update-text" type="submit" value="UPDATE">
              </input>
            </form>
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
