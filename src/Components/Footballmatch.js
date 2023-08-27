import React, { useState } from "react";
import "../CSS/Footballmatch.css";
import Matchrow from "./Matchrow";
import StandingRows from "./StandingRows";

const Footballmatch = ({ leagueid }) => {
  const [selectedYear, setYear] = useState(new Date().getFullYear() - 1);
  const [cond, setCond] = useState(true);

  const handleAllMatchClick = () => {
    setCond(true);
  };

  const handleLiveGamesClick = () => {
    setCond(false);
  };

  const matchData = [
    {
      team_img1: "https://api.sofascore.app/api/v1/team/2829/image",
      name1: "Real Madrid",
      score: "0 - 0",
      name2: "Barselona",
      team_img2: "https://api.sofascore.app/api/v1/team/2817/image",
      state: "Full-Time",
      date: "18 December 2022",
    },
    {
      team_img1: "https://api.sofascore.app/api/v1/team/2829/image",
      name1: "Real Madrid",
      score: "0 - 0",
      name2: "Barselona",
      team_img2: "https://api.sofascore.app/api/v1/team/2817/image",
      state: "Full-Time",
      date: "18 December 2022",
    },
    {
      team_img1: "https://api.sofascore.app/api/v1/team/2829/image",
      name1: "Real Madrid",
      score: "0 - 0",
      name2: "Barselona",
      team_img2: "https://api.sofascore.app/api/v1/team/2817/image",
      state: "Full-Time",
      date: "18 December 2022",
    },
    {
      team_img1: "https://api.sofascore.app/api/v1/team/2829/image",
      name1: "Real Madrid",
      score: "0 - 0",
      name2: "Barselona",
      team_img2: "https://api.sofascore.app/api/v1/team/2817/image",
      state: "Full-Time",
      date: "18 December 2022",
    },
  ];
  const options = [];
  for (let year = 2022; year >= 2010; year--) {
    options.push(
      <option key={year} value={year}>
        {year}/{year + 1}
      </option>
    );
  }
  return (
    <div className="footballmatches">
      <main>
        <p className="container-title">⚽️ Football Match</p>
        <ul className="options">
          <li
            className={cond ? "item active" : "item"}
            onClick={handleAllMatchClick}
          >
            All Match
          </li>
          <li
            className={cond ? "item" : "item active"}
            onClick={handleLiveGamesClick}
          >
            <small>🔴</small> Live Games
          </li>
        </ul>
        <div className="line"></div>
        {matchData.map((match, index) => (
          <Matchrow
            key={index}
            team_img1={match.team_img1}
            name1={match.name1}
            score={match.score}
            name2={match.name2}
            team_img2={match.team_img2}
            state={match.state}
            date={match.date}
          />
        ))}
        <div className="line"></div>
        <div className="standings">
          <p className="container-title">🏆 Standings</p>
          <span className="season">
            season :{" "}
            <select
              value={selectedYear}
              onChange={(e) => setYear(e.target.value)}
            >
              {options}
            </select>
          </span>
          <div className="standing-table">
            <table className="stable">
              <thead className="table-header">
                <tr>
                  <th className="rank-header">#</th>
                  <th className="teams-header">Teams</th>
                  <th className="played-header">Pl</th>
                  <th className="w-header">W</th>
                  <th className="d-header">D</th>
                  <th className="l-header">L</th>
                  <th className="f-header">F</th>
                  <th className="a-header">A</th>
                  <th className="gd-header">GD</th>
                  <th className="points-header">Pts</th>
                </tr>
              </thead>
              <tbody className="table-content">
                <StandingRows
                  id={leagueid}
                  year={selectedYear}
                  setYear={setYear}
                />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footballmatch;
