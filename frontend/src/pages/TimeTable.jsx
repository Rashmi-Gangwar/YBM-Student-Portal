import React from "react";
import "./Timetable.css";

const timetableData = {
  Monday: [
    { subject: "Maths", code: "M101", faculty: "Dr. A. Sharma", room: "101", time: "9:00 - 9:50" },
    { subject: "Physics", code: "P102", faculty: "Dr. R. Verma", room: "102", time: "10:00 - 10:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "11:00 - 11:50" },
    { subject: "Chemistry", code: "C103", faculty: "Dr. N. Gupta", room: "103", time: "12:00 - 12:50" },
    { subject: "Biology", code: "B104", faculty: "Dr. S. Mehra", room: "104", time: "1:00 - 1:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "2:00 - 2:50" },
    { subject: "Computer", code: "CS105", faculty: "Mr. A. Jain", room: "105", time: "3:00 - 3:50" },
    { subject: "English", code: "E106", faculty: "Ms. R. Das", room: "106", time: "4:00 - 4:50" },
  ],
  Tuesday: [
    { subject: "Maths", code: "M101", faculty: "Dr. A. Sharma", room: "101", time: "9:00 - 9:50" },
    { subject: "Physics", code: "P102", faculty: "Dr. R. Verma", room: "102", time: "10:00 - 10:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "11:00 - 11:50" },
    { subject: "Chemistry", code: "C103", faculty: "Dr. N. Gupta", room: "103", time: "12:00 - 12:50" },
    { subject: "Biology", code: "B104", faculty: "Dr. S. Mehra", room: "104", time: "1:00 - 1:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "2:00 - 2:50" },
    { subject: "Computer", code: "CS105", faculty: "Mr. A. Jain", room: "105", time: "3:00 - 3:50" },
    { subject: "English", code: "E106", faculty: "Ms. R. Das", room: "106", time: "4:00 - 4:50" },
  ],
  Wednesday: [
    { subject: "Maths", code: "M101", faculty: "Dr. A. Sharma", room: "101", time: "9:00 - 9:50" },
    { subject: "Physics", code: "P102", faculty: "Dr. R. Verma", room: "102", time: "10:00 - 10:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "11:00 - 11:50" },
    { subject: "Chemistry", code: "C103", faculty: "Dr. N. Gupta", room: "103", time: "12:00 - 12:50" },
    { subject: "Biology", code: "B104", faculty: "Dr. S. Mehra", room: "104", time: "1:00 - 1:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "2:00 - 2:50" },
    { subject: "Computer", code: "CS105", faculty: "Mr. A. Jain", room: "105", time: "3:00 - 3:50" },
    { subject: "English", code: "E106", faculty: "Ms. R. Das", room: "106", time: "4:00 - 4:50" },
  ],
  Thursday: [
    { subject: "Maths", code: "M101", faculty: "Dr. A. Sharma", room: "101", time: "9:00 - 9:50" },
    { subject: "Physics", code: "P102", faculty: "Dr. R. Verma", room: "102", time: "10:00 - 10:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "11:00 - 11:50" },
    { subject: "Chemistry", code: "C103", faculty: "Dr. N. Gupta", room: "103", time: "12:00 - 12:50" },
    { subject: "Biology", code: "B104", faculty: "Dr. S. Mehra", room: "104", time: "1:00 - 1:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "2:00 - 2:50" },
    { subject: "Computer", code: "CS105", faculty: "Mr. A. Jain", room: "105", time: "3:00 - 3:50" },
    { subject: "English", code: "E106", faculty: "Ms. R. Das", room: "106", time: "4:00 - 4:50" },
  ],
  Friday: [
    { subject: "Maths", code: "M101", faculty: "Dr. A. Sharma", room: "101", time: "9:00 - 9:50" },
    { subject: "Physics", code: "P102", faculty: "Dr. R. Verma", room: "102", time: "10:00 - 10:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "11:00 - 11:50" },
    { subject: "Chemistry", code: "C103", faculty: "Dr. N. Gupta", room: "103", time: "12:00 - 12:50" },
    { subject: "Biology", code: "B104", faculty: "Dr. S. Mehra", room: "104", time: "1:00 - 1:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "2:00 - 2:50" },
    { subject: "Computer", code: "CS105", faculty: "Mr. A. Jain", room: "105", time: "3:00 - 3:50" },
    { subject: "English", code: "E106", faculty: "Ms. R. Das", room: "106", time: "4:00 - 4:50" },
  ],
  Saturday: [
    { subject: "Maths", code: "M101", faculty: "Dr. A. Sharma", room: "101", time: "9:00 - 9:50" },
    { subject: "Physics", code: "P102", faculty: "Dr. R. Verma", room: "102", time: "10:00 - 10:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "11:00 - 11:50" },
    { subject: "Chemistry", code: "C103", faculty: "Dr. N. Gupta", room: "103", time: "12:00 - 12:50" },
    { subject: "Biology", code: "B104", faculty: "Dr. S. Mehra", room: "104", time: "1:00 - 1:50" },
    { subject: "Free", code: "", faculty: "", room: "", time: "2:00 - 2:50" },
    { subject: "Computer", code: "CS105", faculty: "Mr. A. Jain", room: "105", time: "3:00 - 3:50" },
    { subject: "English", code: "E106", faculty: "Ms. R. Das", room: "106", time: "4:00 - 4:50" },
  ]
};

const Timetable = () => {
  const days = Object.keys(timetableData);
  const periods = timetableData[days[0]]; 

  return (
    <div className="timetable-container">
      <h2 className="heading">Weekly Timetable</h2>

      <div className="timetable-wrapper">
        <table className="timetable-grid">
          <thead>
            <tr>
              <th>Day</th>
              {periods.map((p, idx) => (
                <th key={idx}>
                  Period {idx + 1}
                  <div className="time">{p.time}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td className="day-col">{day}</td>
                {timetableData[day].map((lec, idx) => (
                  <td key={idx} className={lec.subject === "Free" ? "free" : "occupied"}>
                    <strong>{lec.subject}</strong>
                    {lec.subject !== "Free" && (
                      <div className="details">
                        <span>{lec.code}</span>
                        <span>{lec.faculty}</span>
                        <span>Room {lec.room}</span>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
