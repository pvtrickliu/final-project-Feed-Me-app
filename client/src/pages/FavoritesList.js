import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { ListItem, List } from "../components/List";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";
import "./Favorites.css";

function Favorites() {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getFav(state.user.id)
            .then(res => dispatch({ type: "GET_FAVORITES", favorites: res.data }))
            .catch(err => console.log(err))
    }, []);

    const deleteFav = (e) => {
        console.log(e)
        API.deleteFav(state.user.id, e)
            .then(() => dispatch({ type: "DELETE_FAVORITES", id: e }))
            .catch(err => console.log(err))
    };

    const backtoSwipe = () => {
        console.log("component logout")
        API.logOut().then(res => {
            if(res.status === 200){
                window.location.replace('/swipe')
            }
        })
    };

    const logOut = () => {
        console.log("component logout")
        API.logOut().then(res => {
            if(res.status === 200){
                window.location.replace('/')
            }
        })
    };

    return (
        <div className="swipe">

            <h1 className="header title">Feed Me!</h1>
            <div className="newUserLink">
                <Link to="/swipe" className="newUser">Back to swipe</Link>
            </div>
            <div>
                <Btn text="Log Out" onClick={logOut} />
            </div>
            <span className="showFav">
                YOUR FAVORITES
            </span>

            {state.favorites.length ? (
                <List>
                    {state.favorites.map((favorite, index) => (
                        <ListItem key={index}>
                            <h2 className="name">{favorite.name}</h2>
                            <div className="address">{favorite.address}</div>
                            <div className="phone">{favorite.phone}</div>
                            <div className="hours">{favorite.hours}</div>
                            {/* <Btn text="Check in" onClick={() => deleteFav(favorite.id)}/> */}
                            <Btn className="checkin" text="Check in" id={favorite.id} onClick={() => deleteFav(favorite.id)} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h1 className="recommend">You haven't added any favorites yet!</h1>
                )}
        </div>
    )
};

export default Favorites;
