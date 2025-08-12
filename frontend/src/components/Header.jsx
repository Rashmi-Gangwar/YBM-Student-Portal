import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/react.svg";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="top-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="school-logo" />
          <div className="school-name">
            <h2>YBM</h2>
            <p>Student Portal</p>
          </div>
        </div>

        <div className="top-right">
          <div className="logout-btn">
            <button className="btn logout"><FaSignOutAlt /> Logout</button>
          </div>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </div>
      </div>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li onClick={() => navigate("/")}>Dashboard</li>
          <li onClick={() => navigate("/registration")}>Registration</li>
          <li onClick={() => navigate("/attendance")}>Attendance</li>
          <li onClick={() => navigate("/examination")}>Examination</li>
          <li onClick={() => navigate("/time-table")}>Time Table</li>
          <li onClick={() => navigate("/assignments")}>Assignments</li>
          <li onClick={() => navigate("/library")}>Library</li>
          <li onClick={() => navigate("/profile")}>My Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
