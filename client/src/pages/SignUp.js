import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./SignUp.css"

export default class SignUp extends Component {

  state = {
    usernameSignup: "",
    emailAddressSignup: "",
    passwordSignup: ""
  }

  usernameSignUpChangedHandler = (event) => {
    this.state.usernameSignup = event.target.value
    this.setState(
      { usernameSignup: event.target.value }
    )
  }

  emailSignUpChangedHandler = (event) => {
    this.state.emailAddressSignup = event.target.value
    this.setState(
      { emailAddressSignup: event.target.value }
    )
  }

  passwordSignUpChangedHandler = (event) => {
    this.state.passwordSignup = event.target.value
    this.setState(
      { passwordSignup: event.target.value }
    )
  }

  onSubmitClicked = () => {
    console.log("username is : " + this.state.usernameSignup + "password is :" + this.state.passwordSignup + "email is: " + this.state.emailAddressSignup)
  }



  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="backLink">
          <Link to="/" className="stretched-link">Back to Log-In</Link>
        </div>
        <h5 className="hungryText">Hungry...?</h5>
        <p className="joinText">sign up with</p>

        <h1 className="header title">Feed Me!</h1>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label className="label" htmlFor="username">Username:</label><br />
              <input className="input form-control" type="text" id="username" name="username" placeholder="Username" onChange={this.usernameSignUpChangedHandler} value={this.state.usernameSignup} />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="username">E-mail address:</label><br />
              <input className="input form-control" type="text" id="email" name="username" placeholder="E-mail" onChange={this.emailSignUpChangedHandler} value={this.state.emailAddressSignup} />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">Password:</label><br />
              <input className="input form-control" type="password" id="password" name="password" placeholder="Password" onChange={this.passwordSignUpChangedHandler} value={this.state.passwordSignup} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn submitBtn" onClick={this.onSubmitClicked}>
            Submit
          </button>

        </div>
      </div>
    );
  }
}