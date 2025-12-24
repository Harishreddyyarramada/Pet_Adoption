import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSideBar.jsx";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main
        className="
          min-h-screen
          bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900
          px-4 sm:px-6 py-6
          md:pl-[17rem]
        "
      >
        <Outlet />
      </main>
    </div>
  );
}
