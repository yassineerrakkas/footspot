import React, { useState, useEffect } from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [mode, setMode] = useState("dark");

  const changeMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode !== null) {
      if (mode !== savedMode) {
        setMode(savedMode);
      }
    }
  }, [mode]);

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", mode);
  }, [mode]);
  return (
    <nav className="Navbar">
      <div className="logo">
        <h2>⚽️ Foot Spot</h2>
      </div>

      <form className="search-bar" action="">
        <input type="text" placeholder="Search"></input>
        <button type="submit" className="material-symbols-rounded search-btn">
          search
        </button>
      </form>

      <div className="right-side">
        <span className="material-symbols-rounded">favorite</span>
        <span className="material-symbols-rounded" onClick={changeMode}>
          {mode == "light" ? "dark_mode" : "light_mode"}
        </span>
        <span className="material-symbols-rounded account">account_circle</span>
      </div>
    </nav>
  );
};
export default Navbar;
