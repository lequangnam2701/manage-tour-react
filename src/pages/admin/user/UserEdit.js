import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserById, updateUser } from "../../../service/authApi";

function UserEdit() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(id);
        setUser(res.data);

        if (res.data.image) {
          setPreview(res.data.image);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  //   const loadUser = async () => {
  //     try {
  //       const res = await getUserById(id);

  //       setUser(res.data);

  //       if (res.data.image) {
  //         setPreview(res.data.image);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

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

    if (file) {
      formData.append("image", file);
    }

    try {
      await updateUser(id, formData);

      toast.success("Update user successfully");

      navigate("/users");
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border mb-3"
            />

            <input type="file" onChange={handleFile} />
          </div>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="address"
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

          <button className="w-full py-2 rounded text-white bg-blue-500 hover:bg-blue-600">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserEdit;
