import { useEffect, useState } from "react";
import { deleteRate, getRates } from "../../../service/rateService";
import Swal from "sweetalert2";

function RateList() {
  const [rates, setRates] = useState([]);
  const [searchRating, setSearchRating] = useState("");

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    const data = await getRates();
    setRates(data);
  };

  const filteredRates = rates.filter((item) => {
    if (!searchRating) return true;
    return item.rating === Number(searchRating);
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Bạn chắc chắn?",
      text: "Đánh giá này sẽ bị xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteRate(id);

      setRates(rates.filter((item) => item.id !== id));

      Swal.fire({
        icon: "success",
        title: "Đã xóa",
        text: "Xóa đánh giá thành công",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Thất bại",
        text: "Xóa đánh giá thất bại",
      });
    }
  };

  return (
    <div className="min-h-screen mx-auto p-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Danh sách đánh giá
      </h2>
      <select
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
        className="border px-3 py-2 rounded text-black"
      >
        <option value="">All Rating</option>
        <option value="5">⭐⭐⭐⭐⭐ (5)</option>
        <option value="4">⭐⭐⭐⭐ (4)</option>
        <option value="3">⭐⭐⭐ (3)</option>
        <option value="2">⭐⭐ (2)</option>
        <option value="1">⭐ (1)</option>
      </select>

      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden text-xs">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Rating</th>
              <th className="px-4 py-3 text-left">Comment</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredRates.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">{"⭐".repeat(item.rating)}</td>
                <td className="px-4 py-3">{item.comment}</td>
                <td className="px-4 py-3">
                  {new Date(item.rateDate).toLocaleDateString()}
                </td>

                <td className="px-4 py-3">{item.user?.name}</td>
                <td className="px-4 py-3">{item.user?.email}</td>
                <td className="px-4 py-3">{item.user?.address}</td>

                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    🗑 Delete
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

export default RateList;
