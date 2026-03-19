import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../../service/authApi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      });

      console.log("LOGIN RES:", res); 

      const roles = res.roles;

      if (keepLogin) {
        localStorage.setItem("token", res.token);
      } else {
        sessionStorage.setItem("token", res.token);
      }

      localStorage.setItem("roles", JSON.stringify(roles));
      localStorage.setItem("user", JSON.stringify(res));

      if (roles.includes("ROLE_ADMIN")) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="w-[380px] bg-white shadow-2xl rounded-2xl p-8">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">Traveloka</h1>
        </div>

        <h2 className="text-xl font-semibold text-center">
          Hi, Welcome Back 👋
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>

            <div className="flex mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-3 py-2 border rounded-l-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={keepLogin}
                onChange={(e) => setKeepLogin(e.target.checked)}
              />
              Keep me logged in
            </label>

            <span className="text-blue-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-5">
          Don't have an account?
          <Link to="/register" className="text-blue-500 ml-1 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
