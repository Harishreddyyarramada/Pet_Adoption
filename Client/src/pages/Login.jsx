import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../UI/AuthCard.jsx";
import TextInput from "../UI/TextInput.jsx";
import PasswordInput from "../UI/PasswordInput.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");
    setErrors({});

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username_or_email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrors({ general: data?.detail || "Invalid credentials" });
        return;
      }

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      setErrors({ general: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT – STORY PANEL (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d"
              alt="Rescue"
              className="h-80 w-full object-cover hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs tracking-widest text-amber-300 uppercase">
                Welcome Back
              </p>
              <h2 className="text-2xl font-semibold">
                Continue your rescue journey 🐾
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Manage adoptions, track rescues, and reconnect lost pets with loving
            families. Every login helps save a life. 💛
          </p>
        </div>

        {/* RIGHT – LOGIN CARD */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md">
            <AuthCard>
              {/* HEADER */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 mb-3">
                  <span className="text-3xl">🐾</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-50">
                  Log in to Pet Rescue
                </h1>
                <p className="text-sm text-slate-300 mt-1">
                  Welcome back! Let’s save more lives together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* ADMIN LOGIN */}
                <button
                  type="button"
                  onClick={() => navigate("/admin/login")}
                  className="w-full py-2.5 rounded-lg border border-slate-600 
                             bg-slate-800 text-slate-200 font-semibold
                             hover:bg-slate-700 transition"
                >
                  🛡️ Admin Login
                </button>

                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                />

                <PasswordInput
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  placeholder="Enter your password"
                  onFocus={() => setShowPasswordHint(true)}
                  onBlur={() => setShowPasswordHint(false)}
                />

                {showPasswordHint && !errors.password && (
                  <p className="text-xs text-slate-400">
                    Tip: Make sure Caps Lock is off.
                  </p>
                )}

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-300">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="accent-amber-400"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="text-amber-300 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {errors.general && (
                  <p className="text-sm text-red-500 bg-red-100 px-3 py-2 rounded">
                    {errors.general}
                  </p>
                )}

                {success && (
                  <p className="text-sm text-green-600 bg-green-100 px-3 py-2 rounded">
                    {success}
                  </p>
                )}

                {/* USER LOGIN */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg font-semibold text-white
                             bg-gradient-to-r from-amber-500 to-orange-500
                             hover:from-amber-600 hover:to-orange-600
                             disabled:opacity-60 transition"
                >
                  {loading ? "Logging in..." : "Log in →"}
                </button>
              </form>

              <div className="mt-5 text-center">
                <p className="text-sm text-slate-300">
                  New here?{" "}
                  <Link
                    to="/register"
                    className="text-amber-300 font-semibold hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </AuthCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
