import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './PrintOption.css';

class PrintOption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input id={this.props.option} className="Option-item" type="checkbox" defaultChecked={false}/>
        <label className="Option-item-label" htmlFor={this.props.option}>
          {this.props.option}
        </label>
      </div>
    )
  }
}

export default PrintOption;
