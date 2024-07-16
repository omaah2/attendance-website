import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">AttendanceTracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-primary transition duration-200"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/report"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-primary transition duration-200"
                }
              >
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-primary transition duration-200"
                }
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
