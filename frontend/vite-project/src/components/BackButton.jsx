import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white shadow-lg active:scale-90 transition"
    >
      ←
    </button>
  );
}