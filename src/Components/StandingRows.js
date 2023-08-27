import React, { useState, useEffect } from "react";

const StandingRows = ({ id, year, setYear }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "/standings/" + id.toString() + "/" + year.toString()
        );
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {}
    }
    fetchData();
  }, [id, year]);
  useEffect(() => {
    setYear(new Date().getFullYear() - 1);
  }, [id]);
  return (
    <>
      {data.map((record) => (
        <tr key={record.rank} className="standingRow">
          <td className="rank">{record.rank}</td>
          <td className="team">
            <img
              src={
                "https://api.sofascore.app/api/v1/team/" + record.id + "/image"
              }
              className="teamimg"
            ></img>
            <p>{record.Team}</p>
          </td>
          <td className="played">{record.Pl}</td>
          <td className="w">{record.W}</td>
          <td className="d">{record.D}</td>
          <td className="l">{record.L}</td>
          <td className="f">{record.F}</td>
          <td className="a">{record.A}</td>
          <td className="gd">{record.GD}</td>
          <td className="pts">{record.Pts}</td>
        </tr>
      ))}
    </>
  );
};
export default StandingRows;
