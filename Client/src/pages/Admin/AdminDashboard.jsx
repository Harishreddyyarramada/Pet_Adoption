import React from "react";
import { motion } from "framer-motion";
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

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Users",
      value: 1240,
      icon: <FaUsers />,
      color: "text-indigo-400",
    },
    {
      label: "Total Pets",
      value: 860,
      icon: <FaPaw />,
      color: "text-cyan-400",
    },
    {
      label: "Pending",
      value: 42,
      icon: <FaClock />,
      color: "text-yellow-400",
    },
    {
      label: "Adoptions",
      value: 518,
      icon: <FaCheckCircle />,
      color: "text-emerald-400",
    },
  ];

  const recentPets = [
    { name: "Rocky", owner: "Harish", status: "Pending" },
    { name: "Lucy", owner: "Anjali", status: "Approved" },
    { name: "Bruno", owner: "Rahul", status: "Rejected" },
    { name: "Milo", owner: "Sneha", status: "Pending" },
  ];

  return (
    <div className="h-[calc(100vh-2rem)] text-white">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold mb-1">
          Admin Dashboard
        </h1>
        <p className="text-white/60 text-sm">
          Overview of platform activity
        </p>
      </div>

      {/* STATS (COMPACT) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20
                       rounded-xl px-4 py-3 flex items-center gap-4"
          >
            <div className={`text-2xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs text-white/60">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[70%]">

        {/* RECENT PETS (COMPACT LIST) */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FaDog className="text-cyan-400" />
            Recent Pet Registrations
          </h2>

          <div className="space-y-2">
            {recentPets.map((pet, i) => (
              <div
                key={i}
                className="flex justify-between items-center
                           bg-white/5 px-3 py-2 rounded-lg text-sm"
              >
                <div>
                  <p className="font-medium">{pet.name}</p>
                  <p className="text-white/50 text-xs">
                    Owner: {pet.owner}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    pet.status === "Approved"
                      ? "bg-emerald-400 text-black"
                      : pet.status === "Pending"
                      ? "bg-yellow-400 text-black"
                      : "bg-red-500"
                  }`}
                >
                  {pet.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaUserShield className="text-violet-400" />
            Admin Actions
          </h2>

          <div className="space-y-3 text-sm">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg
                               bg-cyan-400 text-black font-semibold hover:bg-cyan-300">
              <FaDog /> Manage Pets
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg
                               bg-indigo-400 text-black font-semibold hover:bg-indigo-300">
              <FaUsers /> Manage Users
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg
                               bg-emerald-400 text-black font-semibold hover:bg-emerald-300">
              <FaClipboardCheck /> Review Approvals
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg
                               bg-red-500 text-white font-semibold hover:bg-red-400">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
