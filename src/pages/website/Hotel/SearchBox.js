import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {

  const navigate = useNavigate();

  const [tab, setTab] = useState("tour");

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);

  const handleSearchFlight = () => {
    navigate(`/flights/results?from=${from}&to=${to}&date=${date}`);
  };

  const handleSearchTour = () => {
    navigate(`/tours?destination=${to}&date=${date}&people=${people}`);
  };

  return (
    <div className="container mx-auto -mt-16 relative z-10">

      <div className="bg-white shadow-xl rounded-xl p-6">

        {/* Tabs */}

        <div className="flex gap-6 border-b pb-3 mb-6">

          <button
            onClick={() => setTab("tour")}
            className={`font-semibold ${
              tab === "tour" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            🌏 Tour
          </button>

          <button
            onClick={() => setTab("flight")}
            className={`font-semibold ${
              tab === "flight" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            ✈ Vé máy bay
          </button>

        </div>

        {/* TOUR SEARCH */}

        {tab === "tour" && (
          <div className="grid md:grid-cols-4 gap-4">

            <input
              placeholder="Điểm đến"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border p-2 rounded"
            />

            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded"
            />

            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
            </select>

            <button
              onClick={handleSearchTour}
              className="bg-orange-500 text-white rounded"
            >
              Tìm Tour
            </button>

          </div>
        )}

        {/* FLIGHT SEARCH */}

        {tab === "flight" && (
          <div className="grid md:grid-cols-4 gap-4">

            <input
              placeholder="Từ"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border p-2 rounded"
            />

            <input
              placeholder="Đến"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border p-2 rounded"
            />

            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded"
            />

            <button
              onClick={handleSearchFlight}
              className="bg-blue-500 text-white rounded"
            >
              Tìm chuyến bay
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default SearchBox;