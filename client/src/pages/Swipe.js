import React, { useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import Button from "../components/Btn";
import Popup from "../components/Popup";
import "./Swipe.css";

const Swipe = () => {
  const [state, dispatch] = useStoreContext();

  console.log(state.user)

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

  return (
    <div className="swipe">
      <h1 className="header title">Feed Me!</h1>
      <div>
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
        <Button text="No" onClick={toNo} />
        <Button text="Yes" onClick={toYes} />
      </div>

      <Popup isShowing={state.isShowing} hide={hide} />
    </div>
  );
};

export default Swipe;
