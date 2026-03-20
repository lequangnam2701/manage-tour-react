import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { deleteTour, getTours } from "../../../service/tourService";
import Swal from "sweetalert2";

function TourList() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      const res = await getTours();
      setTours(res);
    };

    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTour(id);

      toast.success("Xóa tour thành công");
    } catch (error) {
      toast.error("Xóa thất bại");
    }
    setTours(tours.filter((tour) => tour.tourId !== id));
  };

  const handleDeleteConfirm = (id) => {
    Swal.fire({
      title: "Bạn chắc chắn?",
      text: "Tour sẽ bị xóa vĩnh viễn!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen mx-auto">
      <h1 className="text-2xl font-bold mb-6  text-center">Danh sách Tour</h1>

      <button className="mb-5 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
        <Link to="/admin/tour/add">Add New Tour</Link>
      </button>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border border-gray-200 dark:border-gray-700 table-fixed">
          <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase border-b">
            <tr>
              <th className="px-3 py-2 text-left w-24">Image</th>
              <th className="px-3 py-2 w-[250px]">Name</th>
              <th className="px-3 py-2 text-left">Category</th>
              <th className="px-3 py-2 text-left">Price</th>
              <th className="px-3 py-2 text-left">Discount</th>
              <th className="px-3 py-2 text-left">Sold</th>
              <th className="px-3 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr
                key={tour.tourId}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-3 py-2">
                  <img
                    src={tour.image || "https://via.placeholder.com/100"}
                    alt={tour.name}
                    className="w-12 h-12 object-cover rounded-md mx-auto"
                  />
                </td>
                <td className="px-3 py-2">
                  <div
                    className="max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap"
                    title={tour.name}
                  >
                    {tour.name}
                  </div>
                </td>

                <td className="px-3 py-2">{tour.category?.categoryName}</td>

                <td className="px-3 py-2 text-red-500 font-semibold">
                  ${tour.price}
                </td>

                <td className="px-3 py-2">
                  <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">
                    -{tour.discount}%
                  </span>
                </td>

                <td className="px-3 py-2">{tour.sold}</td>

                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <Link
                      to={`/admin/tours/edit/${tour.tourId}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDeleteConfirm(tour.tourId)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TourList;
