import BestSeller from "../../charts/BestSellerChart";
import RevenueChart from "../../charts/RevenueChart";
import RevenueYearChart from "../../charts/RevenueYearChart";


function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">

      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <RevenueChart />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <BestSeller />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 lg:col-span-2">
          <RevenueYearChart />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;