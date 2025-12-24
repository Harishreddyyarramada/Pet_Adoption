import { Navigate, Outlet } from "react-router-dom";

const ProtectedUserRoute = () => {
  const isLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedUserRoute;
