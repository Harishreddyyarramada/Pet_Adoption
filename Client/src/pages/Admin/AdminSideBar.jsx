import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaUsers,
  FaPaw,
  FaClock,
  FaCheckCircle,
  FaDog,
  FaUserShield,
  FaClipboardCheck,
  FaSignOutAlt,
} from "react-icons/fa";
export default function AdminSidebar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium
     ${
       isActive
         ? "bg-gradient-to-r from-cyan-400 to-violet-400 text-black shadow"
         : "text-white/80 hover:bg-white/10"
     }`;

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50
                   bg-gradient-to-r from-cyan-400 to-violet-400
                   text-black px-4 py-2 rounded-xl font-bold shadow"
      >
        ☰
      </button>

      {/* OVERLAY (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-gradient-to-b from-slate-950 via-indigo-950 to-violet-950
          border-r border-white/10
          p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-extrabold text-cyan-400">🛡 Admin</h2>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* NAV */}
        <nav className="space-y-3">
          <NavLink
            to="/admin"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            📊 Dashboard
          </NavLink>
          <NavLink
            to="/admin/pets"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            🐾 Manage Pets
          </NavLink>
          <NavLink
            to="/admin/users"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            👥 Manage Users
          </NavLink>
        </nav>

        {/* FOOTER */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            className="w-full flex items-center justify-center gap-3
             py-3 rounded-xl bg-red-500 text-white font-semibold
             hover:bg-red-400 transition"
          >
            <FaSignOutAlt className="text-lg" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
