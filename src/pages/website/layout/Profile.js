import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getToken } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:8001";

function buildImageUrl(path) {
  if (!path) return null;
  if (path.startsWith("http")) return path;

  // encode URI để browser load được
  return `${BASE_URL}/${encodeURI(path.replace(/^\/+/, ""))}`;
}

function ProfileUser() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(storedUser?.name || "");
  const [email] = useState(storedUser?.email || "");
  const [user, setUser] = useState(storedUser || {});
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(buildImageUrl(storedUser?.image));
  const navigate = useNavigate();

  const handleAvatarChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSave = async () => {
    try {
      const token = getToken();

      const formData = new FormData();
      formData.append("id", user.id);
      formData.append("name", name);
      if (file) formData.append("file", file);

      const res = await fetch(`${BASE_URL}/api/users/update`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      setPreview(buildImageUrl(data.image));
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Profile updated successfully!",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/"); // redirect về /
      }, 2000);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Update failed!",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
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
              <label className="block text-sm text-gray-500">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500">Email</label>
              <input
                value={email}
                readOnly
                className="w-full border p-2 rounded bg-gray-50"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
