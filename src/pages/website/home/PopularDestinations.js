import { FaMapMarkerAlt } from "react-icons/fa";

function PopularDestinations() {
  const destinations = [
    {
      name: "Phú Quốc",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Đà Nẵng",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    },
    {
      name: "Bangkok",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    },
    {
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Điểm đến phổ biến</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-44 w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-3 flex items-center gap-2">
              <FaMapMarkerAlt />
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
