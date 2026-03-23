import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const role = params.get("role");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ NEW

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // ✅ ADMIN LOGIN
    if (role === "admin") {
      if (email === "admin@gmail.com" && password === "1234") {
        navigate("/admin");
      } else {
        setError("Invalid admin credentials");
      }
    }

    // ✅ USER LOGIN
    else {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        setError("No account found. Please register.");
        return;
      }

      if (
        email === savedUser.email &&
        password === savedUser.password
      ) {
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-6">
      
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
        
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          {role === "admin" ? "Admin Login 👨‍💼" : "User Login 👤"}
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border rounded-xl outline-none text-black bg-white focus:ring-2 focus:ring-pink-400"
        />

        {/* PASSWORD WITH EYE TOGGLE */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl outline-none text-black bg-white focus:ring-2 focus:ring-pink-400 pr-10"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white py-3 rounded-xl font-bold active:scale-95 transition hover:bg-pink-600"
        >
          Login
        </button>

        {/* REGISTER */}
        <p className="text-center text-sm mt-4 text-gray-700">
          {role === "admin" ? (
            "Admin access only"
          ) : (
            <>
              <span className="font-medium">New user?</span>{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-pink-600 cursor-pointer font-semibold hover:underline"
              >
                Register Now
              </span>
            </>
          )}
        </p>

      </div>
    </div>
  );
}