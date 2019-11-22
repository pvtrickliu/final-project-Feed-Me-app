import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/LogIn";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
// import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />  */}
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;