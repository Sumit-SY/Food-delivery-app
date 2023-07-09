import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      {/* Logo  */}
      <div>
        <img
          className="navbar-logo"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Logo"
        />
      </div>
      <div className="search-bar">
                <div className="location-container">
                    <img className="location-picture" src="https://img.icons8.com/officel/16/marker.png" />
                </div>
                <p className="location">Mumbai</p>
                <div className="arrow-container">
                    <img className="arrow-picture" src="https://img.icons8.com/ios-glyphs/30/sort-down.png" />
                </div>
                <div className="vertical-line"></div>
                <div className="search-icon-container">
                    <img className="search-icon-picture" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png" />
                </div>
                <p class="search-text">Search for a restaurant, cuisine or a dish</p>
                <p className="login">Log in</p>
                <p className="signup">Sign up</p>
            </div>
    </div>
  );
}

export default Navbar;