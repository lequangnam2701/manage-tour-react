import { useEffect, useState } from "react";
import BestSeller from "../../charts/BestSellerChart";
import RevenueChart from "../../charts/RevenueChart";
import RevenueYearChart from "../../charts/RevenueYearChart";
import { getDashboard } from "../../../service/dashboardService";

import { FaUsers } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import GoldPriceChart from "../../charts/GoldPriceChart";

function Dashboard() {
  const [dashboard, setDashboard] = useState({});

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const res = await getDashboard();
    setDashboard(res);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Admin Dashboard
      </h1>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Users */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Users</p>
            <h2 className="text-3xl font-bold text-blue-500">
              {dashboard.users}
            </h2>
          </div>
          <FaUsers className="text-4xl text-blue-500" />
        </div>

        {/* Tours */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Tours</p>
            <h2 className="text-3xl font-bold text-green-500">
              {dashboard.tours}
            </h2>
          </div>
          <FaSuitcaseRolling className="text-4xl text-green-500" />
        </div>

        {/* Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Orders</p>
            <h2 className="text-3xl font-bold text-purple-500">
              {dashboard.orders}
            </h2>
          </div>
          <FaShoppingCart className="text-4xl text-purple-500" />
        </div>

        {/* Pending */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Pending Booking</p>
            <h2 className="text-3xl font-bold text-red-500">
              {dashboard.pendingBookings}
            </h2>
          </div>
          <FaClock className="text-4xl text-red-500" />
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-[320px]">
          <RevenueChart />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-[320px]">
          <BestSeller />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-[400px]">
          <RevenueYearChart />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-[400px]">
          <GoldPriceChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
