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
import { getRevenueYears } from "../../../service/statisticalService";

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
  const [chartData, setChartData] = useState({});
  const year = new Date().getFullYear();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getRevenueYears();

    const labels = res.data.map((item) => item[0]); // năm
    const revenues = res.data.map((item) => item[1]); // doanh thu

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Doanh thu",
          data: revenues,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59,130,246,0.2)",
          pointBackgroundColor: "#2563eb",
          pointRadius: 5,
          tension: 0.4,
          fill: true,
        },
      ],
    });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value.toLocaleString() + " đ";
          },
        },
      },
    },
  };

  return (
    <div className="-6 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <h2 className="text-xl font-bold mb-6 text-black dark:text-white">
        Doanh thu năm {year}
      </h2>
      {chartData.datasets && <Line data={chartData} options={options} />}
    </div>
  );
}

export default RevenueYearChart;
