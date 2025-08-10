// src/components/AppBar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Info, LogIn, LogOut, Bell, Ticket, Users } from "lucide-react";

export default function AppBar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth state later

  const mainLinks = [
    { to: "/", icon: <Home size={22} />, label: "Home" },
    { to: "/schedule", icon: <Calendar size={22} />, label: "Schedule" },
    { to: "/events", icon: <Users size={22} />, label: "Events" },
  ];

  const secondaryLinks = [
    { to: "/about", icon: <Info size={22} />, label: "About" },
    isLoggedIn
      ? {
          to: "/logout",
          icon: <LogOut size={22} />,
          label: "Logout",
          onClick: () => {
            // real logout function here
            setIsLoggedIn(false);
          },
        }
      : {
          to: "/signin",
          icon: <LogIn size={22} />,
          label: "Sign In",
        },
  ];

  const renderButton = ({ to, icon, label, onClick }) => (
    <Link
      key={label}
      to={to}
      onClick={onClick}
      className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
        location.pathname === to
          ? "bg-purple-600 text-white"
          : "bg-gray-800 text-gray-400 hover:-translate-y-0.5 hover:bg-[#d6b3ff] hover:text-gray-900"
      }`}
    >
      {icon}
      <span className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity duration-200">
        {label}
        <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-black transform rotate-45"></span>
      </span>
    </Link>
  );

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 p-3 rounded-full flex items-center space-x-3 shadow-lg border border-gray-700 z-50">
      {/* Main nav buttons */}
      {mainLinks.map(renderButton)}

      {/* Separator */}
      <div className="w-px h-8 bg-gray-600 mr-3 ml-1"></div>

      {/* Secondary nav buttons */}
      {secondaryLinks.map(renderButton)}
    </div>
  );
}