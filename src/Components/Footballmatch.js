import React, { useState, useEffect, useCallback } from "react";
import "../CSS/Footballmatch.css";
import Matchrow from "./Matchrow";
import StandingRows from "./StandingRows";

const Footballmatch = ({ leagueid, selected_league, selectedDate }) => {
  const [selectedYear, setYear] = useState(new Date().getFullYear());
  const day = String(selectedDate.getDate()).padStart(2, "0");
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const year = String(selectedDate.getFullYear());

  const [Matches, setMatches] = useState([]);

  const fetchMatches = useCallback(async () => {
    try {
      const response = await fetch(
        `/fixture/${month}${day}/${leagueid}/${year}`
      );
      if (response.ok) {
        const jsonMatches = await response.json();
        setMatches(jsonMatches);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  }, [leagueid, year, month, day]);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const options = [];
  for (let year = 2023; year >= 2010; year--) {
    options.push(
      <option key={year} value={year}>
        {year}/{year + 1}
      </option>
    );
  }

  const matchesOfToday = () => {
    if (Matches.length === 0) {
      return (
        <div className="calender">
          <span className="material-symbols-rounded calender">event_busy</span>
          <p>
            <big>No matches scheduled for this date in the selected league</big>
          </p>
          <p>Try selecting a different date on the calendar.</p>
        </div>
      );
    } else {
      return (
        <>
          {Matches.map((match) => (
            <Matchrow
              key={match.team1_id}
              team_img1={`https://api.sofascore.app/api/v1/team/${match.team1_id}/image`}
              name1={match.team1}
              score={match.ST}
              name2={match.team2}
              team_img2={`https://api.sofascore.app/api/v1/team/${match.team2_id}/image`}
              state={match.state}
              date={`${day}-${month}`}
            />
          ))}
        </>
      );
    }
  };

  return (
    <div className="footballmatches">
      <main>
        <div className="selected-league">
          <img src={selected_league[1]} alt={selected_league[0]} />
          <span className="selected-league-title">{selected_league[0]}</span>
        </div>
        <p className="container-title">⚽️ Football Match</p>
        <div className="line"></div>
        {matchesOfToday()}
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
