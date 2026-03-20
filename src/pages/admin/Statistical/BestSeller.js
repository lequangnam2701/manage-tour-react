import { useEffect, useState } from "react";
import { getCategorySeller } from "../../../service/statisticalService";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function BestSeller() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getCategorySeller();

    const labels = res.data?.map((item) => item.name) || [];
    const counts = res.data?.map((item) => item.count) || [];

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Tour bán",
          data: counts,
          backgroundColor: [
            "#3b82f6",
            "#10b981",
            "#f59e0b",
            "#ef4444",
            "#8b5cf6",
          ],
        },
      ],
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
        Category bán chạy
      </h2>

      <div className="max-w-lg mx-auto">
        {chartData.datasets && <Pie data={chartData} />}
      </div>
    </div>
  );
}

export default BestSeller;
