import { useEffect, useState } from "react";
import { getBookDetail } from "../../../service/bookService";
import { useParams } from "react-router-dom";

function BookDetail() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getBookDetail(id);
        console.log("API DATA:", res.data);

        const data = Array.isArray(res.data) ? res.data : [res.data];
        setDetails(data);
      } catch (error) {
        console.error("API ERROR:", error);
      }
    };

    loadData();
  }, [id]);

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200  text-xs">
      <h2 className="text-2xl font-bold mb-4">Chi tiết đặt chỗ</h2>

      {/* Tổng tiền */}
      <div className="mb-4 text-lg font-semibold">
        Tổng tiền:{" "}
        {details.reduce((total, item) => total + item.price * item.quantity, 0)}{" "}
        $
      </div>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase text-xs border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th className="p-2 border">STT</th>
            <th className="p-2 border">Tour</th>
            <th className="p-2 border">Số lượng</th>
            <th className="p-2 border">Giá</th>
            <th className="p-2 border">Xác nhận</th>
            <th className="p-2 border">Hủy</th>
            <th className="p-2 border">Thanh toán</th>
          </tr>
        </thead>

        <tbody>
          {details.map((item, index) => (
            <tr key={item.id || index} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.tour?.name}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.price}</td>

              <td className="border p-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Xác nhận
                </button>
              </td>

              <td className="border p-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Hủy
                </button>
              </td>

              <td className="border p-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Thanh toán
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookDetail;
