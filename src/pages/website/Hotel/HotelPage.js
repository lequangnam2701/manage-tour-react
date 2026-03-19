import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function HotelPage() {
  const [search] = useState({
    city: "",
    date: "",
    guest: "2 Guests, 1 Room",
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Beach resort hotel view"
          className="w-full h-[320px] object-cover"
        />

        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl p-5 w-[80%]">
          <div className="grid grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="City, destination"
              className="border p-3 rounded-lg"
            />

            <input type="date" className="border p-3 rounded-lg" />

            <input
              type="text"
              value={search.guest}
              className="border p-3 rounded-lg"
              readOnly
            />

            <button className="bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2">
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* SPACE */}
      <div className="h-20"></div>

      {/* PROMOTIONS */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Find hotel deals in 3 easy steps
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2026/02/11/1770797848721-9946ad8960d314353f4aec115308a711.jpeg?tr=h-200,q-75,w-400"
            alt="Beach resort hotel view"
            className="rounded-xl h-[150px] object-cover"
          />

          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2026/02/24/1771908674167-6ad87a2207f2b2c3b65550699dbef536.jpeg?tr=h-200,q-75,w-400"
            alt="Beach resort hotel view"
            className="rounded-xl h-[150px] object-cover"
          />

          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2026/02/24/1771908805756-a20026487fd7dd59d6bd4c394f01ef77.jpeg?tr=h-200,q-75,w-400 "
            alt="Beach resort hotel view"
            className="rounded-xl h-[150px] object-cover"
          />
        </div>
      </div>

      {/* VOUCHER */}
      <div className="max-w-6xl mx-auto mt-8 bg-blue-50 p-5 rounded-xl flex justify-between items-center">
        <div>
          <p className="font-semibold">Save more with our latest promo code</p>
          <p className="text-gray-500 text-sm">Use TRAVELNOW to get discount</p>
        </div>

        <button className="bg-white px-4 py-2 rounded-lg border">
          TRAVELNOW
        </button>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Lý do nên đặt chỗ với Traveloka?
          </h2>

          <p className="text-xl font-semibold mb-6">
            Hơn 50 triệu lượt tải, hơn 1 triệu đánh giá
          </p>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span className="font-semibold">4.6 ⭐</span>
            </div>

            <div className="flex items-center gap-2">
              <span>▶️</span>
              <span className="font-semibold">4.7 ⭐</span>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Tải ứng dụng Traveloka
          </button>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Best hotels in popular destinations
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[160px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                <p className="text-white font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const destinations = [
  {
    name: "Hotels in Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    name: "Hotels in Bangkok",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
  },
  {
    name: "Hotels in Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
  },
  {
    name: "Hotels in Ho Chi Minh",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
  },
  {
    name: "Hotels in Sydney",
    image:
      "https://ik.imagekit.io/tvlk/image/imageResource/2025/07/09/1752051115595-9c9662fcd4061e82302d849b05bb8b88.jpeg?tr=h-171,q-75",
  },
  {
    name: "Hotels in Melbourne",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
];
