import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// import {useHistory} from 'react-router-dom'
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Swipe from "./pages/Swipe";
import Restaurants from "./pages/Restaurants";
import Favorites from "./pages/FavoritesList";
import { StoreProvider } from "./utils/GlobalState";
import API from './utils/API';
// import Nav from "./components/Nav";

function App() {

  return (
    <Router>
    {/* {((loggedState
   ) && (true)) ? <Redirect to="/swipe"></Redirect> :  */}
      <div>
        <StoreProvider >
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/swipe" component={Swipe} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;