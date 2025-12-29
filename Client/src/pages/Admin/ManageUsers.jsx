import { useEffect, useState } from "react";
import { FaUser, FaCheckCircle, FaBan } from "react-icons/fa";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 1, name: "Harish Reddy", email: "harish@example.com", status: "Active", role: "User" },
      { id: 2, name: "Anjali Sharma", email: "anjali@example.com", status: "Active", role: "User" },
      { id: 3, name: "Rahul Verma", email: "rahul@example.com", status: "Blocked", role: "User" },
      { id: 4, name: "Sneha Patel", email: "sneha@example.com", status: "Active", role: "User" },
    ]);
  }, []);

  const blockUser = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: "Blocked" } : u
      )
    );
  };

  const activateUser = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: "Active" } : u
      )
    );
  };

  const statusStyle = (status) =>
    status === "Active"
      ? "bg-emerald-400 text-black"
      : "bg-red-500 text-white";

  return (
    <div className="text-white">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold mb-1">Manage Users</h1>
        <p className="text-white/60 text-sm">
          View user roles, status, and control access
        </p>
      </div>

      {/* USER LIST */}
      <div className="grid gap-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-2xl p-5
              flex flex-col sm:flex-row sm:items-center sm:justify-between
              gap-6
            "
          >
            {/* USER INFO */}
            <div className="flex items-center gap-4">
              <div
                className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br from-indigo-500 to-violet-500
                  flex items-center justify-center text-lg font-bold
                "
              >
                <FaUser />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-white/60">{user.email}</p>

                {/* ROLE LABEL */}
                <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400 text-black">
                  Role: {user.role}
                </span>
              </div>
            </div>

            {/* STATUS + ACTIONS */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">

              {/* STATUS */}
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/60">Status</span>
                <span
                  className={`inline-flex items-center gap-2 px-4 py-1.5
                              rounded-full text-xs font-semibold
                              ${statusStyle(user.status)}`}
                >
                  {user.status === "Active" ? <FaCheckCircle /> : <FaBan />}
                  {user.status}
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 mt-1 sm:mt-4">
                <button
                  disabled={user.status === "Active"}
                  onClick={() => activateUser(user.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl
                    text-sm font-semibold transition
                    ${
                      user.status === "Active"
                        ? "bg-emerald-200 text-black/40 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-400 to-emerald-300 text-black hover:scale-105"
                    }
                  `}
                >
                  <FaCheckCircle />
                  Activate
                </button>

                <button
                  disabled={user.status === "Blocked"}
                  onClick={() => blockUser(user.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl
                    text-sm font-semibold transition
                    ${
                      user.status === "Blocked"
                        ? "bg-red-300 text-white/50 cursor-not-allowed"
                        : "bg-gradient-to-r from-red-500 to-red-400 text-white hover:scale-105"
                    }
                  `}
                >
                  <FaBan />
                  Block
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
