import React, { Component, UseState } from 'react';
import loginImg from "../photos/feedmePhoto.jpg";
import { Link } from "react-router-dom"
import "./LogIn.css"

export default class Login extends Component {

state = {
  emailAddressLogin: "",
  passwordLogin: ""
}

emailChangedHandler = (event) => {
  this.state.emailAddressLogin = event.target.value
  this.setState(
    {emailAddressLogin: event.target.value}
  )
}

passwordChangedHandler = (event) => {
  this.state.passwordLogin = event.target.value
  this.setState(
    {passwordLogin: event.target.value}
  )
}

onLoginClicked = () => {
  console.log("username is : " + this.state.emailAddressLogin + "password is :" + this.state.passwordLogin)
}
  

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>

        <h1 className="header title">Feed Me!</h1>
        <div className="content">
          <div className="image">
            <img className="styleMe" src={loginImg} alt="restaurantPhoto" />
          </div>
          <div className="form">
            <div className="form-group">
              <label className="label" htmlFor="email">E-mail:</label><br />
              <input className="input form-control" type="text" id="email" name="email" type="text" id="email" placeholder="E-mail address" onChange={this.emailChangedHandler} value={this.state.emailAddressLogin}/>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">Password:</label><br />
              <input className="input form-control" type="password" id="password" name="password" placeholder="password" onChange={this.passwordChangedHandler} value={this.state.passwordLogin}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn loginBtn" onClick={this.onLoginClicked}>
            Login
          </button>
          <div className="newUserLink">
            <Link to="/signup" className="newUser">New User? Click Here</Link>
          </div>
        </div>
      </div>
    );
  }
}