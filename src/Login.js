import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <p className= "Login-text">GUIDE ME</p>
        </div>
        <div className="Login-box">
        <body className="Login-box-edit">
          <form action="database.php" method="get">
            <input className = "Login-username" type="text" id="username" name="username" placeholder="Username">
            </input>
          </form>
          <form action="database.php" method="get">
            <input className = "Login-password" type="password" id="password" name="password" placeholder="Password">
            </input>
          </form>
        </body>
        <body className = "Login-button">
          <a className="Login-link"><NavLink to="/search">LOG IN</NavLink></a>
        </body>
        </div>
        <body className="forgot-password">
          <a className="forgot-pw-link"><NavLink to="/">Forgot password?</NavLink></a>
        </body>
        <div className="bottom"></div>
      </div>
    );
  }
}

export default Login;
