import React from "react";
import "../CSS/TopLeagues.css";
import Records from "../Json/topleagues.json";

const TopLeagues = () => {
  return (
    <div className="topleagues">
      {Records.map((record) => (
        <a href="#" key={record.id}>
          <div className="leagues-container">
            <img src={record.image_url} alt={record.title}></img>
            <span className="league-title">{record.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TopLeagues;
