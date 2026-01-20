import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      // Same page → scroll
      const el = document.getElementById("about");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Different page → just navigate
      navigate("/about");
    }
  };

  return (
    <nav className="absolute z-60 w-full bg-transparent py-1">
      <div className="flex justify-between items-center w-full mx-auto p-2 text-gray-300">

        <Link to="/" className="flex items-center">
          <img src="./logo.png" alt="Logo" className="w-15 rounded-xl" />
        </Link>

        <ul className="flex gap-6 md:text-lg text-sm">
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={handleAboutClick}
          >
            About
          </li>

          <li className="cursor-pointer hover:text-white transition">
            <Link to="/collections">Collections</Link>
          </li>

          <li className="cursor-pointer hover:text-white transition">
            <Link to="/cart">Cart</Link>
          </li>

          <li className="cursor-not-allowed hover:text-white transition">
            Contact
          </li>
        </ul>

        <button className="rounded-full cursor-not-allowed py-1 px-3 bg-gray-900 border-2 border-gray-500 hover:bg-gray-600 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
};
