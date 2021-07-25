import React from "react";
import "../styles/Navbar.css";

import { BsSearch } from "react-icons/bs";

const Navbar = ({ inputValue, handleOnChange }) => {
  return (
    <div className="navContainer">
      <div className="navLogo">
        <h2 className="navTitle">Search Your Favourite Pokemon!</h2>
      </div>
      <div className="navSearch">
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          className="navInput"
          placeholder="Search..."
        />
        <BsSearch />
      </div>
    </div>
  );
};

export default Navbar;
