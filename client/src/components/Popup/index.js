import React, { useRef} from "react";
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
    const getZipCode = () => {
        zipcode = zipCode.current.value;
        console.log(zipcode)
        showPosition(undefined);
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        };
    };

    function showPosition(position) {
        console.log('position', position)
        if(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;    
        }
        if ((lat && lon) || zipcode) {
            return axios.get(`/api/restaurants?lat=${lat}&lon=${lon}&cuisineId=${cuisineId}&entity_id=${zipcode}`)
                .then(res => {
                    console.log(res.data)
                    dispatch({
                        type: "PUT_RESTAURANTS",
                        restaurants: res.data
                    })
                })
        }
    };

    if (props.isShowing) {
        cuisineId = state.images[state.currentImage].cuisineId;
    }
    if(state.restaurants.length > 0) {
        return (
            <Redirect to='/restaurants'/>
            )
        
    }

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
                    </form>
                    {/* <Link to="/restaurants" > */}
                    <button type="button" className="submit" onClick={getZipCode}>Submit</button>
                    {/* </Link> */}
                </div>
            </div>

        </React.Fragment>, document.body
    ) : null);
}

export default Popup;