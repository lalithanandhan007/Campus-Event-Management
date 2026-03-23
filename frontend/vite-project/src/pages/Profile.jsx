import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // 🔥 Load user
  const [user] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {};
  });

  // 🔥 Load bookings
  const [bookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login?role=user");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl mb-4">
        <h1 className="text-xl font-bold">My Profile</h1>
        <p className="text-sm">Manage your account</p>
      </div>

      {/* User Card */}
      <div className="bg-white p-4 rounded-2xl shadow mb-4">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>

          <div>
            <h2 className="font-bold">
              {user?.name?.toUpperCase()}
            </h2>
            <p className="text-sm text-gray-500">
              {user?.email}
            </p>

            {/* 🔥 NEW LINE (IMPORTANT) */}
            <p className="text-xs text-purple-500 font-semibold">
              {user?.department || "N/A"} • {user?.year || "N/A"}
            </p>
          </div>
        </div>

        {/* 🔥 UPDATED INFO */}
        <div className="space-y-2 text-sm text-gray-600">
          <p><b>Email:</b> {user?.email}</p>
          <p><b>Department:</b> {user?.department || "N/A"}</p>
          <p><b>Year:</b> {user?.year || "N/A"}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white p-3 rounded-xl shadow text-center">
          <p className="text-lg font-bold">{bookings.length}</p>
          <p className="text-xs text-gray-500">Registered</p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow text-center">
          <p className="text-lg font-bold">0</p>
          <p className="text-xs text-gray-500">Upcoming</p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow text-center">
          <p className="text-lg font-bold">4.8</p>
          <p className="text-xs text-gray-500">Rating</p>
        </div>
      </div>

      {/* Registered Events */}
      <div className="bg-white p-4 rounded-2xl shadow mb-4">
        <h3 className="font-bold mb-2">My Registered Events</h3>

        {bookings.length === 0 ? (
          <p className="text-sm text-gray-500">No bookings yet</p>
        ) : (
          bookings.map((b, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-xl mb-2"
            >
              <div>
                <p className="font-semibold">{b.eventTitle}</p>
                <p className="text-xs text-gray-500">{b.date}</p>
              </div>

              <span className="text-green-600 text-xs font-bold">
                Registered
              </span>
            </div>
          ))
        )}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full bg-red-100 text-red-600 py-3 rounded-xl font-bold active:scale-95"
      >
        Logout
      </button>

    </div>
  );
}