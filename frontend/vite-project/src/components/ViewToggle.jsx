import React from "react";
import { useView } from "../context/useView";   // ✅ FIXED

export default function ViewToggle() {
  const { view, setView } = useView();

  const btnClass = (type) =>
    `px-3 py-1 rounded ${
      view === type ? "bg-blue-500" : "bg-gray-700"
    }`;

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      <button onClick={() => setView("desktop")} className={btnClass("desktop")}>
        Desktop
      </button>
      <button onClick={() => setView("tablet")} className={btnClass("tablet")}>
        Tablet
      </button>
      <button onClick={() => setView("mobile")} className={btnClass("mobile")}>
        Mobile
      </button>
    </div>
  );
}