import React from 'react'

const MapContainer = () => {
  return (
    <div>
      <h1>Insert the coordinates into database </h1>
      <h1>Find the Locations with coordinates from database</h1>
    </div>
  )
}

export default MapContainer

















// // src/MapContainer.js
// import React, { useState } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const MapContainer = (props) => {
//   const mapStyles = {
//     width: '100%',
//     height: '100vh',
//   };

//   const [selectedPlace, setSelectedPlace] = useState({
//     lat: null,
//     lng: null,
//   });

//   const locations = [
//     { lat: '17.489661109916767', lng: '78.35435489843752' },
//     { lat: '17.4392266147986', lng: '78.57614139746096' },
//     { lat: '17.387467635159553', lng: '78.47520450781252' },
//     { lat: '17.273391161950414', lng: '78.42233347626757' }
//   ]
//   // console.log(locations)

//   const onMapClick = (mapProps, map, clickEvent) => {
//     const { latLng } = clickEvent;
//     const lat = latLng.lat();
//     const lng = latLng.lng();
//     setSelectedPlace({ lat, lng });
//     console.log(lat, lng)
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <Map
//         google={props.google}
//         zoom={11}
//         style={mapStyles}
//         initialCenter={{
//           lat: 17.387140,
//           lng: 78.491684,
//         }}
//         onClick={onMapClick}
//       >
//         {locations.map((location, index) => (
//           <Marker
//             key={index}
//             position={{ lat: location.lat, lng: location.lng }}
//             icon={{
//               url: 'https://cdn-icons-png.freepik.com/512/8/8071.png',// Replace with your icon URLs
//               scaledSize: new props.google.maps.Size(32, 32), // Adjust the size of the icon
//             }}
//           />
//         ))}
//         {selectedPlace.lat && (
//           <Marker position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} />
//         )}
//       </Map>
//     </div>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCHQdswRmIJvci7ZZkQhbjBcgJ2JJ5UdV8', // Replace with your Google Maps API key
// })(MapContainer);