import React from "react";
const Matchrow = ({
  team_img1,
  team_img2,
  name1,
  name2,
  score,
  state,
  date,
}) => {
  return (
    <div className="match-row">
      <div className="team-section">
        <div className="team1">
          <img className="team-img row-item" alt="team 1" src={team_img1} />
          <span className="team-name row-item">{name1}</span>
        </div>
        <span className="score row-item">{score}</span>
        <div className="team2">
          <span className="team-name row-item">{name2}</span>
          <img className="team-img row-item" alt="team 2" src={team_img2} />
        </div>
      </div>
      <span className={`state row-item ${state}`}>{state}</span>
    </div>
  );
};
export default Matchrow;
