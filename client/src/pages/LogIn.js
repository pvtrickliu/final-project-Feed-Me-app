import React, { useState } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { Redirect } from 'react-router'
import loginImg from "../photos/feedmePhoto.jpg";
import { Link } from "react-router-dom"
import "./LogIn.css"
import API from '../utils/API';

export default (props) => {
  const [, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false)
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const onLoginClicked = async () => {
    console.log("username is : " + state.email + "password is :" + state.password)
    try {
      const user = await API.login(state);
      console.log(user)
      if (user.status !== 200) throw "No User!"
      dispatch({
        type: "LOGIN_USER",
        user: user.data
      })
      setRedirect(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      {redirect && <Redirect to="/swipe" />}
      <h1 className="header title">Feed Me!</h1>
      <div className="content">
        <div className="image">
          <img className="styleMe" src={loginImg} alt="restaurantPhoto" />
        </div>
        <div className="form">
          <div className="form-group">
            <label className="label" htmlFor="email">E-mail:</label><br />
            <input className="input form-control" type="text" id="email" name="email" placeholder="E-mail address" onChange={handleChange} value={state.email} />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">Password:</label><br />
            <input className="input form-control" type="password" id="password" name="password" placeholder="password" onChange={handleChange} value={state.password} />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn loginBtn" onClick={onLoginClicked}>
          Login
          </button>
        <div className="newUserLink">
          <Link to="/signup" className="newUser">New User? Click Here</Link>
        </div>
      </div>
    </div>
  );
}