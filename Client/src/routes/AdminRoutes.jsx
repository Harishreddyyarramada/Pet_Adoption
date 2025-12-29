import { Routes, Route } from "react-router-dom";
import AdminLayout from "../pages/Admin/AdminLayout.jsx";
import AdminDashboard from "../pages/Admin/AdminDashboard.jsx";
import ManagePets from "../pages/Admin/ManagePets.jsx";
import ManageUsers from "../pages/Admin/ManageUsers.jsx";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import AdminLogin from "../pages/Admin/AdminLogin.jsx";
export default function AdminRoutes() {
  return (
    <Routes >
      <Route path="/admin/login" element={<AdminLogin/>} />  
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/pets" element={<ManagePets />} />
        <Route path="/admin/users" element={<ManageUsers />} />              
      </Route>
    </Routes>
  );
}
