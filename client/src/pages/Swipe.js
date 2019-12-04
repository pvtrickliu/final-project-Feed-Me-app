import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import Button from "../components/Btn";
import Btn from "../components/Btn";
import Popup from "../components/Popup";
import "./Swipe.css";

const Swipe = () => {
  const [state, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false)

  console.log(state.user)

  const handleRedirect = () => {
    setRedirect(true)
    console.log("redirecting...")
  }

  useEffect(() => {
    API.setImage()
      .then(res => { dispatch({ type: "SET_IMAGES", images: res.data }) })
      .catch(err => console.log(err))
  }, [state.counter]);

  const toNo = (event) => {
    event.preventDefault();
    dispatch({
      type: "CHANGE_IMAGE_INDEX",
      offset: 1
    });
  };

  const toYes = (event) => {
    event.preventDefault();
    dispatch({
      type: "SHOW_POPUP",
      isShowing: true
    });
  };

  const hide = (event) => {
    event.preventDefault();
    dispatch({
      type: "HIDE_POP",
      isShowing: false
    });
  };

  const logOut = () => {
    console.log("component logout")
    API.logOut().then(res => {
      if (res.status === 200) {
        window.location.replace('/')
      }
    })
  };
  const hideMe = (data) => {
    setRedirect(true)
    dispatch({
      type: "HIDE_POP",
      isShowing: false
    });
    dispatch({
      type: "PUT_RESTAURANTS",
      restaurants: data
    });

    console.log('hideMe', state)
  };

  return (
    redirect ? <Redirect to='/restaurants'></Redirect> : <div className="swipe">
      <h1 className="header title">Feed Me!</h1>
      <div>
        <div>
          <Btn text="Log Out" onClick={logOut} />
        </div>
        <Link to="/favorites" >
          <span className="showFav">
            YOUR FAVORITES
          </span>
        </Link>
      </div>
      {
        state.images.length > 0 ?
          <div>
            <img src={state.images[state.currentImage].image_link} className="image"></img>
          </div>
          : null
      }
      <div className="button">
        <Button text="I'll pass" onClick={toNo} />
        <Button text="Let's Eat" onClick={toYes} />
      </div>

      <Popup isShowing={state.isShowing} hide={hide} hideMe={hideMe} setRedirect={handleRedirect} />
    </div>

  );
};

export default Swipe;
