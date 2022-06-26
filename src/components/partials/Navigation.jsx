import React from "react";
import { NavLink } from "react-router-dom";
// import {scrollHome, scrollEvent, scrollOfficer} from "../../scroll";


function Navigation() {
    let logo = require("../../img/logo-1.png");
    return(
        <div className="navigation">
            <nav>
                <NavLink className="logo" to="/" style={{ textDecoration: 'none' }}  >
                    <img src={logo} alt = "UCSB-TSA"/>
                </NavLink>
                <ul className="menu-links">
                    <NavLink  to="/" style={{ textDecoration: 'none' }} >
                        <li className="menu-button">
                            <div className="nav-text">Home</div>
                        </li>
                    </NavLink>
                    <NavLink  to="/events" style={{ textDecoration: 'none' }} >
                        <li className="menu-button">
                            <div className="nav-text">Events</div>
                        </li>
                    </NavLink>
                    <NavLink  to="/officers" style={{ textDecoration: 'none' }} >
                        <li className="menu-button">
                            <div className="nav-text">Officers</div>
                        </li>
                    </NavLink>
                    
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                        Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">
                        Blog
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation 




