import React, { useEffect, useState } from 'react';
import './findLocations.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';


const FindLocations = (props) => {

    const mapStyles = {
        width: '100%',
        height: '100vh',
    };

    const [locations,setLocations] = useState([]);
    // console.log(locations)

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:4050/findLocations',
        }).then((response) => {
            setLocations(response.data);
            console.log(response)
        }).catch((err) => {
            alert("Data getting error");
            console.log(err)
        })
    }, [])

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Map
                google={props.google}
                zoom={11}
                style={mapStyles}
                initialCenter={{
                    lat: 17.387140,
                    lng: 78.491684,
                }}
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.latitude, lng: location.longitude }}
                        icon={{
                            url: 'https://cdn-icons-png.freepik.com/512/8/8071.png',// Replace with your icon URLs
                            scaledSize: new props.google.maps.Size(32, 32), // Adjust the size of the icon
                        }}
                    />
                ))}
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHQdswRmIJvci7ZZkQhbjBcgJ2JJ5UdV8', // Replace with your Google Maps API key
})(FindLocations)