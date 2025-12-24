import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaDog,
  FaCat,
} from "react-icons/fa";

export default function ManagePets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets([
      {
        id: 1,
        name: "Rocky",
        type: "Dog",
        owner: "Harish Reddy",
        location: "Nalgonda, Telangana",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
      },
      {
        id: 2,
        name: "Lucy",
        type: "Cat",
        owner: "Anjali Sharma",
        location: "Hyderabad, Telangana",
        status: "Approved",
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      },
      {
        id: 3,
        name: "Bruno",
        type: "Dog",
        owner: "Rahul Verma",
        location: "Warangal, Telangana",
        status: "Rejected",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
      },
      {
        id: 4,
        name: "Milo",
        type: "Cat",
        owner: "Sneha Patel",
        location: "Vijayawada, Andhra Pradesh",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      },
    ]);
  }, []);

  const statusStyle = (status) => {
    if (status === "Approved") return "bg-emerald-400 text-black";
    if (status === "Rejected") return "bg-red-500 text-white";
    return "bg-yellow-400 text-black";
  };

  return (
    <div className="text-white">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold mb-1">Manage Pets</h1>
        <p className="text-white/60 text-sm">
          Review and manage pet registrations
        </p>
      </div>

      {/* PET LIST */}
      <div className="grid gap-5">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-2xl p-4
              flex flex-col lg:flex-row lg:items-center lg:justify-between
              gap-4
            "
          >
            {/* LEFT INFO */}
            <div className="flex items-center gap-4">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-16 h-16 rounded-xl object-cover"
              />

              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  {pet.type === "Dog" ? (
                    <FaDog className="text-cyan-400" />
                  ) : (
                    <FaCat className="text-pink-400" />
                  )}
                  {pet.name}
                </h3>

                <p className="text-sm text-white/60">
                  Owner: {pet.owner}
                </p>
                <p className="text-sm text-white/60">
                  📍 {pet.location}
                </p>
              </div>
            </div>

            {/* STATUS + ACTIONS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

              {/* STATUS */}
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5
                            rounded-full text-xs font-semibold
                            ${statusStyle(pet.status)}`}
              >
                {pet.status === "Pending" && <FaClock />}
                {pet.status === "Approved" && <FaCheckCircle />}
                {pet.status === "Rejected" && <FaTimesCircle />}
                {pet.status}
              </span>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl
                             bg-gradient-to-r from-emerald-400 to-emerald-300
                             text-black text-sm font-semibold
                             hover:scale-105 transition"
                >
                  <FaCheckCircle />
                  Approve
                </button>

                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl
                             bg-gradient-to-r from-red-500 to-red-400
                             text-white text-sm font-semibold
                             hover:scale-105 transition"
                >
                  <FaTimesCircle />
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
