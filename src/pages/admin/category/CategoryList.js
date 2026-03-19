import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteCategory,
  getCategories,
} from "../../../service/categoryService";
import Swal from "sweetalert2";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Bạn chắc chắn?",
      text: "Loại tour này sẽ bị xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    if (result.isConfirmed) {
      try {
        await deleteCategory(id);

        Swal.fire({
          icon: "success",
          title: "Đã xóa",
          text: "Xóa loại tour thành công",
          timer: 2000,
          showConfirmButton: false,
        });

        fetchCategories();
      } catch (error) {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Thất bại",
          text: "Không thể xóa loại tour",
        });
      }
    }
  };

  const filteredCategories = categories.filter((item) =>
    item.categoryId.toString().includes(searchId),
  );

  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen mx-auto text-xs">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Danh sách loại tour
      </h2>

      <div className="flex justify-between mb-4">
        <Link
          to="/admin/category/add"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Category
        </Link>

        <input
          type="text"
          placeholder="Search by ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border px-3 py-2 rounded text-black"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full max-w-3xl mx-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">CategoryName</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCategories.map((item) => (
              <tr
                key={item.categoryId}
                className="border-t border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-3">{item.categoryId}</td>
                <td className="px-4 py-3">{item.categoryName}</td>

                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(item.categoryId)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryList;
