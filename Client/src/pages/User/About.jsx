import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          🐾 About RescueMate
        </h1>
        <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
          RescueMate is a modern pet adoption and rescue platform designed to
          connect caring individuals with pets in need of a loving home.
          Our goal is to simplify pet adoption while ensuring transparency,
          safety, and trust.
        </p>
      </section>

      {/* PROJECT STORY */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-4">📖 Project Story</h2>
          <p className="text-white/70 leading-relaxed">
            Many pets are lost, abandoned, or waiting in shelters due to the
            lack of an organized and accessible adoption system. RescueMate
            was created to bridge this gap by providing a single platform
            where users can register pets for adoption, report lost pets,
            and explore available pets with ease.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-4">🎯 Our Mission</h2>
          <p className="text-white/70 leading-relaxed">
            Our mission is to reduce the number of homeless pets by making
            adoption faster, simpler, and more reliable. We believe every
            pet deserves a safe home and every adopter deserves a trusted
            platform.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          ✨ Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Pet Registration & Adoption",
            "Lost Pet Reporting",
            "Admin Approval System",
            "User & Admin Dashboards",
            "Secure Image Uploads",
            "Status Tracking",
            "Responsive UI",
            "Role-based Access",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <p className="font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          🛠 Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {[
            "React.js",
            "Tailwind CSS",
            "Django REST Framework",
            "Python",
            "MySQL",
            "JWT (Planned)",
            "Cloudinary / Media Storage",
            "REST APIs",
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl py-4 hover:bg-white/20 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-6">🌱 Future Vision</h2>
        <p className="text-white/70 text-lg leading-relaxed">
          RescueMate aims to evolve into a complete ecosystem for pet welfare,
          including real-time location tracking for lost pets, AI-based pet
          matching, shelter integrations, and nationwide adoption support.
        </p>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-white/5 py-12 text-center">
        <p className="text-white/70 mb-4">
          Together, we can give every pet a second chance.
        </p>
        <p className="font-semibold">
          🐶 Adopt • 🐱 Rescue • ❤️ Care
        </p>
      </section>
    </div>
  );
};

export default About;
