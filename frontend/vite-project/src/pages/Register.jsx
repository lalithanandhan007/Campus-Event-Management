import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

const seats = [
  {
    name: "General Admission",
    desc: "Standard seating",
    tag: "Free",
    icon: "👤",
  },
  {
    name: "VIP Section",
    desc: "Premium experience",
    tag: "VIP",
    icon: "👑",
  },
  {
    name: "Front Row",
    desc: "Best view guaranteed",
    tag: "Priority",
    icon: "⚡",
  },
  {
    name: "Balcony",
    desc: "Panoramic view",
    tag: "Scenic",
    icon: "⭐",
  },
];

export default function Register() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const event = location.state;

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">

      {/* 🔥 Back Button */}
      <BackButton />

      {/* Title */}
      <h1 className="text-lg font-semibold mb-4 text-gray-800 mt-10">
        Select Seat Preference
      </h1>

      {/* Container */}
      <div className="bg-white p-4 rounded-2xl shadow-sm">

        <div className="grid grid-cols-2 gap-4">

          {seats.map((seat, i) => {
            const isSelected = selected?.name === seat.name;

            return (
              <div
                key={i}
                onClick={() => setSelected(seat)}
                className={`
                  p-4 rounded-2xl cursor-pointer border
                  transition-all duration-300 ease-in-out
                  active:scale-95 hover:scale-[1.03]
                  ${
                    isSelected
                      ? "bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-md scale-105"
                      : "bg-gray-50 border-gray-200 hover:shadow-md"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    w-8 h-8 flex items-center justify-center rounded-full mb-2
                    transition-all duration-300
                    ${isSelected ? "bg-white/20" : "bg-gray-200"}
                  `}
                >
                  <span className="text-sm">{seat.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold">
                  {seat.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs mt-1 transition-all duration-300 ${
                    isSelected ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {seat.desc}
                </p>

                {/* Tag */}
                <span
                  className={`
                    inline-block mt-2 px-2 py-1 text-xs rounded-full
                    transition-all duration-300
                    ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 text-gray-600"
                    }
                  `}
                >
                  {seat.tag}
                </span>
              </div>
            );
          })}

        </div>

      </div>

      {/* Button */}
      <button
        onClick={() => {
          if (!selected) return;

          navigate("/success", {
            state: { event, seat: selected.name },
          });
        }}
        className="mt-6 w-full bg-pink-500 text-white py-3 rounded-xl shadow-md active:scale-95 transition-all duration-200"
      >
        Confirm Booking
      </button>

    </div>
  );
}