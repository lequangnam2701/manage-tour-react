import React, { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../service/userService";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa user này?")) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">User List</h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Roles</th>
              <th className="px-6 py-3">Active</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">{user.name}</td>

                <td className="px-6 py-4 text-gray-600">{user.email}</td>

                <td className="px-6 py-4">{user.phone}</td>

                <td className="px-6 py-4 text-blue-600 font-medium">
                  {user.roles?.map((r) => r.name).join(", ")}
                </td>

                <td className="px-6 py-4">
                  {user.active ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                      Inactive
                    </span>
                  )}
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
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
