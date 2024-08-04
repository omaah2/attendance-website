import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Report from "./Report";

function App() {
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    const storedAttendance =
      JSON.parse(localStorage.getItem("attendanceList")) || [];
    setAttendanceList(storedAttendance);
  }, []);

  useEffect(() => {
    localStorage.setItem("attendanceList", JSON.stringify(attendanceList));
  }, [attendanceList]);

  const addAttendance = ({ name, phoneNumber }) => {
    const newAttendance = {
      id: Date.now(),
      name,
      phoneNumber,
      time: new Date().toLocaleTimeString(),
      status: "Present",
      paid: false,
      date: new Date().toISOString().split("T")[0],
    };
    setAttendanceList([...attendanceList, newAttendance]);
  };

  const toggleStatus = (id) => {
    setAttendanceList(
      attendanceList.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Present" ? "Absent" : "Present",
            }
          : item
      )
    );
  };

  const togglePaidStatus = (id) => {
    setAttendanceList(
      attendanceList.map((item) =>
        item.id === id ? { ...item, paid: !item.paid } : item
      )
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  attendanceList={attendanceList}
                  addAttendance={addAttendance}
                  toggleStatus={toggleStatus}
                  togglePaidStatus={togglePaidStatus}
                />
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/report"
              element={<Report attendanceList={attendanceList} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
