import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/react.svg";
import { Context } from "../main";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(Context);

  const handleLogout = () => {
    // Add any other logout logic here (e.g., clearing tokens)
    setIsAuthenticated(false);
    setUser(null);
    console.log("User has been logged out.");
  };

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

            {isAuthenticated && user ? (
              // If the user IS authenticated
              <>
                <span className="welcome-message">Welcome, {user.name}!</span>
                <button className="btn logout" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              // If the user IS NOT authenticated
              <Link to="/login" className="btn login">
                <FaSignInAlt /> Login
              </Link>
            )}
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
