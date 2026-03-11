import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../service/categoryService";

function CategoryAdd() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      categoryName: categoryName,
    };

    await createCategory(data);

    toast.success("Thêm loại tour thành công");

    navigate("/categories");
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