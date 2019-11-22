import React, { Component } from 'react';
import loginImg from "../photos/feedmePhoto.jpg";
import {Link} from "react-router-dom"
import "./LogIn.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        
        <h1 className="header title">Feed Me!</h1>
        <div className="content">
          <div className="image">
            <img className="styleMe"src={loginImg}  alt="restaurantPhoto"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label className="label" htmlFor="username">E-mail:</label><br/>
              <input className="input" type="text" class="form-control" id="exampleFormControlInput1" name="username" placeholder="E-mail address" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">Password:</label><br/>
              <input className="input" type="password" class="form-control" id="exampleFormControlInput1" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn loginBtn">
            Login
          </button>
          <div class="newUserLink">
            <Link to="/signup"><a  class="newUser">New User? Click Here</a></Link>
          </div>
        </div>
      </div>
    );
  }
}