import React from "react";

function HeroSection() {
  return (
    <div className="relative h-[80vh] flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 p-8 md:p-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Loki
        </h1>
        <p className="text-gray-300 text-sm md:text-lg mb-6 line-clamp-3">
          After stealing the Tesseract during the events of Avengers: Endgame,
          an alternate version of Loki is brought to the mysterious Time
          Variance Authority where he must help fix the timeline.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            ▶ Watch Now
          </button>
          <button className="bg-gray-700/80 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
