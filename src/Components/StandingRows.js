import React from "react";
import Records from "../Json/PremierLeague.json";

const StandingRows = () => {
  return (
    <>
      {Records.map((record) => (
        <tr key={record.rank} className="standingRow">
          <td className="rank">{record.rank}</td>
          <td className="team">
            <img src={record.logo} className="teamimg"></img>
            <p>{record.team}</p>
          </td>
          <td className="points">{record.points}</td>
          <td className="played">{record.games_played}</td>
          <td className="diff">{record.goal_difference}</td>
        </tr>
      ))}
    </>
  );
};
export default StandingRows;
