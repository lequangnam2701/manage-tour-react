import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../service/authApi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.roles[0]);
      localStorage.setItem("user", JSON.stringify(res.data)); // thêm dòng này

      if (res.data.roles[0] === "ROLE_ADMIN") {
        navigate("/");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[380px] bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          🔐 Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>

            <div className="flex mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="px-3 border border-l-0 rounded-r-lg bg-gray-100"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
