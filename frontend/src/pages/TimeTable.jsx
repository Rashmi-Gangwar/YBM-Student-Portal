import React from "react";
import "./Timetable.css";

const timetableData = {
  Monday: [
    {
      period: "1",
      subject: "Maths",
      code: "M101",
      faculty: "Dr. A. Sharma",
      room: "101",
      time: "9:00 - 9:50",
    },
    {
      period: "2",
      subject: "Physics",
      code: "P102",
      faculty: "Dr. R. Verma",
      room: "102",
      time: "10:00 - 10:50",
    },
    {
      period: "3",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "11:00 - 11:50",
    },
    {
      period: "4",
      subject: "Chemistry",
      code: "C103",
      faculty: "Dr. N. Gupta",
      room: "103",
      time: "12:00 - 12:50",
    },
    {
      period: "5",
      subject: "Biology",
      code: "B104",
      faculty: "Dr. S. Mehra",
      room: "104",
      time: "1:00 - 1:50",
    },
    {
      period: "6",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "2:00 - 2:50",
    },
    {
      period: "7",
      subject: "Computer",
      code: "CS105",
      faculty: "Mr. A. Jain",
      room: "105",
      time: "3:00 - 3:50",
    },
    {
      period: "8",
      subject: "English",
      code: "E106",
      faculty: "Ms. R. Das",
      room: "106",
      time: "4:00 - 4:50",
    },
  ],
  Tuesday: [
    {
      period: "1",
      subject: "Maths",
      code: "M101",
      faculty: "Dr. A. Sharma",
      room: "101",
      time: "9:00 - 9:50",
    },
    {
      period: "2",
      subject: "Physics",
      code: "P102",
      faculty: "Dr. R. Verma",
      room: "102",
      time: "10:00 - 10:50",
    },
    {
      period: "3",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "11:00 - 11:50",
    },
    {
      period: "4",
      subject: "Chemistry",
      code: "C103",
      faculty: "Dr. N. Gupta",
      room: "103",
      time: "12:00 - 12:50",
    },
    {
      period: "5",
      subject: "Biology",
      code: "B104",
      faculty: "Dr. S. Mehra",
      room: "104",
      time: "1:00 - 1:50",
    },
    {
      period: "6",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "2:00 - 2:50",
    },
    {
      period: "7",
      subject: "Computer",
      code: "CS105",
      faculty: "Mr. A. Jain",
      room: "105",
      time: "3:00 - 3:50",
    },
    {
      period: "8",
      subject: "English",
      code: "E106",
      faculty: "Ms. R. Das",
      room: "106",
      time: "4:00 - 4:50",
    },
  ],
  Wednesday: [
    {
      period: "1",
      subject: "Maths",
      code: "M101",
      faculty: "Dr. A. Sharma",
      room: "101",
      time: "9:00 - 9:50",
    },
    {
      period: "2",
      subject: "Physics",
      code: "P102",
      faculty: "Dr. R. Verma",
      room: "102",
      time: "10:00 - 10:50",
    },
    {
      period: "3",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "11:00 - 11:50",
    },
    {
      period: "4",
      subject: "Chemistry",
      code: "C103",
      faculty: "Dr. N. Gupta",
      room: "103",
      time: "12:00 - 12:50",
    },
    {
      period: "5",
      subject: "Biology",
      code: "B104",
      faculty: "Dr. S. Mehra",
      room: "104",
      time: "1:00 - 1:50",
    },
    {
      period: "6",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "2:00 - 2:50",
    },
    {
      period: "7",
      subject: "Computer",
      code: "CS105",
      faculty: "Mr. A. Jain",
      room: "105",
      time: "3:00 - 3:50",
    },
    {
      period: "8",
      subject: "English",
      code: "E106",
      faculty: "Ms. R. Das",
      room: "106",
      time: "4:00 - 4:50",
    },
  ],
  Thursday: [
    {
      period: "1",
      subject: "Maths",
      code: "M101",
      faculty: "Dr. A. Sharma",
      room: "101",
      time: "9:00 - 9:50",
    },
    {
      period: "2",
      subject: "Physics",
      code: "P102",
      faculty: "Dr. R. Verma",
      room: "102",
      time: "10:00 - 10:50",
    },
    {
      period: "3",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "11:00 - 11:50",
    },
    {
      period: "4",
      subject: "Chemistry",
      code: "C103",
      faculty: "Dr. N. Gupta",
      room: "103",
      time: "12:00 - 12:50",
    },
    {
      period: "5",
      subject: "Biology",
      code: "B104",
      faculty: "Dr. S. Mehra",
      room: "104",
      time: "1:00 - 1:50",
    },
    {
      period: "6",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "2:00 - 2:50",
    },
    {
      period: "7",
      subject: "Computer",
      code: "CS105",
      faculty: "Mr. A. Jain",
      room: "105",
      time: "3:00 - 3:50",
    },
    {
      period: "8",
      subject: "English",
      code: "E106",
      faculty: "Ms. R. Das",
      room: "106",
      time: "4:00 - 4:50",
    },
  ],
  Friday: [
    {
      period: "1",
      subject: "Maths",
      code: "M101",
      faculty: "Dr. A. Sharma",
      room: "101",
      time: "9:00 - 9:50",
    },
    {
      period: "2",
      subject: "Physics",
      code: "P102",
      faculty: "Dr. R. Verma",
      room: "102",
      time: "10:00 - 10:50",
    },
    {
      period: "3",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "11:00 - 11:50",
    },
    {
      period: "4",
      subject: "Chemistry",
      code: "C103",
      faculty: "Dr. N. Gupta",
      room: "103",
      time: "12:00 - 12:50",
    },
    {
      period: "5",
      subject: "Biology",
      code: "B104",
      faculty: "Dr. S. Mehra",
      room: "104",
      time: "1:00 - 1:50",
    },
    {
      period: "6",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "2:00 - 2:50",
    },
    {
      period: "7",
      subject: "Computer",
      code: "CS105",
      faculty: "Mr. A. Jain",
      room: "105",
      time: "3:00 - 3:50",
    },
    {
      period: "8",
      subject: "English",
      code: "E106",
      faculty: "Ms. R. Das",
      room: "106",
      time: "4:00 - 4:50",
    },
  ],
  Saturday: [
    {
      period: "1",
      subject: "Maths",
      code: "M101",
      faculty: "Dr. A. Sharma",
      room: "101",
      time: "9:00 - 9:50",
    },
    {
      period: "2",
      subject: "Physics",
      code: "P102",
      faculty: "Dr. R. Verma",
      room: "102",
      time: "10:00 - 10:50",
    },
    {
      period: "3",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "11:00 - 11:50",
    },
    {
      period: "4",
      subject: "Chemistry",
      code: "C103",
      faculty: "Dr. N. Gupta",
      room: "103",
      time: "12:00 - 12:50",
    },
    {
      period: "5",
      subject: "Biology",
      code: "B104",
      faculty: "Dr. S. Mehra",
      room: "104",
      time: "1:00 - 1:50",
    },
    {
      period: "6",
      subject: "Free",
      code: "",
      faculty: "",
      room: "",
      time: "2:00 - 2:50",
    },
    {
      period: "7",
      subject: "Computer",
      code: "CS105",
      faculty: "Mr. A. Jain",
      room: "105",
      time: "3:00 - 3:50",
    },
    {
      period: "8",
      subject: "English",
      code: "E106",
      faculty: "Ms. R. Das",
      room: "106",
      time: "4:00 - 4:50",
    },
  ],
};

const Timetable = () => {
  return (
    <div className="timetable-container">
      <h2 className="heading">Weekly Timetable</h2>
      {Object.entries(timetableData).map(([day, lectures]) => (
        <div className="day-section" key={day}>
          <h3 className="day-title">{day}</h3>
          <div className="lectures-wrapper">
            {lectures.map((lec, index) => (
              <div className="lecture-card" key={index}>
                <div className="period-number">{lec.period}</div>
                <h4>{lec.subject || "Free Period"}</h4>
                {lec.subject && (
                  <>
                    <p>
                      <strong>Code:</strong> {lec.code}
                    </p>
                    <p>
                      <strong>Faculty:</strong> {lec.faculty}
                    </p>
                    <p>
                      <strong>Room:</strong> {lec.room}
                    </p>
                  </>
                )}
                <p>
                  <strong>Time:</strong> {lec.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
