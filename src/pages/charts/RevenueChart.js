import { useEffect, useState } from "react";

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
import { getRevenueByMonth } from "../../service/statisticalService";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

function RevenueChart() {
  const [chartData, setChartData] = useState(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRevenueByMonth(year);
      const months = Array.from({ length: 12 }, (_, i) => i + 1);
      const revenueMap = {};

      res.forEach((item) => {
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

    fetchData();
  }, [year]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  if (!chartData) return <p className="text-gray-500">Loading chart...</p>;

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Revenue by Month</h2>

      <div className="h-[260px]">
        <Line data={chartData} options={options} />
      </div>
    </>
  );
}

export default RevenueChart;
