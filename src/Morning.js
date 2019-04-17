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
            instructions: 'Apply topically'
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
  	const instructions = ['By mouth', 'Apply topically', 'Place onto the skin', 'Spray into nose', 'By nebulization', 
  						  'Inhale into the lungs', 'Apply topically', 'Place drops into both eyes', 'Place into the ear', 
  						  'Place under the tongue', 'Place between the gums and cheek', 'Inject into muscle', 
  						  'Inject into fat layer under the skin', 'Inject into rectum', 'Inject into vagina']
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
    		<div className="Morning-edit">
    			<div className = "Morning-edit-prescription"> PRESCRIPTION </div>
    			<div className = "Morning-dosage-prescription"> DOSAGE </div>
    			<div className = "Morning-instruction-prescription"> INSTRUCTION </div>
    		</div>
    		<div className = "Morning-body-scroll" style={{overflow: 'auto', maxHeight: 360}}>
		      <div className = "Morning-prescription">
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
		      <div className = "Morning-dosage">
		          {this.state.prescriptions.map(prescription => (
		            <input className = "Morning-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder={prescription.dosage} />
		          ))}
		      </div>
		      <div className = "Morning-instruction">
		          {this.state.prescriptions.map(prescription => (
		              <select className = "Morning-edit-bar" id="drug_instructions" name ="drug_instructions">
		                <option value={prescription.instructions}>{prescription.instructions}</option>
		                {instructions.map(instruction => {
		                	if (instruction != prescription.instructions)
		                		return <option value={instruction}>{instruction}</option>
		                })}
		              </select>
		          ))}
		      </div>
		    </div>
		</div>
        <div className = "Morning-add-update">
          <button className = "Morning-add" type="button" onClick={this.addPrescription}>
            ADD
          </button>
          <button className = "Morning-update" type="button" onClick={this.updatePrescription}>
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default Morning;
