import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../../service/authApi";

function UserCreate() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    image: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("/avatar.png");
  const [loading] = useState(false);
  const [progress] = useState(0);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("phone", user.phone);
    formData.append("address", user.address);
    formData.append("gender", user.gender);
    formData.append("image", file);

    try {
      await register(formData);

      toast.success("Create user successfully");

      navigate("/users");
    } catch (error) {
      console.log(error);
      toast.error("Create failed");
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen text-xs">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border mb-3"
            />

            <input type="file" onChange={handleFile} />

            {progress > 0 && progress < 100 && (
              <div className="w-full bg-gray-200 rounded mt-2">
                <div
                  className="bg-blue-500 text-xs text-white text-center p-1 rounded"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>
            )}
          </div>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            autoComplete="current-password"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={user.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <select
            name="gender"
            value={user.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>

          <button
            disabled={loading}
            className={`w-full py-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Creating..." : "Create User"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserCreate;
