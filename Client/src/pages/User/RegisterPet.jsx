import { useState, useEffect } from "react";

export default function RegisterPet() {
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
    location: "",
    pet_type: "ADOPTION",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setForm({ ...form, image: file });

      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch("http://127.0.0.1:8000/api/pets/register/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Request failed");

      alert("Pet Registered Successfully 🐾");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-lg p-8 rounded-3xl
          bg-white/10 backdrop-blur-xl
          border border-white/20 shadow-2xl
          transition-all duration-700
          ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* IMAGE PREVIEW */}
        {preview && (
          <div className="flex justify-center mb-6">
            <img
              src={preview}
              alt="Preview"
              className="w-28 h-28 rounded-full object-cover border-4 border-emerald-400 shadow-md"
            />
          </div>
        )}

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          🐾 Pet Registration
        </h2>

        {/* INPUTS */}
        {[
          { name: "name", placeholder: "Pet Name", type: "text" },
          { name: "breed", placeholder: "Breed", type: "text" },
          { name: "age", placeholder: "Age", type: "number" },
          { name: "location", placeholder: "Location", type: "text" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
            className="w-full mb-5 px-4 py-3 rounded-xl
              bg-white/5 text-white placeholder-white/60
              border border-white/20
              focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40
              outline-none transition"
          />
        ))}

        {/* DESCRIPTION */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          rows="3"
          required
          className="w-full mb-5 px-4 py-3 rounded-xl
            bg-white/5 text-white placeholder-white/60
            border border-white/20
            focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40
            outline-none transition"
        />

        {/* SELECT */}
        <select
          name="pet_type"
          value={form.pet_type}
          onChange={handleChange}
          className="w-full mb-5 px-4 py-3 rounded-xl
            bg-white/10 text-white
            border border-white/20
            focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40
            outline-none transition"
        >
          <option value="ADOPTION">Adoption</option>
          <option value="LOST">Lost</option>
        </select>

        {/* FILE */}
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full mb-8 text-sm text-white
            file:bg-emerald-400 file:text-black
            file:border-none file:px-4 file:py-2
            file:rounded-lg hover:file:bg-emerald-300 transition"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-black
            bg-emerald-400 transition-all duration-300
            ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-emerald-300 hover:scale-105"}
          `}
        >
          {loading ? "Registering..." : "Register Pet"}
        </button>
      </form>
    </div>
  );
}
