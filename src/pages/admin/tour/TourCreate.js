import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { createTour, getAllCategories } from "../../../service/tourService";

function TourCreate() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const [tour, setTour] = useState({
    name: "",
    quantity: "",
    price: "",
    discount: "",
    image: "",
    description: "",
    enteredDate: "",
    duration: "",
    sold: "",
    timeId: "",
    status: true,
    category: {
      categoryId: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "enteredDate") {
      const timeId = value.replaceAll("-", "");

      setTour({
        ...tour,
        enteredDate: value,
        timeId: timeId,
      });
    } else {
      setTour({
        ...tour,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(tour);

      await createTour(tour);

      toast.success("Thêm tour thành công");
      navigate("/tours");
    } catch (error) {
      console.log(error);
      toast.error("Thêm tour thất bại");
    }
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "demo_upload");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/shopdemo/image/upload",
        formData,
      );

      setTour((prev) => ({
        ...prev,
        image: res.data.secure_url,
      }));

      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const res = await getAllCategories();
    setCategories(res.data);
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Tour</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={tour.name}
          onChange={handleChange}
          placeholder="Tour Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="quantity"
          value={tour.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="price"
          value={formatNumber(tour.price)}
          onChange={(e) => {
            const raw = e.target.value.replaceAll(",", "");
            setTour({ ...tour, price: raw });
          }}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="discount"
          value={tour.discount}
          onChange={handleChange}
          placeholder="Discount (%)"
          className="w-full border p-2 rounded"
        />

        <input type="file" accept="image/*" onChange={handleUpload} />
        {tour.image && (
          <img
            src={tour.image}
            alt="Tour"
            className="w-40 h-28 mt-2 rounded object-cover"
          />
        )}

        <textarea
          name="description"
          value={tour.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          name="enteredDate"
          value={tour.enteredDate}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-white text-black dark:bg-gray-700 dark:text-white"
        />

        <input
          type="number"
          name="duration"
          value={tour.duration}
          onChange={handleChange}
          placeholder="Duration (days)"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="sold"
          value={tour.sold}
          onChange={handleChange}
          placeholder="Sold"
          className="w-full border p-2 rounded"
        />

        <select
          name="categoryId"
          value={tour.category.categoryId}
          onChange={(e) =>
            setTour({
              ...tour,
              category: { categoryId: e.target.value },
            })
          }
          className="w-full border p-2 rounded"
        >
          <option value="">Select Category</option>

          {categories.map((c) => (
            <option key={c.categoryId} value={c.categoryId}>
              {c.categoryName}
            </option>
          ))}
        </select>

        {/* <input
          type="number"
          name="timeId"
          value={tour.timeId}
          onChange={handleChange}
          placeholder="Time ID"
          className="w-full border p-2 rounded"
        /> */}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          Create Tour
        </button>
      </form>
    </div>
  );
}

export default TourCreate;
