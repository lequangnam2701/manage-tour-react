import React, { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../../service/userService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res);
      console.log(res);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);

      Swal.fire({
        icon: "success",
        title: "Đã xóa",
        text: "Xóa user thành công",
        timer: 2000,
        showConfirmButton: false,
      });

      fetchUsers();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Thất bại",
        text: "Xóa user thất bại",
      });
    }
  };

  const handleDeleteConfirm = (id) => {
    Swal.fire({
      title: "Bạn chắc chắn?",
      text: "User sẽ bị xóa vĩnh viễn!",
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
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen text-xs">
      <h2 className="text-xl font-bold mb-6 ">Total Users: {users?.length}</h2>
      <h2 className="text-2xl font-bold mb-6  text-center">User List</h2>
      <button className="mb-5 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
        <Link to="/admin/users/create">Add New User</Link>
      </button>
      <div
        className="overflow-x-auto shadow-lg rounded-xl
      bg-white dark:bg-gray-700"
      >
        <table className="min-w-full text-sm text-left">
          <thead
            className="bg-gray-100 text-gray-700 uppercase text-xs
          dark:bg-gray-900 dark:text-gray-300"
          >
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Roles</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Register Date</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => (
              <tr
                key={user.userId}
                className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">
                  <img
                    src={user.image || "/avatar.png"}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>

                <td className="px-6 py-4 font-medium">{user.name}</td>

                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>

                <td className="px-6 py-4">{user.phone}</td>

                <td className="px-6 py-4 text-blue-600 dark:text-blue-400 font-medium">
                  {user.roles?.map((r) => r.name).join(", ")}
                </td>
                <td className="px-6 py-4">
                  {user.gender === 1 ? "Male" : "Female" || "Other"}
                </td>

                <td className="px-6 py-4">
                  {new Date(user.registerDate).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">{user.address}</td>

                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => navigate(`/users/edit/${user.userId}`)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteConfirm(user.userId)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded"
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
};

export default UserList;
