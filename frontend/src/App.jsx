import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import TimeTable from "./pages/TimeTable";
import Registration from "./pages/Registration";
import Assignment from "./pages/Assignment";
import Profile from "./pages/Profile";
import Library from "./pages/Library";
import Examination from "./pages/Examination";
import Fees from "./pages/Fees";
import Syllabus from "./pages/Syllabus";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./pages/Login";

const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("https://ybm-nursing-site.onrender.com/api/v1/user/me", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.user);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          setUser(null);
          setIsAuthenticated(false);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <Header />
      <main style={{ marginTop: "80px", marginBottom: "0", backgroundColor: "black" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/time-table" element={<TimeTable />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/assignments" element={<Assignment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/library" element={<Library />} />
          <Route path="/examination" element={<Examination />} />
          <Route path="/fee" element={<Fees />} />
          <Route path="/syllabus" element={<Syllabus/> } />
        </Routes>
      </main>
      <ToastContainer theme="colored" />
      <Footer />
    </div>
  );
};

export default App;
