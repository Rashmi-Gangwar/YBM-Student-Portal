import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import aiEmoji from "../assets/ai-emoji.jpg";

const Dashboard = () => {
    const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard-container">
      <main className="main">
        <div className="student-info">
          <img src={aiEmoji} alt="Student" />
          <div>
            <h3>Prajwal Shenoy</h3>
            <p>
              SRNBV2001PD016
              <br />
              Sem: 2<br />
              Master of Business Administration
            </p>
          </div>
          <button className="see-more" onClick={() => navigate("/profile")}>See more</button>
        </div>

        <div className="stats">
          <div>
            <button onClick={() => navigate("/time-table")}>Time Table</button>
          </div>
          <div>
            <button onClick={() => navigate("/attendance")}>Attendance</button>
          </div>
          <div>
            <button onClick={() => navigate("/syllabus")}>Syllabus</button>
          </div>
          <div>
            <button onClick={() => navigate("/examination")}>Examination</button>
          </div>
          <div>
            <button onClick={() => navigate("/fee")}>Fees</button>
          </div>
        </div>

        <div className="widgets">
          <div className="attendance">
            <p>Attendance</p>
            <div className="circle">75%</div>
          </div>

          <div className="tasks">
            <h4>Your Tasks today</h4>
            <ul>
              <li className="purple">Upload Assignment</li>
              <li className="yellow">Prepare Research paper</li>
              <li className="green">Solve Question Bank</li>
            </ul>
          </div>

          <div className="activity">
            <h4>Latest Activity</h4>
            <ul>
              <li>
                <span className="dot green"></span> Examination schedule updated
                - 12:45 PM
              </li>
              <li>
                <span className="dot yellow"></span> 17/6/2022 Business fest -
                9:00 AM
              </li>
              <li>
                <span className="dot red"></span> Organizational Behaviour
                Assignment - 12/2/2022
              </li>
            </ul>
          </div>
        </div>

        <div className="assignments">
          <h4>Your Assignments</h4>
          <div className="assignment-cards">
            <div className="card yellow-card">
              <h5 onClick={() => navigate("/assignments")}>Tally & Spreadsheet Modelling</h5>
            </div>
            <div className="card red-card">
              <h5 onClick={() => navigate("/assignments")}>Personality Development</h5>
            </div>
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <div className="calendar-box">
          <h4>Calendar</h4>
          <Calendar onChange={setDate} value={date} />
          <p className="note">• Annual Day on 17/03/2022</p>
        </div>

        <div className="activity-box">
          <h4>Latest Activity</h4>
          <ul>
            <li>
              <span className="dot green"></span> Examination schedule updated -
              12:45 PM
            </li>
            <li>
              <span className="dot yellow"></span> 17/6/2022 Business fest -
              9:00 AM
            </li>
            <li>
              <span className="dot red"></span> Organizational Behaviour
              Assignment - 12/2/2022
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
