import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Home from "./Home";
import VisiblePatients from "./VisiblePatients";
import TimeOfDay from "./TimeOfDay";
import PrintPage from "./PrintPage";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Route exact path="/" render={(props) => <Login {...props} /> } />
            <Route path="/search" component={VisiblePatients}/>
            <Route path="/home/:currentPatient" render={(props) => <Home currentPatient={props.match.params.currentPatient} {...props} /> } />
            <Route path="/morning/:currentPatient" render={(props) => <TimeOfDay currentPatient={props.match.params.currentPatient} label={"Morning"} color={"#F39697"} {...props} /> } />
            <Route path="/afternoon/:currentPatient" render={(props) => <TimeOfDay currentPatient={props.match.params.currentPatient} label={"Afternoon"} color={"#F8B658"} {...props} /> } />
            <Route path="/evening/:currentPatient" render={(props) => <TimeOfDay currentPatient={props.match.params.currentPatient} label={"Evening"} color={"#7E4B68"} {...props} /> } />
            <Route path="/bedtime/:currentPatient" render={(props) => <TimeOfDay currentPatient={props.match.params.currentPatient} label={"Bedtime"} color={"#292965"} {...props} /> } />
            <Route path="/as-needed/:currentPatient" render={(props) => <TimeOfDay currentPatient={props.match.params.currentPatient} label={"As-Needed"} color={"#545454"} {...props} /> } />
            <Route path="/print/:currentPatient" render={(props) => <PrintPage currentPatient={props.match.params.currentPatient} {...props} /> } />
        </div>
      </HashRouter>
    );
  }
}

export default Router;
