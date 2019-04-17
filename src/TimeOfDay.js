import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import arrow from './arrow.png';
import './TimeOfDay.css';

class TimeOfDay extends Component {
  constructor(props) {
    super(props);
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
      <div className="TimeOfDay">
        <div className="TimeOfDay-header">
          <img src={logo} className="TimeOfDay-logo" alt="logo" /> 
          <p className= "TimeOfDay-text">GUIDE ME</p>
        </div>
        <button
          className="TimeOfDay-log-out"
          type="button"
          onClick={this.logOut}
        >
        Log Out
        </button>
        <div className="TimeOfDay-bar">
          <div className="TimeOfDay-bar-text">
            <p>Patient Name | Prescriptions | {this.props.label} </p>
          </div>
          <div className="TimeOfDay-bar-back">
            <a className="TimeOfDay-back-link"><NavLink to="/home">
            <img src={arrow} className="TimeOfDay-arrow" alt="arrow" /> 
            </NavLink></a>
          </div>
        </div>
        <div className = "TimeOfDay-body" style={{backgroundColor: this.props.color}}>
    		<div className="TimeOfDay-edit">
    			<div className = "TimeOfDay-edit-prescription"> PRESCRIPTION </div>
    			<div className = "TimeOfDay-dosage-prescription"> DOSAGE </div>
    			<div className = "TimeOfDay-instruction-prescription"> INSTRUCTION </div>
    		</div>
    		<div className = "TimeOfDay-body-scroll" style={{overflow: 'auto', maxHeight: 360}}>
		      <div className = "TimeOfDay-prescription">
		          {this.state.prescriptions.map((prescription, idx) => (
		            <div>
		              <button
		                className="TimeOfDay-prescription-remove"
		                type="button"
		                onClick={this.removePrescription(idx)}
		              >
		              -
		              </button>
		              {" "}
		              <input className = "TimeOfDay-edit-bar" type="text" id="drug_name" name="drug_name" placeholder={prescription.name} />
		            </div>
		          ))}
		      </div>
		      <div className = "TimeOfDay-dosage">
		          {this.state.prescriptions.map(prescription => (
		            <input className = "TimeOfDay-edit-bar" type="text" id="drug_dosage" name ="drug_instructions" placeholder={prescription.dosage} />
		          ))}
		      </div>
		      <div className = "TimeOfDay-instruction">
		          {this.state.prescriptions.map(prescription => (
		              <select className = "TimeOfDay-edit-bar" id="drug_instructions" name ="drug_instructions">
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
        <div className = "TimeOfDay-add-update">
          <button className = "TimeOfDay-add" type="button" onClick={this.addPrescription}>
            ADD
          </button>
          <button className = "TimeOfDay-update" type="button" onClick={this.updatePrescription}>
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default TimeOfDay;
