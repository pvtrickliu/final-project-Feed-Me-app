import React, { Component } from 'react';
import loginImg from "../photos/feedmePhoto.jpg";
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
              <label className="label" htmlFor="username">Username</label><br/>
              <input className="input" type="text" class="form-control" id="exampleFormControlInput1" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">Password</label><br/>
              <input className="input" type="password" class="form-control" id="exampleFormControlInput1" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn loginBtn">
            Login
          </button>
        </div>
      </div>
    );
  }
}