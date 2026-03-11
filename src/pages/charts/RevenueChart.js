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

      const labels = res.data.map((item) => "T" + item.month);
      const revenues = res.data.map((item) => item.amount);

      setChartData({
        labels,
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

    fetchData();
  }, [year]);

  if (!chartData) return <p className="text-gray-500">Loading chart...</p>;

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Revenue by Month</h2>
      <Line data={chartData} />
    </>
  );
}

export default RevenueChart;
