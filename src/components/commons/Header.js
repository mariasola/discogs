import React from "react";
import { Link } from "react-router-dom";
import albumLogo from "../../images/album.png";


const Header = () => {
    return (
      <header className="header">
        <Link to="/" className="home_link">
        <img
          className="header_img"
          alt="album logo"
          src={albumLogo}
        />
        <h1>Discogs</h1>
        </Link>
      </header>
    );
  };
  
  export default Header;