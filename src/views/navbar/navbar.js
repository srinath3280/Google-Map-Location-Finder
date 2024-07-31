import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='location-navbar'>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/save-coordinates'>Save Coordinates</a>
                    </li>
                    <li>
                        <a href='/find-locations'>Find Locations</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
