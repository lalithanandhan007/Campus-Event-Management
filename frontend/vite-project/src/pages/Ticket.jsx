import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function Ticket() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const data = params.get("data");

  let ticket = null;

  try {
    if (data) {
      ticket = JSON.parse(decodeURIComponent(data));
    }
  } catch (error) {
    console.error("QR Decode Error:", error);
  }

  // ❌ Invalid QR
  if (!ticket) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative text-gray-800">

        <BackButton />

        <h2 className="text-red-500 text-lg font-semibold">
          ❌ Invalid QR Code
        </h2>

        <button
          onClick={() => navigate("/home")}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg active:scale-95 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  // ✅ Valid Ticket UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 relative text-gray-800">

      <BackButton />

      <div className="bg-white p-6 rounded-2xl w-80 text-center shadow-xl text-gray-800">

        {/* TITLE */}
        <h2 className="text-xl font-bold mb-4 text-gray-900">
          🎟 Event Ticket
        </h2>

        {/* EVENT NAME */}
        <h3 className="font-bold text-2xl text-gray-900">
          {ticket.title}
        </h3>

        {/* DETAILS */}
        <div className="mt-3 text-sm text-gray-600 space-y-1">
          <p>📅 {ticket.date}</p>
          <p>⏰ {ticket.time || "Not specified"}</p>
          <p>📍 {ticket.venue}</p>
        </div>

        {/* SEAT */}
        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-gray-800">
          <p className="font-semibold text-lg">
            🎟 Seat: {ticket.seat}
          </p>
        </div>

        {/* STATUS */}
        <div className="mt-4 border-t pt-3">
          <p className="text-green-600 text-sm font-semibold">
            ✅ Valid Ticket
          </p>
          <p className="text-xs text-gray-500">
            Show this at entry gate
          </p>
        </div>

      </div>

    </div>
  );
}