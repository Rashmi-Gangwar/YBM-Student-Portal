import React from "react";
import "./Assignment.css";

const Assignment = () => {
  return (
    <div className="assignment-container">
      <h1 className="assignment-heading">Assignment Portal</h1>

      <div className="assignment-section">
        <h2>Assignment Details</h2>
        <div className="table-wrapper">
          <table className="assignment-table">
            <thead>
              <tr>
                <th>Download</th>
                <th>Upload</th>
                <th>Faculty Name</th>
                <th>Subject</th>
                <th>Subject Code</th>
                <th>Assignment No.</th>
                <th>Submit Date</th>
                <th>Type</th>
                <th>Upload Date</th>
                <th>Last Date</th>
                <th>Max Marks</th>
                <th>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><button className="download-btn">Download</button></td>
                <td><input type="file" /></td>
                <td>Dr. Mehta</td>
                <td>Physics</td>
                <td>PHY101</td>
                <td>1</td>
                <td>2025-08-01</td>
                <td>Theory</td>
                <td>2025-07-25</td>
                <td>2025-08-05</td>
                <td>20</td>
                <td>-</td>
              </tr>
              {/* Add more rows dynamically */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="assignment-section">
        <h2>Uploaded Assignments</h2>
        <div className="table-wrapper">
          <table className="assignment-table">
            <thead>
              <tr>
                <th>Faculty Name</th>
                <th>Subject</th>
                <th>Type</th>
                <th>Submit Date</th>
                <th>Max Marks</th>
                <th>Obtained Marks</th>
                <th>Accepted / Rejected</th>
                <th>Assignment No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prof. Sharma</td>
                <td>Mathematics</td>
                <td>Practical</td>
                <td>2025-07-20</td>
                <td>15</td>
                <td>14</td>
                <td>Accepted</td>
                <td>2</td>
              </tr>
              {/* Add more rows dynamically */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
