import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TopTours() {
  const tours = [
    {
      name: "Phú Quốc 3N2Đ",
      price: "3.500.000đ",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Đà Nẵng - Bà Nà Hills",
      price: "2.900.000đ",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592",
    },
    {
      name: "Bangkok Tour",
      price: "6.200.000đ",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h2 className="text-2xl font-bold mb-6">
        Tour nổi bật
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
      >

        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">

              <img
                src={tour.image}
                alt={tour.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">

                <h3 className="font-semibold">
                  {tour.name}
                </h3>

                <p className="text-orange-500 font-bold mt-2">
                  {tour.price}
                </p>

                <button className="mt-3 bg-sky-500 text-white px-4 py-1 rounded">
                  Xem tour
                </button>

              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
}

export default TopTours;