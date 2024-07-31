import './App.css';
import { Outlet } from 'react-router-dom';
// import MapContainer from './views/locationCoordinates/locationCoordinates.js';
import Navbar from './views/navbar/navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <MapContainer/> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
