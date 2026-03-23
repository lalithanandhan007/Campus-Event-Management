import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Select Login Type</h1>

      <div className="space-y-4 w-full max-w-sm">

        <button
          onClick={() => navigate("/login?role=user")}
          className="w-full py-3 bg-white text-pink-600 rounded-xl font-bold"
        >
          User Login 👤
        </button>

        <button
          onClick={() => navigate("/login?role=admin")}
          className="w-full py-3 bg-white text-purple-600 rounded-xl font-bold"
        >
          Admin Login 👨‍💼
        </button>

      </div>

    </div>
  );
}