function TopDestinationBanner() {
  return (
    <div
      className="max-w-7xl mx-auto px-6 py-12"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-4xl font-bold mb-3">
          Khám phá thế giới cùng chúng tôi
        </h2>

        <p className="mb-4">Hàng ngàn tour du lịch hấp dẫn đang chờ bạn</p>

        <button className="bg-orange-500 px-6 py-2 rounded-lg">
          Khám phá ngay
        </button>
      </div>
    </div>
  );
}

export default TopDestinationBanner;
