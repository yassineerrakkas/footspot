import React from "react";
import "../CSS/Navbar.css";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <h2>Foot Spot</h2>
      </div>

      <form className="search-bar" action="">
        <input type="text" placeholder="Search"></input>
        <button type="submit" className="material-symbols-rounded search-btn">
          search
        </button>
      </form>

      <div className="right-side">
        <span className="material-symbols-rounded">favorite</span>
        <span className="material-symbols-rounded">dark_mode</span>
        <span className="material-symbols-rounded account">account_circle</span>
      </div>
    </nav>
  );
};
export default Navbar;
