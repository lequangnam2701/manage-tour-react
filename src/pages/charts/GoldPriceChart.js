import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

function GoldPriceChart() {
  const [prices, setPrices] = useState([]);
  const [times, setTimes] = useState([]);

  const fetchGoldPrice = async () => {
    try {
      const res = await fetch("https://api.gold-api.com/price/XAU");
      const data = await res.json();

      const time = new Date().toLocaleTimeString();

      setPrices((prev) => [...prev.slice(-9), data.price]);
      setTimes((prev) => [...prev.slice(-9), time]);
    } catch (err) {
      console.error("Error fetching gold price:", err);
    }
  };

  useEffect(() => {
    fetchGoldPrice();

    const interval = setInterval(fetchGoldPrice, 5000); // cập nhật mỗi 5s

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: times,
    datasets: [
      {
        label: "Gold Price (USD/oz)",
        data: prices,
        borderColor: "gold",
        backgroundColor: "rgba(255,215,0,0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div style={{ width: "700px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Gold Price </h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default GoldPriceChart;
