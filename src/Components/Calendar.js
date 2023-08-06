import React, { useState } from "react";
import "../CSS/Calendar.css";

const Calendar = () => {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date());
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const generateCalendarDays = () => {
    const daysInMonth = lastDateofMonth;
    const calendarDays = [];
    //days of the last month

    for (
      let day = lastDateofLastMonth - firstDayofMonth + 1;
      day <= lastDateofLastMonth;
      day++
    ) {
      const date = new Date(currYear, currMonth - 1, day);
      calendarDays.push(
        <li
          key={date}
          className="day inactive"
          onClick={() => handleDayClick(date)}
        >
          {day}
        </li>
      );
    }
    //days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currYear, currMonth, day);

      const classNames = ["day"];

      if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
        classNames.push("selected");
      }

      if (date.toDateString() === new Date().toDateString()) {
        classNames.push("active");
      }

      calendarDays.push(
        <li
          key={date}
          className={classNames.join(" ")}
          onClick={() => handleDayClick(date)}
        >
          {day}
        </li>
      );
    }
    for (let day = 1; day <= 6 - lastDayofMonth; day++) {
      const date = new Date(currYear, currMonth + 1, day);
      calendarDays.push(
        <li
          key={date}
          className="day inactive"
          onClick={() => handleDayClick(date)}
        >
          {day}
        </li>
      );
    }
    return calendarDays;
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
  const handlearrowClick = (id) => {
    if (id === "prev") {
      if (currMonth != 0) {
        setCurrMonth(currMonth - 1);
      } else {
        setCurrMonth(11);
        setCurrYear(currYear - 1);
      }
    } else {
      if (currMonth != 11) {
        setCurrMonth(currMonth + 1);
      } else {
        setCurrMonth(0);
        setCurrYear(currYear + 1);
      }
    }
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">
          {months[currMonth] + "  " + currYear.toString()}
        </p>
        <div className="icons">
          <span
            id="prev"
            className="material-symbols-rounded"
            onClick={() => handlearrowClick("prev")}
          >
            chevron_left
          </span>
          <span
            id="next"
            className="material-symbols-rounded"
            onClick={() => handlearrowClick("next")}
          >
            chevron_right
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>S</li>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li>S</li>
        </ul>
        <ul className="days">{generateCalendarDays()}</ul>
      </div>
    </div>
  );
};

export default Calendar;
