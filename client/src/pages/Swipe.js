import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
// import { useStoreContext } from "../utils/GlobalState";

const Swipe = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.setImage()
      .then(res => {dispatch({ type: "SET_IMAGES", images: res.data })})
      .catch(err => console.log(err))
  }, [state.currentImage])

  const toNext = () => {
    dispatch({
      type: "CHANGE_IMAGE_INDEX",
      currentImage: state.currentImage + 1
    });
  };

  const toPrev = () => {
    dispatch({
      type: "CHANGE_IMAGE_INDEX",
      currentImage: state.currentImage - 1
    });
  };

  return (
    <div>
      {
        state.images.length > 0 ?
          <>
            <img src={state.images[state.currentImage].image_link}></img>
            <h2>{state.images[state.currentImage].foodType}</h2>
          </>
          : 'foo'
      }
    </div>
  );
};

export default Swipe;
