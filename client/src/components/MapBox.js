import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import './Marker.css';
import { useStoreContext } from "../utils/GlobalState";


const Marker = (props) => {

    const { color, name, id } = props;
    return (
        <div title={name}>
            <div
                className="pin bounce"
                style={{ backgroundColor: color }}
                
            />
            <div className="number">{id}</div>
            <div className="pulse" />
        </div>
    );
};

const MapBox = ({ height }) => {
    const [state, dispatch] = useStoreContext()
    const restaurants = sessionStorage.getItem("FeedMe") ?  JSON.parse(sessionStorage.getItem("FeedMe")): [];
    console.log(process.env.REACT_APP_GOOGLE_API)

    useEffect(() => {
        console.log(state.restaurants)
    }, [])


    console.log("MapBox", state.restaurants)
    return (
        <div style={{ height, width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                defaultCenter={state.restaurants[0] ? {
                    lat: parseFloat(state.restaurants[0].restaurant.location.latitude),
                    lng: parseFloat(state.restaurants[0].restaurant.location.longitude)
                } : restaurants.length ? {lat: parseFloat(state.restaurants[0].restaurant.location.latitude),
                lng: parseFloat(state.restaurants[0].restaurant.location.longitude)}
                : {
                        lat: 33.955413,
                        lng: -118.337844
                    }
                }
                defaultZoom={13}
            >


                {state.restaurants.map((rest, i) => {
                    if (i < 20) {
                        return <Marker
                            key={i + '-marker'}
                            id={i + 1}
                            lat={parseFloat(rest.restaurant.location.latitude)}
                            lng={parseFloat(rest.restaurant.location.longitude)}
                            name={rest.restaurant.name}
                            color="red"
                        />
                    }
                })
                }
            </GoogleMapReact>
        </div>

    )
}

MapBox.defaultProps = {
    restaurants: []
}

export default MapBox;