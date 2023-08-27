import { useState } from "react";
import "./App.css";
import Calender from "./Components/Calendar";
import Footballmatch from "./Components/Footballmatch";
import Navbar from "./Components/Navbar";
import TopLeagues from "./Components/TopLeagues";
function App() {
  const [leagueId, setLeagueId] = useState(1);
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <div className="left-side">
          <h3 className="title">Calendar</h3>
          <Calender />
          <h3 className="title">Top Leagues</h3>
          <TopLeagues setLeagueId={setLeagueId}></TopLeagues>
          <h3 className="title">favorite clubs</h3>
        </div>
        <div className="main-side">
          <Footballmatch leagueid={leagueId}></Footballmatch>
        </div>
      </div>
    </div>
  );
}

export default App;
