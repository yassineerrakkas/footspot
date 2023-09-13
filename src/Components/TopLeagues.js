import React, { useEffect, useState } from "react";
import "../CSS/TopLeagues.css";

const TopLeagues = ({ setLeagueId, select_league }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/leagues");
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleClick = (id, title, image) => {
    setLeagueId(id);
    select_league([title, image]);
  };

  return (
    <div className="topleagues">
      {data.map((record) => (
        <div
          key={record.id}
          onClick={() => handleClick(record.id, record.title, record.image_url)}
        >
          <div className="leagues-container">
            <img src={record.image_url} alt={record.title} />
            <span className="league-title">{record.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopLeagues;
