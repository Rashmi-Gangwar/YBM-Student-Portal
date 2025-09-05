import React from "react";
import "./Syllabus.css";

const Syllabus = () => {
  return (
    <div className="syllabus-container">
      {/* Header Section */}
      <header className="syllabus-header">
        <h1>Course Syllabus</h1>
        <p>Subject: Computer Science & Engineering</p>
        <button className="download-btn">📥 Download Syllabus (PDF)</button>
      </header>

      {/* Overview Section */}
      <section className="syllabus-overview">
        <h2>Course Overview</h2>
        <p>
          This course provides an in-depth understanding of fundamental and
          advanced concepts in computer science. Students will learn programming,
          algorithms, data structures, software engineering practices, and modern
          technologies. The syllabus is designed to prepare students for both
          academic excellence and industry readiness.
        </p>
      </section>

      {/* Weekly Breakdown */}
      <section className="syllabus-modules">
        <h2>Weekly Breakdown</h2>
        <div className="modules-grid">
          <div className="module-card">
            <h3>Week 1-2</h3>
            <p>Introduction to Programming, Basics of C++/Java/Python.</p>
          </div>
          <div className="module-card">
            <h3>Week 3-4</h3>
            <p>Data Structures: Arrays, Linked Lists, Stacks, Queues.</p>
          </div>
          <div className="module-card">
            <h3>Week 5-6</h3>
            <p>Algorithms: Sorting, Searching, Recursion, Complexity.</p>
          </div>
          <div className="module-card">
            <h3>Week 7-8</h3>
            <p>Database Management, SQL, Normalization.</p>
          </div>
          <div className="module-card">
            <h3>Week 9-10</h3>
            <p>Software Engineering, SDLC, Agile, Testing.</p>
          </div>
          <div className="module-card">
            <h3>Week 11-12</h3>
            <p>Operating Systems & Computer Networks.</p>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="evaluation">
        <h2>Evaluation Criteria</h2>
        <ul>
          <li>Assignments & Projects – <span className="green">30%</span></li>
          <li>Mid-Semester Exam – <span className="orange">20%</span></li>
          <li>Final Exam – <span className="red">40%</span></li>
          <li>Class Participation – <span className="green">10%</span></li>
        </ul>
      </section>

      {/* Notes Section */}
      <section className="important-notes">
        <h2>Important Notes</h2>
        <ul>
          <li>Attendance is mandatory (minimum 75%).</li>
          <li>Late submission of assignments will not be accepted.</li>
          <li>All exams will follow university guidelines.</li>
          <li>Plagiarism is strictly prohibited.</li>
        </ul>
      </section>
    </div>
  );
};

export default Syllabus;
