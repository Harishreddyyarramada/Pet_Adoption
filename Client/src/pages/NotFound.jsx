import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 px-4">
      
      {/* SINGLE RESPONSIVE CARD */}
      <div
        className="w-full max-w-xl bg-white/10 backdrop-blur-2xl
                   border border-white/20 rounded-3xl shadow-2xl
                   p-6 sm:p-8 text-center text-white"
      >
        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6"
          alt="Cute lost pet"
          className="w-56 sm:w-64 mx-auto mb-6 rounded-2xl shadow-lg"
        />

        {/* TEXT */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Oops! This page is lost 🐾
        </h2>

        <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.  
          Our furry friend couldn’t find it either.
        </p>

        {/* ACTION */}
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-xl bg-emerald-400 text-black
                     font-semibold hover:bg-emerald-300
                     hover:scale-105 transition-all"
        >
          🏠 Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
