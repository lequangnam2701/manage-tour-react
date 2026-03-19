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

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const revenueMap = {};

    res.data.forEach((item) => {
      revenueMap[item.month] = item.amount;
    });

    const labels = months.map((m) => "T" + m);
    const revenues = months.map((m) => revenueMap[m] || 0);

    setChartData({
      labels,
      datasets: [
        {
          label: "Doanh thu",
          data: revenues,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59,130,246,0.2)",
          tension: 0.4,
          fill: true,
          pointRadius: 4,
        },
      ],
    });
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Doanh thu theo tháng</h2>

      <div className="max-w-4xl mx-auto h-[400px]">
        {chartData.datasets && <Line data={chartData} options={options} />}
      </div>
    </div>
  );
}

export default RevenueChart;
