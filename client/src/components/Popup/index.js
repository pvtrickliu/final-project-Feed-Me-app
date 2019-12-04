import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./style.css";
const axios = require("axios");

var lat;
var lon;
var cuisineId;
var zipcode;

const Popup = (props) => {
    const [state, dispatch] = useStoreContext();

    const zipCode = useRef();
    const getZipCode = (event) => {
        event.preventDefault()
        zipcode = zipCode.current.value;

        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_API}&components=postal_code:${zipcode}`)
            .then((res) => {
                console.log(res.data)
                showPosition({ lat: res.data.results[0].geometry.location.lat, lon: res.data.results[0].geometry.location.lng });
                redirect()
            });
    };
    function redirect(){
        props.setRedirect()
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        };
    };

    function showPosition(position) {
        console.log('position', position)
        if (position.coords) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        } else {
            lat = position.lat
            lon = position.lon
        }

        if ((lat && lon)) {
            return axios.get(`/api/restaurants?lat=${lat}&lon=${lon}&cuisineId=${cuisineId}`)
                .then(res => {
                    console.log(res.data)

                    // make array element for each resto

                    dispatch({
                        type: "PUT_RESTAURANTS",
                        restaurants: res.data
                    })
                    props.hideMe()
                    redirect()
                })
        }
    };

    if (props.isShowing) {
        cuisineId = state.images[state.currentImage].cuisineId;
    }
    // if (state.restaurants.length > 0 && props.isShowing === false) {
    //     debugger;
    //     props.hideMe();
    //     // dispatch({type: "HIDE_POP"})
    //     // return (
    //     //     <Redirect to='/restaurants' />
    //     // )

    // }

    return (props.isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="popup-modal">
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* <Link to="/restaurants" > */}
                    <p onClick={getLocation} className="useCurrentLocation" id="demo">Use your current location</p>
                    {/* </Link> */}
                    <p className="or">OR</p>
                    <p>Enter your zip code:</p>
                    <form>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" ref={zipCode} />
                        <input type="submit" className="submit" onClick={getZipCode}/>
                    </form>
                    {/* <Link to="/restaurants" > */}
                    {/* </Link> */}
                </div>
            </div>

        </React.Fragment>, document.body
    ) : null);
}

export default Popup;