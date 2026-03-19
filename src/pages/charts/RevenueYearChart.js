import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { getRevenueYears } from "../../service/statisticalService";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
);

function RevenueYearChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getRevenueYears();
    const labels = res.map((i) => i[0]);
    const revenues = res.map((i) => i[1]);

    setChartData({
      labels,
      datasets: [
        {
          label: "Revenue",
          data: revenues,
          borderColor: "#2563eb",
          backgroundColor: "rgba(37,99,235,0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    });
  };
  if (!chartData) return <p>Loading chart...</p>;

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Revenue by Year</h2>
      <Line data={chartData} />
    </>
  );
}

export default RevenueYearChart;
