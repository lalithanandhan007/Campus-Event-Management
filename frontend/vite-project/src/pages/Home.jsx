import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [username] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.name ? user.name.toUpperCase() : "USER";
  });

  const [events] = useState(() => {
    return JSON.parse(localStorage.getItem("events")) || [];
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" ||
      event.category === selectedCategory;

    const matchesSearch =
      event.title?.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-gray-800">

      {/* HEADER */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            HELLO {username} 👋
          </h1>
          <p className="text-gray-600 text-sm">
            Find your next event
          </p>
        </div>

        <button
          onClick={() => navigate("/profile")}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center active:scale-95"
        >
          👤
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl border mb-4 text-black bg-white focus:ring-2 focus:ring-pink-400"
      />

      {/* CATEGORIES */}
      <div className="flex gap-2 overflow-x-auto mb-4">
        {["All", "Technical", "Cultural", "Sports", "Workshops"].map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full shadow text-sm cursor-pointer transition ${
              selectedCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* EVENTS */}
      <div className="space-y-4">

        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-500">
            No matching events found.
          </p>
        ) : (
          filteredEvents.map((event, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow text-center space-y-2"
            >

              {/* ✅ SQUARE IMAGE CENTERED */}
              {event.image && (
                <div className="flex justify-center mb-2">
                  <div className="w-84 h-56 overflow-hidden rounded-xl shadow">
                    <img
                      src={event.image}
                      alt="event"
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
              )}

              {/* TITLE */}
              <h2 className="font-bold text-gray-900 text-lg">
                {event.title}
              </h2>

              {/* DATE + TIME */}
              <p className="text-sm text-gray-600">
                {event.date} • {event.time}
              </p>

              {/* VENUE */}
              <p className="text-sm text-gray-600">
                {event.venue}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/event", { state: event })}
                className="mt-3 w-full bg-pink-500 text-white py-2 rounded-xl active:scale-95 transition hover:bg-pink-600"
              >
                View Details
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
}