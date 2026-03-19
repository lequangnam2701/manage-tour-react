import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaPlane,
  FaHotel,
  FaBus,
  FaCar,
  FaUmbrellaBeach,
  FaBars,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Header() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  // Detect click outside menu to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      {/* TOP HEADER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-sky-500">
          traveloka
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <span>🇻🇳 VND | VI</span>

          <Link className="hover:text-sky-500">Khuyến mãi</Link>
          <Link className="hover:text-sky-500">Hợp tác với chúng tôi</Link>
          <Link className="hover:text-sky-500">Hỗ trợ</Link>
          <Link className="hover:text-sky-500">Đặt chỗ của tôi</Link>

          {/* USER MENU */}
          {user ? (
            <div className="relative" ref={menuRef}>
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="flex items-center gap-2 cursor-pointer"
              >
                {user?.image ? (
                  <img
                    src={`http://localhost:8001${user.image}`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <FaUserCircle size={24} />
                )}

                <span className="font-medium">{user.name}</span>
              </div>

              {openMenu && (
                <div
                  className="absolute right-0 mt-4 w-80
                  bg-white border rounded-xl shadow-2xl
                  p-5"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {user?.image ? (
                      <img
                        src={`http://localhost:8001${user.image}`}
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

                  <hr className="mb-3" />

                  <div className="space-y-2">
                    <button
                      onClick={() => navigate("/profile")}
                      className="flex items-center gap-3 w-full px-3 py-2
                      rounded-lg hover:bg-gray-100 transition"
                    >
                      👤
                      <div>
                        <p className="font-medium">Profile</p>
                        <p className="text-xs text-gray-500">
                          Account settings
                        </p>
                      </div>
                    </button>

                    <button
                      className="flex items-center gap-3 w-full px-3 py-2
                      rounded-lg hover:bg-gray-100 transition"
                    >
                      📩
                      <div>
                        <p className="font-medium">Inbox</p>
                        <p className="text-xs text-gray-500">Messages</p>
                      </div>
                    </button>

                    <button
                      className="flex items-center gap-3 w-full px-3 py-2
                      rounded-lg hover:bg-gray-100 transition"
                    >
                      ✔
                      <div>
                        <p className="font-medium">Tasks</p>
                        <p className="text-xs text-gray-500">Daily tasks</p>
                      </div>
                    </button>
                  </div>

                  <div
                    className="mt-5 rounded-xl p-4
                    bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400
                    text-white"
                  >
                    <p className="font-semibold text-lg">Unlimited Access</p>

                    <button
                      className="mt-2 px-4 py-1 bg-white text-purple-600
                      rounded-md text-sm font-medium hover:bg-gray-200"
                    >
                      Upgrade
                    </button>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="mt-4 flex items-center justify-center gap-2
                    w-full px-4 py-2 border rounded-lg
                    text-red-500 hover:bg-gray-100 transition"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-1 border border-sky-500 text-sky-500 rounded-full hover:bg-sky-50">
                  Đăng Nhập
                </button>
              </Link>

              <Link to="/register">
                <button className="px-4 py-1 bg-sky-500 text-white rounded-full hover:bg-sky-600">
                  Đăng ký
                </button>
              </Link>
            </>
          )}
        </div>

        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <FaBars />
        </div>
      </div>

      {/* MENU SERVICE */}
      <div className="hidden md:flex max-w-7xl mx-auto gap-10 px-4 pb-3 text-sm text-gray-700">
        <Link
          to="/hotels"
          className="flex items-center gap-2 hover:text-sky-500"
        >
          <FaHotel /> Khách sạn
        </Link>

        <Link
          to="/SearchBox"
          className="flex items-center gap-2 hover:text-sky-500"
        >
          <FaPlane /> Vé máy bay
        </Link>

        <Link className="flex items-center gap-2 hover:text-sky-500">
          <FaBus /> Vé xe khách
        </Link>

        <Link className="flex items-center gap-2 hover:text-sky-500">
          <FaCar /> Cho thuê xe
        </Link>

        <Link className="flex items-center gap-2 hover:text-sky-500">
          <FaUmbrellaBeach /> Hoạt động & Vui chơi
        </Link>
      </div>
    </header>
  );
}

export default Header;
