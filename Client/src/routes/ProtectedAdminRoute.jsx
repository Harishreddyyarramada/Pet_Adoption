import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const isAdmin = localStorage.getItem("isAdmin");

  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
}
