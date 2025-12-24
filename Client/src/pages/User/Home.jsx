import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RescueMateLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-extrabold">
          <span className="text-yellow-300 text-3xl">🐾</span>
          RescueMate
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/about" className="hover:text-yellow-300">About</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-300 transition"
        >
          Join Us
        </button>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-6 md:px-10 max-w-7xl mx-auto min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Every Paw <br />
            <span className="text-yellow-300">Deserves a Loving Home</span>
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-xl">
            RescueMate connects abandoned, lost, and rescued pets with
            compassionate humans — creating forever families.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
  <button
    onClick={() => navigate("/adopt")}
    className="bg-white text-purple-700 px-7 py-3 rounded-xl
               font-semibold hover:bg-white/90 transition"
  >
    🐶 Adopt a Friend
  </button>

  <button
    onClick={() => navigate("/pet/register")}
    className="bg-yellow-400 text-black px-7 py-3 rounded-xl
               font-semibold hover:bg-yellow-300 transition"
  >
    🐾 Register Pet
  </button>

  <button
    onClick={() => navigate("/find-pet")}
    className="border border-white/70 px-7 py-3 rounded-xl
               font-semibold hover:bg-white/10 transition"
  >
    🔍 Find Lost Pet (ML)
  </button>
</div>

        </motion.div>

        <motion.img
          src="src/assets/Banner.png"
          alt="Pet Adoption"
          className="max-h-[75vh] w-auto object-contain mx-auto"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </section>

      {/* MISSION */}
      <section className="bg-white text-slate-900 rounded-t-[3rem] px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Our Promise to Animals 🐾
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "❤️", title: "Compassion", text: "Every pet is treated with love and dignity." },
              { icon: "🛡️", title: "Trust & Safety", text: "Verified adopters and shelters only." },
              { icon: "🌍", title: "Real Impact", text: "Thousands of pets rescued and rehomed." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PETS */}
      <section className="px-6 md:px-10 py-24 bg-slate-50 text-slate-900">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Meet Our Lovely Friends 🐶🐱
        </h2>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Rocky", img: "https://images.unsplash.com/photo-1558788353-f76d92427f16" },
            { name: "Lucy", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a" },
            { name: "Bruno", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b" },
            { name: "Milo", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" },
          ].map((pet, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <img src={pet.img} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-lg">{pet.name}</h3>
                <p className="text-sm text-slate-600">Waiting for a home</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY ADOPT */}
      <section className="px-6 md:px-10 py-24 bg-white text-slate-900 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Why Adoption Matters ❤️</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          Adoption saves lives, reduces suffering, and creates lifelong bonds.
          Every adoption opens space for another rescue.
        </p>
      </section>

      {/* IMPACT */}
      <section className="px-6 md:px-10 py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { num: "5,000+", label: "Pets Rescued" },
            { num: "3,200+", label: "Adoptions" },
            { num: "1,100+", label: "Reunions" },
            { num: "800+", label: "Volunteers" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-extrabold text-yellow-400 mb-2">
                {stat.num}
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          One Click Can Save a Life 🐾
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="bg-yellow-400 text-black px-12 py-4 rounded-xl font-bold text-lg"
        >
          Start Saving Lives
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 px-6 py-10 text-center">
        © 2025 RescueMate • Built with ❤️ for animals
      </footer>
    </div>
  );
}
