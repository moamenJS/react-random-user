import React from 'react'
import GoogleMapReact from 'google-map-react';
import pin from './pin.png'


const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)"
  };

function Map(props) {
    return (
        
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec" }}
                defaultCenter={{lat: props.lat, lng: props.long}}
                defaultZoom={props.zoom}
            >
                <img style={markerStyle} src={pin} alt="pin" lat={props.lat} lng={props.long} />
            </GoogleMapReact>
        </div>
    )
}

export default Map