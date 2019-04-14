import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Home from "./Home";
import Morning from "./Morning";
import VisiblePatients from "./VisiblePatients";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Route exact path="/" exact component={Login}/>
            <Route path="/search" component={VisiblePatients}/>
            <Route path="/home" component={Home}/>
            <Route path="/morning" component={Morning}/>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
