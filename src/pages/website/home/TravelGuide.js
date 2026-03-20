const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Bangkok",
    country: "Thái Lan",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
  },
  {
    name: "Seoul",
    country: "Hàn Quốc",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
  },
  {
    name: "Istanbul",
    country: "Thổ Nhĩ Kỳ",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
  },
  {
    name: "Liverpool",
    country: "Anh",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
  },
];

function TravelGuide() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-8">
        🧭 Cẩm nang du lịch
      </h2>

      {/* DESTINATION CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm">{item.country}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SEE MORE */}
      <div className="text-center mt-8">
        <button className="text-blue-600 font-semibold hover:underline">
          Xem thêm →
        </button>
      </div>

      {/* WHY TRAVELOKA */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
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

        {/* RIGHT */}
        <div className="grid md:grid-cols-3 gap-4">

          <div className="border rounded-xl p-5">
            <h4 className="font-bold mb-2">
              Đáp ứng mọi nhu cầu
            </h4>
            <p className="text-sm text-gray-600">
              Từ chuyến bay, lưu trú, đến tham quan, bạn có thể tìm chọn sản phẩm du lịch hoàn chỉnh.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h4 className="font-bold mb-2">
              Tùy chọn linh hoạt
            </h4>
            <p className="text-sm text-gray-600">
              Kế hoạch thay đổi? Dễ dàng đổi lịch hoặc hoàn tiền nhanh chóng.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h4 className="font-bold mb-2">
              Thanh toán an toàn
            </h4>
            <p className="text-sm text-gray-600">
              Hỗ trợ nhiều phương thức thanh toán tiện lợi và bảo mật.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default TravelGuide;