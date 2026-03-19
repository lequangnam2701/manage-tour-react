function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 border-t">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">
        {/* LOGO + INFO */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Traveloka</h2>

          <p className="text-sm text-gray-600 mb-4">
            Nền tảng du lịch hàng đầu Đông Nam Á giúp bạn đặt vé máy bay, khách
            sạn và tour du lịch dễ dàng.
          </p>

          <p className="text-sm text-gray-600">
            🏢 123 Nguyễn Huệ, Quận 1, TP HCM
          </p>

          <p className="text-sm text-gray-600 mt-2">📞 1900 1234</p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="font-semibold mb-4">Sản phẩm</h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Khách sạn</li>
            <li>Vé máy bay</li>
            <li>Vé xe khách</li>
            <li>Đưa đón sân bay</li>
            <li>Cho thuê xe</li>
            <li>Hoạt động & vui chơi</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Công ty</h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Về chúng tôi</li>
            <li>Tuyển dụng</li>
            <li>Blog du lịch</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản</li>
          </ul>
        </div>

        {/* COUNTRIES */}
        <div>
          <h3 className="font-semibold mb-4">Quốc gia Traveloka</h3>

          <div className="grid grid-cols-2 text-sm text-gray-600 gap-2">
            <span>🇻🇳 Việt Nam</span>
            <span>🇮🇩 Indonesia</span>
            <span>🇹🇭 Thái Lan</span>
            <span>🇸🇬 Singapore</span>
            <span>🇲🇾 Malaysia</span>
            <span>🇵🇭 Philippines</span>
            <span>🇦🇺 Australia</span>
            <span>🇯🇵 Nhật Bản</span>
          </div>
        </div>

        {/* APP DOWNLOAD */}
        <div>
          <h3 className="font-semibold mb-4">Tải ứng dụng</h3>

          <div className="flex gap-4 items-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=traveloka"
              alt="qr"
              className="w-20 h-20"
            />

            <div className="space-y-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="google play"
                className="h-10"
              />

              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="app store"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT + PARTNER */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
          {/* PAYMENT */}
          <div>
            <p className="font-semibold mb-3">Phương thức thanh toán</p>

            <div className="flex gap-4">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/09/1736407622371-291315073f0e649f2e24519277b8f182.png?tr=h-19,q-75,w-57"
                alt="visa"
                className="h-8"
              />

              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/09/1736407672024-f9e1112960f69a08824273672eeaccc2.png?tr=h-19,q-75,w-57"
                alt="mastercard"
                className="h-8"
              />

              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736490350569-aa858f77723a5e65ad006a06d91dac83.png?tr=h-19,q-75,w-57"
                alt="jcb"
                className="h-8"
              />
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © 2026 Traveloka Clone — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
