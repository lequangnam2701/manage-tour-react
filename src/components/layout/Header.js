import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [darkMode] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="flex justify-between items-center px-6 py-3 
      bg-white text-black
      dark:bg-gray-900 dark:text-white"
    >
      {/* Search */}
      <div
        className="flex items-center px-3 py-2 rounded-lg
        bg-gray-100 dark:bg-gray-700"
      >
        <FaSearch className="mr-2 text-gray-500 dark:text-gray-300" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none
          text-black dark:text-white
          placeholder-gray-500 dark:placeholder-gray-300"
        />
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <FaBell size={18} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* Dark mode */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <FaUserCircle size={24} />
          <span className="font-medium">{user ? user.name : "Guest"}</span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2
          bg-red-500 hover:bg-red-600
          text-white px-3 py-2 rounded-lg"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
