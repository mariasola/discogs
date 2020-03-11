import React from "react";
import { Link } from "react-router-dom";
import albumLogo from "../../images/album.png";
import Filters from "../commons/Filters";


const Header = (props) => {
  const { handleFilter} = props;
    return (
      <header className="header">
        <Link to="/" className="header-link">
        <img
          className="header-img"
          alt="album logo"
          src={albumLogo}
        />
        <h1 className="header-text">Discogs</h1>
        </Link>
        <Filters handleFilter={handleFilter} />
      </header>
    );
  };
  
  export default Header;