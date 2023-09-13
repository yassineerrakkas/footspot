import { useState, useEffect } from "react";
import "./App.css";
import Calender from "./Components/Calendar";
import Footballmatch from "./Components/Footballmatch";
import Navbar from "./Components/Navbar";
import TopLeagues from "./Components/TopLeagues";
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [leagueId, setLeagueId] = useState(1);
  const [selected_league, select_league] = useState([
    "Premier League",
    "https://api.sofascore.app/api/v1/unique-tournament/17/image/dark",
  ]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [leagueId]);

  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <div className="left-side">
          <h3 className="title">Calendar</h3>
          <Calender setdate={setSelectedDate} />
          <h3 className="title">Top Leagues</h3>
          <TopLeagues
            setLeagueId={setLeagueId}
            select_league={select_league}
          ></TopLeagues>
          <h3 className="title">favorite clubs</h3>
        </div>
        <div className="main-side">
          <Footballmatch
            leagueid={leagueId}
            selected_league={selected_league}
            selectedDate={selectedDate}
          ></Footballmatch>
        </div>
      </div>
    </div>
  );
}

export default App;
