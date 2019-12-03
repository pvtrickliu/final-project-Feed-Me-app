import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import MapBox from '../components/MapBox';
import API from "../utils/API";
import { Link } from "react-router-dom";
import Btn from "../components/Btn"
import { ListItem, List } from "../components/List";
import "./Restaurants.css"

function Restaurants() {
  const [state, dispatch] = useStoreContext();

  console.log('resto', state.restaurants)

  const addFav = (e) => {
    console.log(e.target.id)
    console.log(state.user)
    console.log(state.restaurants[e.target.id].restaurant.location.address)
    let name = state.restaurants[e.target.id].restaurant.name;
    let address = state.restaurants[e.target.id].restaurant.location.address;
    let phone = state.restaurants[e.target.id].restaurant.phone_numbers;
    let hours = state.restaurants[e.target.id].restaurant.timings;
    API.saveFav(state.user.id, { address, name, phone, hours });
  }

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
      <h1 className="recommend">Recommended Restaurants</h1>

      <MapBox height="300px" restaurants={state.restuarants} className="map" />

      {state.restaurants.length ? (
        <List className="restaurants">
          {state.restaurants.map((restaurant, index) => (
            <ListItem key={index}>
              <h2 className="name">{restaurant.restaurant.name}</h2>
              <div className="address">{restaurant.restaurant.location.address}</div>
              <div className="phone">{restaurant.restaurant.phone_numbers}</div>
              <div className="hours">{restaurant.restaurant.timings}</div>
              <Btn text="Add to favorite" id={`${index}`} onClick={addFav} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h1 className="recommend">You haven't searched any restaurants yet!</h1>
      )}

    </div>
  );
}

export default Restaurants;