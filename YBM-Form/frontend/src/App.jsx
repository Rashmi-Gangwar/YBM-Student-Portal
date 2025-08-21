import React from "react";
import { Routes, Route } from "react-router-dom";

import LogIn from "./components/Login";

const App = () => {
  return (
    <main style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </main>
  );
};

export default App;
