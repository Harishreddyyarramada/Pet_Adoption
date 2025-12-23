import React from "react";
import { motion } from "framer-motion";

export default function RescueMateLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-300 text-3xl">🐾</span>
          PetRescueMate
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a className="hover:text-yellow-300 transition " href="/home">Home</a>
          <a className="hover:text-yellow-300 transition" href="/adopt">Adopt</a>
          <a className="hover:text-yellow-300 transition" href="/rescue">Rescue</a>
          <a className="hover:text-yellow-300 transition" href="/contact">Contact</a>
        </div>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-300 transition">
          Join Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-6 md:px-10 max-w-7xl mx-auto min-h-[calc(100vh-90px)]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Because Every Paw <br />
            <span className="text-yellow-300">Deserves a Home</span>
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-xl">
            RescueMate is a compassionate platform that connects abandoned,
            lost, and rescued pets with loving families — turning hope into
            forever homes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-white text-purple-700 px-7 py-3 rounded-xl font-bold hover:bg-white/90 transition">
              🐶 Adopt a Friend
            </button>
            <button className="border border-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition">
              🔍 Report Lost Pet
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <motion.img
            src="src/assets/Banner.png"
            alt="Pet Adoption"
            className="max-h-[80vh] w-auto object-contain rounded-3xl shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Glow Effect */}
          <div className="absolute -z-10 w-72 h-72 bg-yellow-400/30 blur-3xl rounded-full" />
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-white text-slate-900 rounded-t-[3rem] px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
            Our Promise to Every Animal
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❤️",
                title: "Compassion First",
                text: "We believe love saves lives. Every rescue is handled with care, dignity, and empathy."
              },
              {
                icon: "🛡️",
                title: "Safe & Verified",
                text: "Trusted adopters, verified shelters, and secure connections — safety always comes first."
              },
              {
                icon: "🌍",
                title: "Real Impact",
                text: "Thousands of adoptions, reunions, and a growing community fighting for animal welfare."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
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

      {/* CTA SECTION */}
      <section className="px-6 md:px-10 py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          One Click Can Change a Life 🐾
        </motion.h2>

        <p className="text-white/90 max-w-2xl mx-auto mb-10">
          Whether you adopt, rescue, or reunite a lost pet — your action creates
          a forever story.
        </p>

        <button className="bg-yellow-400 text-black px-12 py-4 rounded-xl text-lg font-extrabold hover:bg-yellow-300 transition">
          Start Saving Lives
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 px-6 py-10 text-center">
        <p>© 2025 RescueMate • Built with ❤️ for animals everywhere</p>
      </footer>
    </div>
  );
}
