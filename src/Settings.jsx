import React, { useState, useEffect } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    companyName: "",
    workingHours: "",
    lateThreshold: "",
  });

  useEffect(() => {
    const storedSettings =
      JSON.parse(localStorage.getItem("attendanceSettings")) || {};
    setSettings(storedSettings);
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("attendanceSettings", JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="workingHours"
          >
            Working Hours
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="workingHours"
            type="text"
            name="workingHours"
            value={settings.workingHours}
            onChange={handleChange}
            placeholder="e.g. 9:00 AM - 5:00 PM"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lateThreshold"
          >
            Late Threshold (minutes)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lateThreshold"
            type="number"
            name="lateThreshold"
            value={settings.lateThreshold}
            onChange={handleChange}
            placeholder="e.g. 15"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
