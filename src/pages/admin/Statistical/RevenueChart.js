import { useEffect, useState } from "react";
import { getRevenueByMonth } from "../../../service/statisticalService";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

function RevenueChart() {
  const [chartData, setChartData] = useState({});
  const year = 2025;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getRevenueByMonth(year);

    const labels = res.data.map((item) => "T" + item.month);
    const revenues = res.data.map((item) => item.amount);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Doanh thu",
          data: revenues,
          borderColor: "#3b82f6",
          backgroundColor: "#93c5fd",
          tension: 0.4,
        },
      ],
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Doanh thu theo tháng</h2>

      <div className="max-w-4xl mx-auto">
        {chartData.datasets && <Line data={chartData} />}
      </div>
    </div>
  );
}

export default RevenueChart;
