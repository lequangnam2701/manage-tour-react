import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { deleteBook, getBooks } from "../../../service/bookService";

function BookList() {
  const [books, setBooks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa booking này?")) {
      await deleteBook(id);
      toast.success("Xóa booking thành công");
      loadBooks();
    }
  };

  const filteredBooks =
    statusFilter === "all"
      ? books
      : books.filter((book) => book.status === Number(statusFilter));

  const renderStatus = (status) => {
    switch (status) {
      case 0:
        return (
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-xs">
            Pending
          </span>
        );
      case 1:
        return (
          <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">
            Confirmed
          </span>
        );
      case 2:
        return (
          <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded text-xs">
            Cancelled
          </span>
        );
      default:
        return "Unknown";
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Booking Management
      </h2>

      {/* Filter */}
      <div className="mb-4">
        <select
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="0">Pending</option>
          <option value="1">Confirmed</option>
          <option value="2">Cancelled</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase text-xs border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-3 py-3 text-left">ID</th>
              <th className="px-3 py-3 text-left">User</th>
              <th className="px-3 py-3 text-left">Amount</th>
              <th className="px-3 py-3 text-left">Phone</th>
              <th className="px-3 py-3 text-left">Address</th>
              <th className="px-3 py-3 text-left">Start</th>
              <th className="px-3 py-3 text-left">End</th>
              <th className="px-3 py-3 text-left">Status</th>
              <th className="px-3 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredBooks.map((book) => (
              <tr
                key={book.bookId}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <td className="px-3 py-3">{book.bookId}</td>

                <td className="px-3 py-3">{book.user?.name}</td>

                <td className="px-3 py-3 font-semibold text-green-500">
                  ${book.amount}
                </td>

                <td className="px-3 py-3">{book.phone}</td>

                <td className="px-3 py-3">{book.address}</td>

                <td className="px-3 py-3">
                  {new Date(book.startDate).toLocaleDateString()}
                </td>

                <td className="px-3 py-3">
                  {new Date(book.endDate).toLocaleDateString()}
                </td>

                <td className="px-3 py-3">{renderStatus(book.status)}</td>

                <td className="px-3 py-3">
                  <div className="flex gap-3">
                    <button className="text-blue-500 hover:text-blue-400">
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(book.bookId)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <FaTrash />
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

export default BookList;
