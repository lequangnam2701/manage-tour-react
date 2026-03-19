import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getTourById, updateTour } from "../../../service/tourService";
import Swal from "sweetalert2";

function TourEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    name: "",
    price: "",
    discount: "",
    quantity: "",
    description: "",
  });

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await getTourById(id);

        setTour(res.data); // nếu dùng axios
      } catch (error) {
        toast.error("Không lấy được dữ liệu tour");
      }
    };

    fetchTour();
  }, [id]);

  const handleChange = (e) => {
    setTour({
      ...tour,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTour(id, tour);

      await Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Cập nhật tour thành công",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/admin/tours");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Thất bại",
        text: "Cập nhật tour thất bại",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6  rounded-lg dark:bg-gray-800 text-black dark:text-white  ">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Tour</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={tour.name || ""}
          onChange={handleChange}
          placeholder="Tour Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          value={tour.price || ""}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="discount"
          value={tour.discount || ""}
          onChange={handleChange}
          placeholder="Discount"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="quantity"
          value={tour.quantity || ""}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          value={tour.description || ""}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Update Tour
        </button>
      </form>
    </div>
  );
}

export default TourEdit;
