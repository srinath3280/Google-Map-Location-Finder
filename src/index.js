import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import MyComponent from './views/locationCoordinates/locationCoordinates';
import MyGoogleMap from './views/locationCoordinates/locationCoordinates';
import SaveCoordinates from './views/saveCoordinates/saveCoordinates';
import FindLocations from './views/findLocations/findLocations';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<MyGoogleMap></MyGoogleMap>
      },
      {
        path:'/save-coordinates',
        element:<SaveCoordinates></SaveCoordinates>
      },
      {
        path:'/find-locations',
        element:<FindLocations></FindLocations>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
