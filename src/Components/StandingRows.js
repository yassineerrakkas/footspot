import React, { useState, useEffect } from "react";

const StandingRows = ({ id, year, setYear }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/standings/${id}/${year}`);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching standings:", error);
      }
    }

    fetchData();
  }, [id, year]);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [id]);

  return (
    <>
      {data.map(({ rank, id, Team, Pl, W, D, L, F, A, GD, Pts }) => (
        <tr key={rank} className="standingRow">
          <td className="rank">{rank}</td>
          <td className="team">
            <img
              src={`https://api.sofascore.app/api/v1/team/${id}/image`}
              className="teamimg"
              alt={Team}
            />
            <p>{Team}</p>
          </td>
          <td className="played">{Pl}</td>
          <td className="w">{W}</td>
          <td className="d">{D}</td>
          <td className="l">{L}</td>
          <td className="f">{F}</td>
          <td className="a">{A}</td>
          <td className="gd">{GD}</td>
          <td className="pts">{Pts}</td>
        </tr>
      ))}
    </>
  );
};

export default StandingRows;
