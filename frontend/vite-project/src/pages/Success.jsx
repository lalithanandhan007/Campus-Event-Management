import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import BackButton from "../components/BackButton";

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();

  const event = location.state?.event;
  const seat = location.state?.seat;

  // 🚨 Prevent empty QR
  if (!event || !seat) {
    return (
      <div className="p-6 text-center text-gray-800">
        <p>Invalid booking data ❌</p>
        <button
          onClick={() => navigate("/home")}
          className="mt-3 bg-pink-500 text-white px-4 py-2 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }

  // ✅ Ticket data
  const ticketData = {
    title: event.title,
    date: event.date,
    time: event.time,
    venue: event.venue,
    seat: seat,
  };

  const encoded = encodeURIComponent(JSON.stringify(ticketData));

  const baseURL = window.location.origin;
  const qrURL = `${baseURL}/#/ticket?data=${encoded}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 relative text-gray-800">

      {/* 🔙 Back */}
      <BackButton />

      {/* 🎟 CARD */}
      <div className="bg-white p-6 rounded-xl text-center w-80 shadow-lg text-gray-800">

        {/* TITLE */}
        <h2 className="text-lg font-bold mb-2 text-gray-900">
          🎉 Booking Confirmed
        </h2>

        {/* SUBTEXT */}
        <p className="text-sm text-gray-600 mb-4">
          Your seat has been booked!
        </p>

        {/* QR */}
        <div className="flex justify-center mb-4">
          <QRCodeCanvas value={qrURL} size={150} />
        </div>

        {/* EVENT TITLE */}
        <h3 className="font-bold text-gray-900">
          {event.title}
        </h3>

        {/* DETAILS */}
        <p className="text-sm text-gray-600">
          {event.date} • {event.venue}
        </p>

        {/* INFO */}
        <p className="text-sm mt-2 text-gray-500">
          📱 Scan QR Code for full ticket details
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/home")}
          className="mt-4 w-full bg-pink-500 text-white py-2 rounded-xl active:scale-95 transition hover:bg-pink-600"
        >
          Go Home
        </button>

      </div>
    </div>
  );
}