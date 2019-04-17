import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import TimeOfDay from "./TimeOfDay";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Route exact path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/morning" render={(props) => <TimeOfDay label={"Morning"} color={"#F39697"} {...props} /> } />
            <Route path="/afternoon" render={(props) => <TimeOfDay label={"Afternoon"} color={"#F8B658"} {...props} /> } />
            <Route path="/evening" render={(props) => <TimeOfDay label={"Evening"} color={"#7E4B68"} {...props} /> } />
            <Route path="/bedtime" render={(props) => <TimeOfDay label={"Bedtime"} color={"#292965"} {...props} /> } />
            <Route path="/as-needed" render={(props) => <TimeOfDay label={"As-Needed"} color={"#545454"} {...props} /> } />
        </div>
      </HashRouter>
    );
  }
}

export default Router;
