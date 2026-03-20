import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaChartBar,
  FaHome,
  FaMapMarkedAlt,
  FaSuitcase,
  FaUsers,
} from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function Sidebar() {
  const [openStatistical, setOpenStatistical] = useState(false);
  return (
    <div className="w-64 fixed left-0 top-0 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      <ul className="flex flex-col p-4 gap-2">
        <li>
          <Link
            to="/admin"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/admin/tours"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaMapMarkedAlt />
            Manage Tour
          </Link>
        </li>
        <li>
          <Link
            to="/admin/users"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaUsers />
            Users
          </Link>
        </li>

        <li>
          <Link
            to="/admin/category"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaSuitcase />
            Manage Category
          </Link>
        </li>

        <li>
          <Link
            to="/admin/rates"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaStar />
            Manage Rates
          </Link>
        </li>

        <li>
          <div
            onClick={() => setOpenStatistical(!openStatistical)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer"
          >
            <FaChartBar />
            Statistical
          </div>

          {openStatistical && (
            <ul className="ml-6 flex flex-col gap-2 mt-2">
              <li>
                <Link
                  to="/admin/best-seller"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700"
                >
                  <FaChartPie />
                  Best Seller
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/revenue"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700"
                >
                  <FaChartLine />
                  Revenue
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/revenue/year/2025"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700"
                >
                  <FaCalendarAlt />
                  Revenue Year
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/admin/books"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaCalendarAlt />
            Booking
          </Link>
        </li>
        <li>
          <Link
            to="/admin/books/1"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaCalendarAlt />
            Bookingdetail
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
