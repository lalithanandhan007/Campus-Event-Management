import React, { useState } from "react";

// MUI Time Picker
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function AdminDashboard() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    venue: "",
    description: "",
    category: "",
    image: "",
  });

  const [time, setTime] = useState(null);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEvent({ ...event, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (
      !event.title ||
      !event.date ||
      !time ||
      !event.venue ||
      !event.category
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newEvent = {
      ...event,
      time: time.format("hh:mm A"),
    };

    const existing = JSON.parse(localStorage.getItem("events")) || [];
    localStorage.setItem("events", JSON.stringify([...existing, newEvent]));

    alert("Event Created Successfully 🎉");

    setEvent({
      title: "",
      date: "",
      time: "",
      venue: "",
      description: "",
      category: "",
      image: "",
    });
    setTime(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Admin Dashboard 👨‍💼
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto space-y-4">

        {/* TITLE */}
        <input
          name="title"
          value={event.title}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-purple-400"
        />

        {/* DATE */}
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-purple-400"
        />

        {/* TIME PICKER */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select Time"
            value={time}
            onChange={(newValue) => setTime(newValue)}
          />
        </LocalizationProvider>

        {/* VENUE */}
        <input
          name="venue"
          value={event.venue}
          onChange={handleChange}
          placeholder="Venue"
          className="w-full p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-purple-400"
        />

        {/* CATEGORY */}
        <select
          name="category"
          value={event.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-purple-400"
        >
          <option value="">Select Category</option>
          <option value="Technical">Technical</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
          <option value="Workshops">Workshops</option>
        </select>

        {/* DESCRIPTION */}
        <textarea
          name="description"
          value={event.description}
          onChange={handleChange}
          placeholder="Event Description"
          className="w-full p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-purple-400"
        />

        {/* IMAGE */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-3 border rounded-xl text-black bg-white"
        />

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold active:scale-95 hover:bg-purple-700 transition"
        >
          Create Event
        </button>

      </div>
    </div>
  );
}