import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  // 🔹 Sample data (replace with API later)
  const user = {
    name: "Harish Reddy",
    location: "Nalgonda, India",
    petsRegistered: 4,
    petsAdopted: 2,
  };
  const navigate = useNavigate();
  const recentPets = [
    { id: 1, name: "Rocky", status: "Approved" },
    { id: 2, name: "Lucy", status: "Pending" },
    { id: 3, name: "Bruno", status: "Rejected" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white px-6 py-8">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-2">
          👋 Welcome, {user.name}
        </h1>
        <p className="text-white/70">
          Manage your pets, track adoption status, and explore more.
        </p>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Pets Registered", value: user.petsRegistered },
          { label: "Pets Adopted", value: user.petsAdopted },
          { label: "Pending Requests", value: 1 },
          { label: "Location", value: user.location },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-sm text-white/60 mb-1">
              {stat.label}
            </h3>
            <p className="text-2xl font-bold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT – RECENT PETS */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            🐾 Recent Pet Registrations Status
          </h2>

          <div className="space-y-4">
            {recentPets.map((pet) => (
              <div
                key={pet.id}
                className="flex justify-between items-center bg-white/5 p-4 rounded-xl"
              >
                <div>
                  <p className="font-semibold">{pet.name}</p>
                  <p className="text-sm text-white/60">
                    Status: {pet.status}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 text-sm rounded-full ${
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

        {/* RIGHT – QUICK ACTIONS */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            ⚡ Quick Actions
          </h2>

          <div className="space-y-4">
            <button className="w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition" onClick={()=>{navigate("/pet/register")}}>
              ➕ Register New Pet
            </button>

            <button className="w-full py-3 rounded-xl bg-violet-400 text-black font-semibold hover:bg-violet-300 transition" onClick={()=>{navigate("/user/pets")}}>
              🐶 View My Pets
            </button>

            <button className="w-full py-3 rounded-xl bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition">
              📍 Explore Adoption
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
