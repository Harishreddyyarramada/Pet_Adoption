import React from "react";

const ViewPets = () => {
  // 🔹 Sample data (replace with API later)
  const pets = [
    {
      id: 1,
      name: "Rocky",
      breed: "German Shepherd",
      age: 3,
      location: "Nalgonda",
      status: "Approved",
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    },
    {
      id: 2,
      name: "Lucy",
      breed: "Labrador",
      age: 2,
      location: "Hyderabad",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      id: 3,
      name: "Bruno",
      breed: "Beagle",
      age: 4,
      location: "Warangal",
      status: "Rejected",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    },
    {
      id: 4,
      name: "Max",
      breed: "Golden Retriever",
      age: 1,
      location: "Nalgonda",
      status: "Approved",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white px-6 py-10">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2">🐾 My Pets</h1>
        <p className="text-white/70">
          View and track all your registered pets in one place.
        </p>
      </div>

      {/* PET LIST */}
      <div className="max-w-7xl mx-auto">
        {pets.length === 0 ? (
          <div className="text-center bg-white/10 p-10 rounded-2xl border border-white/20">
            <p className="text-lg">No pets registered yet 🐶</p>
          </div>
        ) : (
          <>
            <p className="mb-4 text-white/60">
              Showing {pets.length} pets
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pets.map((pet) => (
                <div
                  key={pet.id}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:scale-105 transition"
                >
                  {/* IMAGE */}
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="h-48 w-full object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <h2 className="text-xl font-semibold">
                        {pet.name}
                      </h2>
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

                    <p className="text-sm text-white/70 mb-1">
                      🐕 Breed: {pet.breed}
                    </p>
                    <p className="text-sm text-white/70 mb-1">
                      🎂 Age: {pet.age} year(s)
                    </p>
                    <p className="text-sm text-white/70">
                      📍 Location: {pet.location}
                    </p>

                    {/* ACTIONS */}
                    <div className="mt-5 flex gap-3">
                      <button className="flex-1 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
                        View
                      </button>
                      <button className="flex-1 py-2 rounded-xl bg-violet-400 text-black font-semibold hover:bg-violet-300 transition">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewPets;
