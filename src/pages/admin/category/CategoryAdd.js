import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../service/categoryService";
import Swal from "sweetalert2";

function CategoryAdd() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      categoryName: categoryName,
    };

    try {
      await createCategory(data);

      await Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Thêm loại tour thành công",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/admin/category");
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Thất bại",
        text: "Không thể thêm loại tour",
      });
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Thêm loại tour</h2>

        <input
          type="text"
          placeholder="Tên loại tour"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full p-2 border rounded mb-4 text-black"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

export default CategoryAdd;
