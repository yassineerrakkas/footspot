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
      <img className="team-img" alt="team 1" src={team_img1} />
      <span className="team-name">{name1}</span>
      <span className="score">{score}</span>
      <span className="team-name">{name2}</span>

      <img className="team-img" alt="team 2" src={team_img2} />
      <span className="state">{state}</span>
      <span className="date">{date}</span>
    </div>
  );
};
export default Matchrow;
