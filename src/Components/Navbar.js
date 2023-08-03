import React from "react";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <h2>Foot Spot</h2>
      </div>

      <form className="search-bar" action="">
        <input type="text" placeholder="Search"></input>
        <button type="submit" class="material-symbols-rounded search-btn">
          search
        </button>
      </form>

      <div className="right-side">
        <span class="material-symbols-rounded">favorite</span>
        <span class="material-symbols-rounded">dark_mode</span>
        <span class="material-symbols-rounded account">account_circle</span>
      </div>
    </nav>
  );
};
export default Navbar;
