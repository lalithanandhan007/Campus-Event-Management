import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useView } from "./context/useView";        // ✅ FIXED
import ViewToggle from "./components/ViewToggle";

import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Register from "./pages/Register";
import Success from "./pages/Success";
import RoleSelect from "./pages/RoleSelect";
import AdminDashboard from "./pages/AdminDashboard";
import Ticket from "./pages/Ticket";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  const { view } = useView();

  const getWidth = () => {
    if (view === "mobile") return "max-w-sm mx-auto";
    if (view === "tablet") return "max-w-3xl mx-auto";
    return "w-full";
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <ViewToggle />

      <div className={`${getWidth()} transition-all duration-300`}>
        <Router>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/role" element={<RoleSelect />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/event" element={<EventDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;