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
        }
      }
      return {
        ...state,
        currentImage: state.currentImage + action.offset
      }

    case "SHOW_POPUP":
      return {
        ...state,
        isShowing: true
      }

    case "HIDE_POP":
      return {
        ...state,
        isShowing: false
      }

  }

  //   case UPDATE_POSTS:
  //     return {
  //       ...state,
  //       posts: [...action.posts],
  //       loading: false
  //     };

  //   case ADD_POST:
  //     return {
  //       ...state,
  //       posts: [action.post, ...state.posts],
  //       loading: false
  //     };

  //   case REMOVE_POST:
  //     return {
  //       ...state,
  //       posts: state.posts.filter((post) => {
  //         return post._id !== action._id;
  //       })
  //     };

  //   case ADD_FAVORITE:
  //     return {
  //       ...state,
  //       favorites: [action.post, ...state.favorites],
  //       loading: false
  //     };

  //   case UPDATE_FAVORITES:
  //     return {
  //       ...state,
  //       favorites: [...state.favorites],
  //       loading: false
  //     };

  //   case REMOVE_FAVORITE:
  //     return {
  //       ...state,
  //       favorites: state.favorites.filter((post) => {
  //         return post._id !== action._id;
  //       })
  //     };

  //   case LOADING:
  //     return {
  //       ...state,
  //       loading: true
  //     };

  //   default:
  //     return state;
  // }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    // state:
    // users: [ ],
    // user: {username, email, passowrd},
    images: [],
    currentImage: 0,
    counter: 0,
    isShowing: false,
    hide: true,
    geolocation: []
    // image: {image link, food type},
    // restaurants: [ ],
    // restaurant: {name, address, phone number, hours of operation},
    // favorites: [ ],
    // favorite: {name, address, phone number, hours of operation}
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

//   posts: [],
//   currentPost: {
//     _id: 0,
//     title: "",
//     body: "",
//     author: ""
//   },
//   favorites: [],
//   loading: false'

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };





