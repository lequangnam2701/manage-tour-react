import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

function TourDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="tour"
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        Phú Quốc 3N2Đ
      </h1>

      <div className="flex items-center text-gray-500 mt-2">
        <FaMapMarkerAlt className="mr-2" />
        Phú Quốc, Việt Nam
      </div>

      <div className="flex text-yellow-400 mt-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <p className="mt-4 text-gray-600">
        Tour du lịch Phú Quốc 3 ngày 2 đêm bao gồm khách sạn,
        vé tham quan và hướng dẫn viên.
      </p>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-2xl font-bold text-orange-500">
          3.500.000đ
        </span>

        <button className="bg-sky-500 text-white px-6 py-2 rounded-lg">
          Đặt tour
        </button>

      </div>

    </div>
  );
}

export default TourDetail;