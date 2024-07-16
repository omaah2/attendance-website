import React, { useState } from "react";
import { motion } from "framer-motion";

function AttendanceForm({ addAttendance }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addAttendance(name);
      setName("");
    }
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        Mark Attendance
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-200 animate__animated animate__pulse animate__infinite"
        >
          Mark Present
        </button>
      </form>
    </motion.div>
  );
}

export default AttendanceForm;
