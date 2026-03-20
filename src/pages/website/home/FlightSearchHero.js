import { FaPlane, FaHotel, FaBus, FaCar } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import { FiGrid } from "react-icons/fi";

function FlightSearchHero() {
  return (
    <div
      className="w-full h-[420px] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* MENU */}
      <div className="flex gap-10 text-sm font-medium mb-6">
        <div className="flex items-center gap-2 cursor-pointer hover:text-sky-300">
          <FaHotel /> Khách sạn
        </div>

        <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full">
          <FaPlane /> Vé máy bay
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-sky-300">
          <FaBus /> Vé xe khách
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-sky-300">
          <MdAirportShuttle /> Đưa đón sân bay
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-sky-300">
          <FaCar /> Cho thuê xe
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-sky-300">
          <GiIsland /> Hoạt động & Vui chơi
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-sky-300">
          <FiGrid /> Khác
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-[900px] text-black">
        {/* OPTION */}
        <div className="flex gap-3 mb-4">
          <button className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm">
            Một chiều / Khứ hồi
          </button>

          <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">
            Nhiều thành phố
          </button>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-4 gap-3">
          <input className="border p-3 rounded-lg" placeholder="Từ (SGN)" />

          <input
            className="border p-3 rounded-lg"
            placeholder="Đến (Bangkok)"
          />

          <input type="date" className="border p-3 rounded-lg" />

          <button className="bg-orange-500 text-white rounded-lg flex items-center justify-center text-xl">
            🔍
          </button>
        </div>
      </div>

      {/* TRUSTED */}
      <div className="mt-6 bg-white rounded-xl px-6 py-2 text-black text-sm">
        Trusted by: Vietnam Airlines • VietJet • Air France
      </div>
    </div>
  );
}

export default FlightSearchHero;
