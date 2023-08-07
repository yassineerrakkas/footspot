import "./App.css";
import Calender from "./Components/Calendar";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <div className="left-side">
          <h3 className="title">Calendar</h3>
          <Calender />
          <h3 className="title">Top Leagues</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
