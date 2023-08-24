import React from "react";
import "./Navbar.css";
import location from "../../assets/location.png"
import chevron from "../../assets/chevron.png"
import vertline from "../../assets/line.png"
import search from "../../assets/search.png"

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-logo-search-container">
            <div>
            <img
            className="navbar-logo"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Logo"/>
        </div>
        
        <div className="navbar-search-container">
            <div className="navbar-search-location">
                <img className="navbar-search-location" src={location} alt="Location"/>
                <input className="navbar-input-location" placeholder="City"/>
                <div>
                <img className="navbar-search-chevron" src={chevron} alt="Chevron"/>
                <img className="navbar-search-Vline" src={vertline} alt="VerticalLine"/>
                </div>

            </div>
            <div className="navbar-search-restro">
                <img className="navbar-search-search-icon" src={search} alt="Search"/>
                <input className="navbar-input-restro" placeholder="search for restaurant, cuisine and dishes"/>

            </div>
        </div>
            </div>
        <div className="navbar-login-signup-button-container">
            <button className="navbar-login-signup-button">Log In</button>
            <button className="navbar-login-signup-button">Sign Up</button>
        </div>
    </div>
    );
}
export default Navbar;
