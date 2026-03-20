import { useEffect, useState } from "react";
import { getTours } from "../../../service/tourService";
import { Link } from "react-router-dom";

function TourSection() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const data = await getTours();
      setTours(data);
    } catch (error) {
      console.error("Error loading tours:", error);
    }
  };

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Hoạt động du lịch</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <Link to={`/tour/${tour.tourId}`}>
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-40 object-cover cursor-pointer"
              />
            </Link>

            <div className="p-3">
              <h3 className="font-semibold text-sm">{tour.name}</h3>

              <p className="text-orange-500 font-bold mt-2">
                {tour.price?.toLocaleString()} VND
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TourSection;
