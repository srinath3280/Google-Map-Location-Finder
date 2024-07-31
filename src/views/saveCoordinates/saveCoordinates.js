import React, { useEffect, useState } from 'react';
import './saveCoordinates.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';


const SaveCoordinates = (props) => {

    const mapStyles = {
        width: '100%',
        height: '100vh',
    };

    const [selectedPlace, setSelectedPlace] = useState({
        lat: null,
        lng: null,
    });

    const onMapClick = (mapProps, map, clickEvent) => {
        const { latLng } = clickEvent;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setSelectedPlace({ lat, lng });
    };


    useEffect(() => {
        if(selectedPlace.lat && selectedPlace.lng){
            axios({
                method: 'POST',
                url: 'http://localhost:4050/savecoordinates',
                data: selectedPlace
            }).then((response) => {
                alert("Location saved successfully");
                console.log(response)
            }).catch((err) => {
                alert("Data inserting error");
                console.log(err)
            })
        }
        
    }, [selectedPlace])

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
                onClick={onMapClick}
            >
                {selectedPlace.lat && (
                    <Marker position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} />
                )}
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHQdswRmIJvci7ZZkQhbjBcgJ2JJ5UdV8', // Replace with your Google Maps API key
})(SaveCoordinates)