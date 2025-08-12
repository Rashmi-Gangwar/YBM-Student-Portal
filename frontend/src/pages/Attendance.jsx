import React, { useState } from "react";
import "./Attendance.css";

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState("July");
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
  const subjects = ["Math", "Science", "English", "History", "Computer"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const getAttendanceStatus = () => {
    const statuses = ["P", "A", "NA"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  return (
    <div className="attendance-container">
      <div className="attendance-stats">
        <h2>Overall Attendance Statistics</h2>
        <div className="stat-cards">
          <div className="stat-card present">
            <h3>Days Present</h3>
            <p>18</p>
          </div>
          <div className="stat-card absent">
            <h3>Days Absent</h3>
            <p>4</p>
          </div>
          <div className="stat-card not-marked">
            <h3>Not Marked</h3>
            <p>2</p>
          </div>
          <div className="stat-card percentage">
            <h3>Attendance %</h3>
            <p>81.8%</p>
          </div>
        </div>
      </div>

      <div className="subject-summary">
        <h2>Subject-wise Attendance Summary</h2>
        <div className="table-wrapper">
          <table className="subject-summary-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Code</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Attendance %</th>
                <th>Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>MATH101</td>
                <td>18</td>
                <td>2</td>
                <td>90%</td>
                <td>Sem 1</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>PHY102</td>
                <td>16</td>
                <td>4</td>
                <td>80%</td>
                <td>Sem 1</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>CHEM103</td>
                <td>19</td>
                <td>1</td>
                <td>95%</td>
                <td>Sem 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="todays-attendance-section">
        <h2>📅 Today's Attendance</h2>
        <div className="table-wrapper">
          <table className="todays-attendance-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Code</th>
                <th>Period</th>
                <th>Timing</th>
                <th>Faculty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>MATH101</td>
                <td>1</td>
                <td>9:00–9:50 AM</td>
                <td>Dr. Sharma</td>
                <td>
                  <span className="status present">P</span>
                </td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>PHYS201</td>
                <td>2</td>
                <td>10:00–10:50 AM</td>
                <td>Prof. Singh</td>
                <td>
                  <span className="status absent">A</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="section-title">🗓️ Monthly Attendance</h2>
      <div className="month-select">
        <label htmlFor="month">Select Month:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="monthly-table">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              {dates.map((date) => (
                <th key={date}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject}>
                <td>{subject}</td>
                {dates.map((date) => {
                  const status = getAttendanceStatus();
                  return (
                    <td key={date} className={`cell ${status.toLowerCase()}`}>
                      {status}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
