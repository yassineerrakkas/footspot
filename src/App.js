import "./App.css";
import Calender from "./Components/Calendar";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <div className="left-side">
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default App;
