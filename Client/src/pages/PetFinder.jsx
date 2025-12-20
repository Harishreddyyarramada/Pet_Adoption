import { useState, useRef } from "react";

export default function PetFinder() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [similarity, setSimilarity] = useState(null);
  const [matchedImage, setMatchedImage] = useState(null);
  const [error, setError] = useState("");

  const fileInputRef = useRef();

  const handleFile = (file) => {
    if (!file) return;
    console.log(file);
    setImage(file);
    setError("");

    // Preview
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please upload an image first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");
    setMatchedImage(null);
    setSimilarity(null);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("http://localhost:8000/api/find-pet/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Server error.");
        setLoading(false);
        return;
      }

      setResult(data.result);
      setSimilarity(data.similarity_score || null);       
      if (data.result.startsWith("❌")) {
      setMatchedImage('src/assets/Nomatch.png');}
      else {
      setMatchedImage(`src/assets/${data.matched_image_path.slice(3)}`);
    }

    } catch (err) {
      setError("Network error. Server not reachable.");
    }
    setLoading(false);
  };

  return (
    
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl p-8">

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-2">🐾 Pet Identification System</h1>
        <p className="text-slate-400 mb-8">
          Upload a pet image and find the closest match from the database using AI.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Upload Section */}
          <div className="space-y-4">

            {/* Drag & Drop */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-slate-700 hover:border-emerald-400 p-6 rounded-xl cursor-pointer text-center"
              onClick={() => fileInputRef.current.click()}
            >
              {!preview ? (
                <div>
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm text-slate-300">Drag & drop or click to upload</p>
                </div>
              ) : (
                <img src={preview} alt="preview"
                     className="rounded-xl max-h-64 mx-auto"/>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>

            {/* Error Box */}
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 p-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={loading}
              className="px-5 py-2 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 disabled:opacity-50 transition"
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>

          </div>

          {/* Output Section */}
          <div className="space-y-4">

            {/* Result Box */}
            <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
              <h2 className="text-sm font-semibold mb-2">Result</h2>
              <p className="text-slate-300 whitespace-pre-line">{result || "No prediction yet."}</p>

              {similarity && (
                <div className="mt-3 text-emerald-300 text-sm">
                  Similarity Score: <span className="font-bold">{similarity.toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Matched Image */}
            <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
              <h2 className="text-sm font-semibold mb-2">Closest Match</h2>

              {matchedImage ? (
                <img
                  src={matchedImage}
                  alt="Matched"
                  className="rounded-xl max-h-64 object-contain mx-auto"
                />
              ) : (
                <p className="text-slate-500 text-sm">No matched image yet.</p>
              )}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
