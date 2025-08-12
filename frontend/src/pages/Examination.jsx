import React from "react";
import "./Examination.css";

const Examination = () => {
  return (
    <div className="exam-container">
      <h2 className="exam-title">Examination Details</h2>

      <div className="exam-section">
        <h3>Internal Marks (Odd Semester)</h3>
        <div className="internal-cards">
          <div className="mark-card">
            <h4>Maths - 101</h4>
            <p>Midterm: 18/20</p>
            <p>Assignment: 9/10</p>
            <p>Quiz: 10/10</p>
          </div>
          <div className="mark-card">
            <h4>OS - 103</h4>
            <p>Midterm: 15/20</p>
            <p>Assignment: 8/10</p>
            <p>Quiz: 9/10</p>
          </div>
        </div>
      </div>

      <div className="exam-section">
        <h3>External Exam Details</h3>
        <ul>
          <li>Operating System - 05/08/2025 - 10:00 AM</li>
          <li>DBMS - 08/08/2025 - 2:00 PM</li>
        </ul>
      </div>

      <div className="exam-section">
        <h3>Online Exams</h3>
        <p>Visit the online exam portal for upcoming tests. Links will be updated here.</p>
      </div>

      <div className="exam-section">
        <h3>Admit Card</h3>
        <button className="download-btn">Download Admit Card</button>
      </div>
    </div>
  );
};

export default Examination;
