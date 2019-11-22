import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./SignUp.css"

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div class="backLink">
          <Link to="/"><a class="stretched-link">Back to Log-In</a></Link>
        </div>
        <h5 className="hungryText">Hungry...?</h5>
        <p className="joinText">sign up with</p>
        
        <h1 className="header title">Feed Me!</h1>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label className="label" htmlFor="username">Username:</label><br />
              <input className="input" type="text" class="form-control" id="exampleFormControlInput1" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="username">E-mail address:</label><br />
              <input className="input" type="text" class="form-control" id="exampleFormControlInput1" name="username" placeholder="E-mail" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">Password:</label><br />
              <input className="input" type="password" class="form-control" id="exampleFormControlInput1" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn submitBtn">
            Submit
          </button>

        </div>
      </div>
    );
  }
}