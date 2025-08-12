import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [activeForm, setActiveForm] = useState("semester");

  return (
    <div className="registration-container">
      <div className="left-card">
        <h2>Registration Links</h2>
        <button onClick={() => setActiveForm("semester")}>Semester Registration</button>
        <button onClick={() => setActiveForm("backlog")}>Backlog Registration</button>
      </div>

      <div className="right-form">
        {activeForm === "semester" ? (
          <div className="form-card">
            <h2>Semester Registration</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Enrollment Number" />
              <input type="text" placeholder="ID" />
              <input type="text" placeholder="Course" />
              <input type="text" placeholder="Section" />
              <input type="text" placeholder="Year" />
              <input type="text" placeholder="Semester" />
              <button type="submit">Confirm Registration</button>
            </form>
          </div>
        ) : (
          <div className="form-card">
            <h2>Backlog Registration</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Enrollment Number" />
              <input type="text" placeholder="ID" />
              <input type="text" placeholder="Course" />
              <input type="text" placeholder="Section" />
              <input type="text" placeholder="Year" />
              <input type="text" placeholder="Semester" />
              <input type="text" placeholder="Subject (with backlog)" />
              <input type="text" placeholder="Subject Code" />
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
