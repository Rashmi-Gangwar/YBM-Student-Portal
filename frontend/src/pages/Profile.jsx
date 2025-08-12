import React from "react";
import "./Profile.css";
import aiEmoji from "../assets/ai-emoji.jpg";
import {
  FaUserGraduate,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaFileUpload,
  FaStar,
  FaLock,
  FaSignOutAlt,
  FaSchool,
  FaUniversity,
  FaRegIdCard,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Left Side */}
      <div className="profile-left">
        <div className="profile-header">
          <img
            src= {aiEmoji}
            alt="Profile"
            className="profile-img"
          />
          <h2>bfhrufjk</h2>
          <p>Enrollment No: 123456789</p>
          <p>ID: STU2025</p>
        </div>


        <div className="profile-info">
          <div className="info-grid">
            <p><FaUserGraduate /> <strong>Father's Name:</strong> Rhtygtu</p>
            <p><FaPhoneAlt /> <strong>Father's Phone:</strong> +91-9000000001</p>
            <p><FaUserGraduate /> <strong>Mother's Name:</strong> Sjfuhryrb</p>
            <p><FaPhoneAlt /> <strong>Mother's Phone:</strong> +91-9000000002</p>
            <p><FaChartLine /> <strong>DOB:</strong> 2003-06-15</p>
            <p><FaChartLine /> <strong>Blood Group:</strong> B+</p>
            <p><FaEnvelope /> <strong>Email:</strong> rashmi@example.com</p>
            <p><FaPhoneAlt /> <strong>Phone:</strong> +91-9876543210</p>
            <p><FaHome /> <strong>Address:</strong> Bareilly, UP</p>
            <p><FaUniversity /> <strong>College:</strong> YBM University</p>
            <p><FaSchool /> <strong>Course:</strong> B.Tech CSE</p>
            <p><FaChartLine /> <strong>Year:</strong> 3rd</p>
            <p><FaChartLine /> <strong>Semester:</strong> 6th</p>
            <p><FaChartLine /> <strong>Section:</strong> A</p>
            <p><FaChartLine /> <strong>SET:</strong> 2023</p>
            <p><FaChartLine /> <strong>10th %:</strong> 89%</p>
            <p><FaChartLine /> <strong>12th %:</strong> 91%</p>
            <p><FaChartLine /> <strong>Student Type:</strong> Regular</p>
            <p><FaChartLine /> <strong>Registration Date:</strong> 2022-08-10</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="profile-right">
        <div className="top-actions">
          <button className="btn"><FaSchool /> Syllabus</button>
          <button className="btn"><FaChartLine /> Apply GP Marks</button>
          <button className="btn"><FaAward /> Achievements</button>
        </div>

        <div className="profile-sections">
          {/* Document Upload */}
          <div className="section-card">
            <h4><FaFileUpload /> Document Apply</h4>
            <p>Apply for Bonafide, Migration, etc.</p>
            <input type="file" multiple />
          </div>

          {/* Scholarship */}
          <div className="section-card">
            <h4><FaAward /> Scholarship Details</h4>
            <p>Available: Merit-based, State Govt, Need-based</p>
            <ul>
              <li>Merit Scholarship: Apply before Sept 10</li>
              <li>Govt. Scheme 2024: Status - Approved</li>
              <li>Need-Based: Upload Income Certificate</li>
            </ul>
          </div>

          {/* Feedback with stars */}
          <div className="section-card">
            <h4><FaStar /> Feedback</h4>
            <p>Submit feedback</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <textarea placeholder="Write your feedback..." rows="3"></textarea>
          </div>
        </div>

        <div className="bottom-actions">
          <button className="btn change-pass"><FaLock /> Change Password</button>
          <button className="btn logout"><FaSignOutAlt /> Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
