import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" />
            <div>
              <h2>YBM</h2>
              <span>Student Portal</span>
            </div>
          </div>
          <p>" Silencs is a key of SUCCESS. "</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Column 2: Sitemap */}
        <div className="footer-col sitemap">
          <h3>Quick Link</h3>
          <div className="sitemap-links">
            <ul>
              <li onClick={() => navigate("/")}>Dashboard</li>
              <li onClick={() => navigate("/assignments")}>Assignmnets</li>
              <li onClick={() => navigate("/examination")}>Examination</li>
              <li onClick={() => navigate("/syllabus")}>Syllabus</li>
              <li onClick={() => navigate("/attendance")}>Attendance</li>
              <li onClick={() => navigate("/time-table")}>Time Table</li>
            </ul>
            <ul>
              <li onClick={() => navigate("/library")}>Library</li>
              <li onClick={() => navigate("/assignments")}>Projects</li>
              <li onClick={() => navigate("/examination")}>Result</li>
            </ul>
            <ul>
              <li onClick={() => navigate("/registration")}>Registration</li>
              <li onClick={() => navigate("/registration")}>
                Backlog Registration
              </li>
            </ul>
            <ul>
              <li onClick={() => navigate("/profile")}>My Profile</li>
              <li onClick={() => navigate("/profile")}>Settings</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <span className="highlight">YBM Student Portal</span> © All Rights
          Reserved - 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
