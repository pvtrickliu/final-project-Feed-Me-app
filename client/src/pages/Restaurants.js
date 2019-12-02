import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Btn from "../components/Btn"

import { ListItem, List } from "../components/List";
// import DeleteBtn from "../DeleteBtn";

function Restaurants() {
  const [state, dispatch] = useStoreContext();

  console.log('resto', state.restaurants)



  return (
    <div className="swipe">
      <h1 className="header title">Feed Me!</h1>
      <h1>Recommended Restaurants for You</h1>
      <div>
        <Link to="/favorites" >
          <span className="showFav">
            YOUR FAVORITES
          </span>
        </Link>
      </div>
     
      {state.restaurants.length ? (
        <List>
          {state.restaurants.map(restaurant => (
            <ListItem key={restaurant.restaurant.res_id}>
              <div>{restaurant.restaurant.name}</div>
              <div>{restaurant.restaurant.location.address}</div>
              <div>{restaurant.restaurant.phone_numbers}</div>
              <div>{restaurant.restaurant.timings}</div>
              {/* <Btn onClick={() => removePost(post._id)} /> */}
              <Btn text="Add to favorite"/>
            </ListItem>
          ))}
        </List>
      ) : null
      }
      
    </div>
  );
}

export default Restaurants;