import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaMoon,
  FaSun,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import LanguageSwitcher from "../translate/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login", { replace: true });
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex justify-between items-center px-6 py-3
      bg-white text-black
      dark:bg-gray-900 dark:text-white"
    >
      <div
        className="flex items-center px-3 py-2 rounded-lg
        bg-gray-100 dark:bg-gray-700"
      >
        <FaSearch className="mr-2 text-gray-500 dark:text-gray-300" />

        <input
          type="text"
          placeholder={t("search")}
          className="bg-transparent outline-none
          text-black dark:text-white
          placeholder-gray-500 dark:placeholder-gray-300"
        />
      </div>

      <div className="flex items-center gap-6">
        <LanguageSwitcher />

        <div className="relative cursor-pointer">
          <FaBell size={18} />

          <span
            className="absolute -top-2 -right-2
            bg-red-500 text-white text-xs px-1 rounded-full"
          >
            3
          </span>
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="relative" ref={menuRef}>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center gap-2 cursor-pointer"
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <FaUserCircle size={24} />
            )}

            <span className="font-medium">{user ? user.name : t("guest")}</span>
          </div>

          {openMenu && (
            <div
              className="absolute right-0 mt-4 w-80
              bg-white dark:bg-gray-800
              border dark:border-gray-700
              rounded-xl shadow-2xl
              p-5
              transform transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-[70px] h-[70px] rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle size={70} />
                )}

                <div>
                  <p className="font-semibold text-lg">{user?.name}</p>
                  <p className="text-gray-500 text-sm">{user?.email}</p>
                </div>
              </div>

              <hr className="dark:border-gray-700 mb-3" />

              <div className="space-y-2">
                <button
                  onClick={() => navigate("/admin/profile")}
                  className="flex items-center gap-3 w-full px-3 py-2
                  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  👤
                  <div>
                    <p className="font-medium">{t("profile")}</p>
                    <p className="text-xs text-gray-500">
                      {t("accountSettings")}
                    </p>
                  </div>
                </button>

                <button
                  className="flex items-center gap-3 w-full px-3 py-2
                  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  📩
                  <div>
                    <p className="font-medium">{t("inbox")}</p>
                    <p className="text-xs text-gray-500">{t("messages")}</p>
                  </div>
                </button>

                <button
                  className="flex items-center gap-3 w-full px-3 py-2
                  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  ✔
                  <div>
                    <p className="font-medium">{t("tasks")}</p>
                    <p className="text-xs text-gray-500">{t("dailyTasks")}</p>
                  </div>
                </button>
              </div>

              <div
                className="mt-5 rounded-xl p-4
                bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400
                text-white"
              >
                <p className="font-semibold text-lg">{t("unlimitedAccess")}</p>

                <button
                  className="mt-2 px-4 py-1 bg-white text-purple-600
                  rounded-md text-sm font-medium hover:bg-gray-200"
                >
                  {t("upgrade")}
                </button>
              </div>

              <button
                onClick={handleLogout}
                className="mt-4 flex items-center justify-center gap-2
                w-full px-4 py-2 border rounded-lg
                text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <FaSignOutAlt />
                {t("logout")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
