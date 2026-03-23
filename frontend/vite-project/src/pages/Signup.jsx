import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    department: "",
    year: "",
    agree: false,
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isMatch =
    form.password &&
    form.confirm &&
    form.password === form.confirm;

  const isValid =
    form.name &&
    form.email &&
    form.department &&
    form.year &&
    isMatch &&
    form.agree;

  const handleSignup = () => {
    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      department: form.department,
      year: form.year,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/login?role=user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-6">

      <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Create Account 👤
        </h2>

        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-pink-400"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-pink-400"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* DEPARTMENT */}
        <select
          className="w-full mb-3 p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-pink-400"
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="Polymer">Polymer</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
        </select>

        {/* YEAR */}
        <select
          className="w-full mb-3 p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-pink-400"
          value={form.year}
          onChange={(e) =>
            setForm({ ...form, year: e.target.value })
          }
        >
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        {/* PASSWORD */}
        <div className="relative mb-3">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-pink-400 pr-10"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative mb-3">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-xl text-black bg-white focus:ring-2 focus:ring-pink-400 pr-10"
            onChange={(e) =>
              setForm({ ...form, confirm: e.target.value })
            }
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showConfirm ? "🙈" : "👁️"}
          </span>
        </div>

        {/* MATCH MESSAGE */}
        {form.confirm && (
          <p className={`text-xs mb-2 ${isMatch ? "text-green-500" : "text-red-500"}`}>
            {isMatch ? "Passwords match ✔" : "Passwords do not match ❌"}
          </p>
        )}

        {/* TERMS */}
        <label className="flex items-center text-xs mb-3 text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) =>
              setForm({ ...form, agree: e.target.checked })
            }
          />
          I agree to Terms & Conditions
        </label>

        {/* BUTTON */}
        <button
          disabled={!isValid}
          onClick={handleSignup}
          className={`w-full py-3 rounded-xl text-white font-bold transition ${
            isValid
              ? "bg-pink-500 hover:bg-pink-600 active:scale-95"
              : "bg-gray-400"
          }`}
        >
          Register
        </button>

        {/* LOGIN */}
        <p className="text-center text-sm mt-4 text-gray-700">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login?role=user")}
            className="text-pink-600 cursor-pointer font-semibold hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}