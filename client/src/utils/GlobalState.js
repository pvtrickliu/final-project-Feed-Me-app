import React, { createContext, useReducer, useContext } from "react";
import { strictEqual } from "assert";
import { stat } from "fs";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.images
      };

    case "CHANGE_IMAGE_INDEX":
      if (state.currentImage === 9) {
        return {
          ...state,
          currentImage: 0,
          counter: state.counter + 1
        };
      };

      return {
        ...state,
        currentImage: state.currentImage + action.offset
      };

    case "SHOW_POPUP":
      return {
        ...state,
        isShowing: true
      };

    case "HIDE_POP":
      return {
        ...state,
        isShowing: false
      };

    case "PUT_RESTAURANTS":
      return {
        ...state,
        restaurants: action.restaurants
      }

    case "LOGIN_USER":
      console.log(action)
      return {
        ...state,
        user: action.user
      }

    case "ADD_FAVORITES":
      return {
        ...state,
        favorites: [action.restaurant, ...state.favorites]
      }

    case "GET_FAVORITES":
      return {
        ...state,
        favorites: [...action.favorites]
      }

    case "DELETE_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((restaurant) => {
          return restaurant.id !== action.id;
        })
      }

    default:
      return state;
  };
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    images: [],
    currentImage: 0,
    counter: 0,
    isShowing: false,
    restaurants: [],
    favorites: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };





