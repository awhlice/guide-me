import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Morning from "./Morning";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Route exact path="/" exact component={Home}/>
            <Route path="/morning" component={Morning}/>
        </div>
      </HashRouter>
    );
  }
}

export default Router;