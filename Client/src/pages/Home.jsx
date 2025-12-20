import React from "react";

export default function RescueMateLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-yellow-300">🐾</span>
          RescueMate
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a className="hover:text-yellow-300" href="#">Home</a>
          <a className="hover:text-yellow-300" href="#">Adopt</a>
          <a className="hover:text-yellow-300" href="#">Rescue</a>
          <a className="hover:text-yellow-300" href="#">Contact</a>
        </div>
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-300">
          Sign Up
        </button>
      </nav>

      {/* HERO SECTION */}
     <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-10 max-w-7xl mx-auto min-h-[calc(100vh-90px)] overflow-hidden">

        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Every Life Matters — <br /> Give Hope, Give a Home
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-xl">
            RescueMate helps abandoned and lost pets find loving families. Your kindness can save a life today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-white/90">
              Adopt Now
            </button>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10">
              Report a Lost Pet
            </button>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
  <img
    src="src\assets\Banner.png"
    alt="Pet Adoption"
    className="max-h-[80vh] w-auto object-contain rounded-3xl shadow-2xl"
  />
</div>

      </section>

      {/* MISSION SECTION */}
      <section className="bg-white text-slate-900 rounded-t-[3rem] px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Mission: Saving Lives Together
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Why Animal Rescue Matters</h3>
              <p className="text-slate-600">
                Millions of animals wait for love and care. We connect kind hearts with pets who need them most.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">What We Do</h3>
              <p className="text-slate-600">
                Verified adoptions, lost pet reporting, shelter partnerships, and safe owner connections.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
              <p className="text-slate-600">
                Thousands of happy adoptions, reunions, and a growing rescue-driven community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-10 py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Be a Hero for Animals Today
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10">
          Adopt, rescue, or report a lost pet — every small action saves lives.
        </p>
        <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300">
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 px-6 py-10 text-center">
        <p>© 2025 RescueMate. Built with ❤️ for animals.</p>
      </footer>
    </div>
  );
}
