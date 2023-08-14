import "./App.css";
import Calender from "./Components/Calendar";
import Footballmatch from "./Components/Footballmatch";
import Navbar from "./Components/Navbar";
import TopLeagues from "./Components/TopLeagues";
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <div className="left-side">
          <h3 className="title">Calendar</h3>
          <Calender />
          <h3 className="title">Top Leagues</h3>
          <TopLeagues></TopLeagues>
          <h3 className="title">favorite clubs</h3>
        </div>
        <div className="main-side">
          <Footballmatch></Footballmatch>
        </div>
      </div>
    </div>
  );
}

export default App;
