import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../../service/authApi";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "true",
    image: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert("Please agree to Terms & Conditions");
      return;
    }

    try {
      await register(user);
      alert("Register success!");
    } catch (err) {
      console.log(err);
      alert("Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[420px]">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">Traveloka</h1>
        </div>

        <h2 className="text-xl font-semibold text-center mb-6">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <span
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <select
            name="gender"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="true">Male</option>
            <option value="false">Female</option>
          </select>

          {/* Terms */}
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              onChange={(e) => setAgree(e.target.checked)}
              className="mr-2"
            />

            <span>
              Agree with{" "}
              <span className="text-blue-500 cursor-pointer">
                Terms & Conditions
              </span>
            </span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
