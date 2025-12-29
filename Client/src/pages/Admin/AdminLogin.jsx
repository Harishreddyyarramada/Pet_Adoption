import React, { useState } from "react";
import { ShieldCheckIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // ✅ Frontend validation
    if (!formData.email || !formData.password) {
      setErrorMsg("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/login/",
        {
          username_or_email: formData.email,
          password: formData.password,
        }
      );

      console.log("Admin login success:", response.data);

      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("admin", JSON.stringify(response.data.admin));

      navigate("/admin");
    } catch (error) {
      if (error.response) {
        setErrorMsg(
          error.response.data.non_field_errors?.[0] ||
            "Invalid admin credentials"
        );
      } else {
        setErrorMsg("Server not responding");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-600/20 border border-indigo-500/30 mb-4">
              <ShieldCheckIcon className="w-7 h-7 text-indigo-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-100">
              Admin Portal
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Restricted access · Authorized personnel only
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {errorMsg && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                {errorMsg}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700
                           text-slate-100 placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter secure password"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700
                             text-slate-100 placeholder-slate-500
                             focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <LockClosedIcon className="w-5 h-5 text-slate-500 absolute right-3 top-3" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 rounded-lg text-white font-semibold tracking-wide
                transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400
                ${
                  loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500"
                }`}
            >
              {loading ? "Verifying..." : "Secure Login"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-slate-500">
            Unauthorized access is prohibited.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
