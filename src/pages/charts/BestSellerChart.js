import { useEffect, useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getCategorySeller } from "../../service/statisticalService";

ChartJS.register(ArcElement, Tooltip, Legend);

function BestSeller() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getCategorySeller();

    const labels = res.map((i) => i.name);
    const counts = res.map((i) => i.count);

    setChartData({
      labels,
      datasets: [
        {
          label: "Tour Sold",
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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  if (!chartData) return <p className="text-gray-500">Loading chart...</p>;

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Best Seller Category</h2>

      <div className="h-[250px] flex justify-center items-center">
        <Pie data={chartData} options={options} />
      </div>
    </>
  );
}

export default BestSeller;
