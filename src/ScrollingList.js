import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './ScrollingList.css';
import ReactList from 'react-list';

class ScrollingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPatient: {}
    }
    this.renderItem = this.renderItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  renderItem(index, key) {
    return (
      <div key={key} className="List-item" onClick={() => this.handleClick(this.props.filteredPatients[index])}>
        {this.props.filteredPatients[index].firstName+' '+this.props.filteredPatients[index].lastName}
      </div>
    )
  }

  handleClick(currentPatient) {
    this.setState({ currentPatient })
  }

  render() {
    return (
      <div className="Scroll-list" style={{overflow: 'auto', maxHeight: 600}}>
        <ReactList
          itemRenderer={this.renderItem}
          length={this.props.filteredPatients.length}
          type='uniform'
        />
      </div>
    )
  }
}

export default ScrollingList;
