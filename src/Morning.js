import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import arrow from './arrow.png';
import './Morning.css';

class Morning extends Component {
  constructor() {
    super();
    this.state = {
      prescriptions: [
        {
            name: 'Advil',
            dosage: '50mg',
            instructions: 'By mouth'
        },
        {
            name: 'Tylenol',
            dosage: '30mg',
            instructions: 'By mouth'
        }
      ]};
  }

  logOut = () => {
    this.props.history.push('/')
  }

  updatePrescription = idx => () => {
    this.setState({
      prescriptions: this.state.prescriptions.filter((s, sidx) => idx !== sidx)
    });
  };

  addPrescription = () => {
    this.setState({
      prescriptions: this.state.prescriptions.concat([
        {
            name: 'Name',
            dosage: 'Dosage',
            instructions: ''
        }])
    });
  };

  removePrescription = idx => () => {
    this.setState({
      prescriptions: this.state.prescriptions.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <div className="Morning">
        <div className="Morning-header">
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
        <div className="Morning-bar">
          <div className="Morning-bar-text">
            <p>Patient Name | Prescriptions | Morning </p>
          </div>
          <div className="Morning-bar-back">
            <a className="Morning-back-link"><NavLink to="/home">
            <img src={arrow} className="Morning-arrow" alt="arrow" /> 
            </NavLink></a>
          </div>
        </div>
        <div className = "Morning-body">
          <div className = "Morning-prescription"> PRESCRIPTION
              {this.state.prescriptions.map((prescription, idx) => (
                <div>
                  <button
                    className="Morning-prescription-remove"
                    type="button"
                    onClick={this.removePrescription(idx)}
                  >
                  -
                  </button>
                  {" "}
                  <input className = "Morning-edit-bar" type="text" id="drug_name" name="drug_name" placeholder={prescription.name} />
                </div>
              ))}
          </div>
          <div className = "Morning-dosage"> DOSAGE
              {this.state.prescriptions.map(prescription => (
                <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder={prescription.dosage} />
              ))}
          </div>
          <div className = "Morning-instruction"> INSTRUCTION
              {this.state.prescriptions.map(prescription => (
                  <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
                            <option value={prescription.instructions}>{prescription.instructions}</option>
                            <option value="Place under the tongue">Place under the tongue</option>
                            <option value="Apply topically">Apply topically</option>
                          </select>
              ))}
          </div>
        </div>
        <div className = "Morning-update-add">
          <button className = "Morning-update" type="button" onClick={this.updatePrescription}>
            UPDATE
          </button>
          <button className = "Morning-add" type="button" onClick={this.addPrescription}>
            ADD
          </button>
        </div>
      </div>
    );
  }
}

export default Morning;
