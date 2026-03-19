import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(storedUser?.name || "");
  const [email] = useState(storedUser?.email || "");
  const [preview, setPreview] = useState(storedUser?.avatar || null);
  const navigate = useNavigate();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

 const handleSave = () => {
  const updatedUser = {
    ...storedUser,
    name,
    avatar: preview,
  };

  localStorage.setItem("user", JSON.stringify(updatedUser));

  Swal.fire({
    icon: "success",
    title: "Success",
    text: "Profile updated successfully!",
    timer: 2000,
    showConfirmButton: false,
  });

  navigate("/admin", { replace: true });
};

  return (
    <div
      className="min-h-screen flex items-center justify-center 
    bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6"
    >
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">My Profile</h1>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="flex flex-col items-center mb-6">
            {preview ? (
              <img
                src={preview}
                alt="User avatar"
                className="w-24 h-24 rounded-full object-cover mb-3"
              />
            ) : (
              <FaUserCircle size={90} className="text-gray-400" />
            )}

            <input type="file" accept="image/*" onChange={handleAvatarChange} />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-300">
                Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded 
                bg-gray-50 dark:bg-gray-700 
                text-black dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-300">
                Email
              </label>

              <input
                value={email}
                readOnly
                className="w-full border p-2 rounded 
                bg-gray-50 dark:bg-gray-700 
                text-black dark:text-white"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 
              text-white py-2 rounded-lg transition"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
