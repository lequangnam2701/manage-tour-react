import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const roles = JSON.parse(localStorage.getItem("roles")) || [];

  if (!roles.includes("ROLE_ADMIN")) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
