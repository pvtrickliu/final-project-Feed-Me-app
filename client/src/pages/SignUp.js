import React, { useState } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { Redirect } from 'react-router'
import loginImg from "../photos/feedmePhoto.jpg";
import { Link } from "react-router-dom"
import "./LogIn.css"
import API from '../utils/API';

export default (props) => {
  const [redirect, setRedirect] = useState(false)
  const [state, setState] = useState({
    email: "",
    password: "",
    username: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const onSubmitClicked = async () => {
    console.log("username is : " + state.email + "password is :" + state.password)
    try {
      const user = await API.signUp(state);
      if (user.status !== 200) throw "No User!"
      setRedirect(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="backLink">
        <Link to="/">Back to Log-In</Link>
      </div>
      <h5 className="hungryText">Hungry...?</h5>
      <p className="joinText">sign up with</p>

      <h1 className="header title">Feed Me!</h1>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label className="label" htmlFor="username">Username:</label><br />
            <input className="input form-control" type="text" id="username" name="username" placeholder="Username" onChange={handleChange} value={state.username} />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="username">E-mail address:</label><br />
            <input className="input form-control" type="text" id="email" name="email" placeholder="E-mail" onChange={handleChange} value={state.email} />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">Password:</label><br />
            <input className="input form-control" type="password" id="password" name="password" placeholder="Password" onChange={handleChange} value={state.password} />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn submitBtn" onClick={onSubmitClicked}>
          Submit
          </button>

      </div>
    </div>
  );
}