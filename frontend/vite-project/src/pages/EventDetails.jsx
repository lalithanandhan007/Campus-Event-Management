import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const event = location.state;

  const [selected, setSelected] = useState("");

  const seats = [
    {
      id: "general",
      title: "General Admission",
      desc: "Standard seating",
      tag: "Free",
      icon: "👤",
    },
    {
      id: "vip",
      title: "VIP Section",
      desc: "Premium experience",
      tag: "VIP",
      icon: "👑",
    },
    {
      id: "front",
      title: "Front Row",
      desc: "Best view guaranteed",
      tag: "Priority",
      icon: "⚡",
    },
    {
      id: "balcony",
      title: "Balcony",
      desc: "Panoramic view",
      tag: "Scenic",
      icon: "⭐",
    },
  ];

  const handleConfirm = () => {
    if (!selected) {
      alert("Please select a seat");
      return;
    }

    navigate("/success", { state: { event, seat: selected } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-gray-800">

      {/* 🔙 Back */}
      <BackButton />

      {/* TITLE */}
      <h2 className="text-lg font-bold mb-4 text-gray-900">
        Select Seat Preference
      </h2>

      {/* SEATS GRID */}
      <div className="grid grid-cols-2 gap-4">

        {seats.map((seat) => (
          <div
            key={seat.id}
            onClick={() => setSelected(seat.id)}
            className={`p-4 rounded-xl shadow cursor-pointer transition border ${
              selected === seat.id
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <div className="text-2xl mb-2">{seat.icon}</div>

            <h3 className="font-semibold text-base">
              {seat.title}
            </h3>

            <p className={`text-sm ${
              selected === seat.id ? "text-white/80" : "text-gray-600"
            }`}>
              {seat.desc}
            </p>

            <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${
              selected === seat.id
                ? "bg-white text-pink-500"
                : "bg-gray-200 text-gray-700"
            }`}>
              {seat.tag}
            </span>
          </div>
        ))}

      </div>

      {/* BUTTON */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white shadow-md">
        <button
          onClick={handleConfirm}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-bold active:scale-95 transition hover:opacity-90"
        >
          Confirm Booking
        </button>
      </div>

    </div>
  );
}