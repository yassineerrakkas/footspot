import React, { useState } from "react";
import "../CSS/Calendar.css";

const Calendar = ({ setdate }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(currentYear);
  const [currMonth, setCurrMonth] = useState(currentMonth);

  const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDayofMonth = new Date(
    currYear,
    currMonth,
    lastDateofMonth
  ).getDay();
  const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

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

    // Days of the last month
    for (
      let day = lastDateofLastMonth - firstDayOfMonth + 1;
      day <= lastDateofLastMonth;
      day++
    ) {
      const date = new Date(currYear, currMonth - 1, day);
      calendarDays.push(
        <li
          key={date}
          className={`day inactive`}
          onClick={() => handleDayClick(date)}
        >
          {day}
        </li>
      );
    }

    // Days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currYear, currMonth, day);

      const classNames = ["day"];

      if (selectedDate.toDateString() === date.toDateString()) {
        classNames.push("selected");
      }

      if (new Date().toDateString() === date.toDateString()) {
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

    // Days of the next month
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
    setdate(date);
  };

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setCurrYear(currMonth > 0 ? currYear : currYear - 1);
      setCurrMonth(currMonth > 0 ? currMonth - 1 : 11);
    } else {
      setCurrYear(currMonth < 11 ? currYear : currYear + 1);
      setCurrMonth(currMonth < 11 ? currMonth + 1 : 0);
    }
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">
          {months[currMonth]} {currYear}
        </p>
        <div className="icons">
          <span
            id="prev"
            className="material-symbols-rounded"
            onClick={() => handleArrowClick("prev")}
          >
            chevron_left
          </span>
          <span
            id="next"
            className="material-symbols-rounded"
            onClick={() => handleArrowClick("next")}
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
