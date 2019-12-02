import React from 'react';
import GoogleMapReact from 'google-map-react'
import './Marker.css'

const Marker = (props) => {
    const { color, name, id } = props;
    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
            />
            <div className="pulse" />
        </div>
    );
};

const MapBox = ({ height, restaurants }) => {
    console.log(process.env.REACT_APP_GOOGLE_API)
    return (
        <div style={{ height, width: '100%' }}>
        <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                defaultCenter={{
                    // lat: parseFloat(restaurants[0].restaurant.location.latitude),
                    // lng: parseFloat(restaurants[0].restaurant.location.longitude)
                    lat: 33.955413,
                    lng: -118.337844
                }}
                defaultZoom={10}
            >


                {
                    // restaurants.map((rest, i) => {
                    //     if (i < 10) {
                    //         return <Marker
                    //             lat={parseFloat(rest.restaurant.location.latitude)}
                    //             lng={parseFloat(rest.restaurant.location.longitude)}
                    //             // lat={59.955413}
                    //             // lng={30.337844}
                    //             name="My Marker"
                    //             color="red"
                    //         />
                    //     }
                    // })
                }
            </GoogleMapReact>
        </div>

    )
}

export default MapBox;