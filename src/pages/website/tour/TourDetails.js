import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTourById } from "../../../service/tourService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchTour();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTour = async () => {
    try {
      const data = await getTourById(id);
      setTour(data);
      setActiveImage(data.image);
    } catch (error) {
      console.error(error);
    }
  };

  if (!tour) return <div className="text-center py-20">Loading...</div>;

  const discountPrice = tour.price - (tour.price * (tour.discount || 0)) / 100;

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <img
            src={activeImage}
            alt={tour.name}
            className="w-full h-[400px] object-cover rounded-xl shadow"
          />

          <div className="grid grid-cols-4 gap-3 mt-4">
            {[tour.image, tour.image, tour.image, tour.image].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setActiveImage(img)}
                className="h-20 object-cover rounded-lg cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>

          <p className="text-gray-600 mb-2">
            Category: {tour.category?.categoryName}
          </p>

          <div className="flex items-center gap-4 mb-5">
            {tour.discount > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                -{tour.discount}%
              </span>
            )}

            <span className="text-3xl text-orange-500 font-bold">
              {discountPrice.toLocaleString()} VND
            </span>

            {tour.discount > 0 && (
              <span className="line-through text-gray-400">
                {tour.price.toLocaleString()} VND
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-2">
            Entered Date: {new Date(tour.enteredDate).toLocaleDateString()}
          </p>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
            {tour.quantity} seats left
          </span>
          <br />

          <p className="text-gray-700 leading-relaxed mb-8">
            {tour.description}
          </p>

          <div className="mt-4 mb-6">
            <label className="block text-sm font-medium mb-1">
              Select Tour Date
            </label>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date(tour.enteredDate)}
              className="w-full border p-2 rounded"
              placeholderText="Choose a date"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <button
            disabled={!selectedDate}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Book Tour
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
