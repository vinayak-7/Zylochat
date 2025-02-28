import React, { useState, useEffect } from "react";
import { FaHome, FaChartBar, FaRobot, FaBars, FaTimes, FaInfoCircle, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      // Show button again after 500ms of no scrolling
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger Button (Hidden When Sidebar is Open or While Scrolling) */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-2 right-4 z-[100] p-3 bg-[#6643b5] text-white shadow-lg rounded-full transition-opacity duration-300"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
      )}

      {/* Full-Screen Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-[#d5def5] z-[90] md:z-0 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64 md:h-full md:shadow-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={28} />
        </button>

        <h1 className="text-2xl font-bold mb-8 text-[#430f58]">ZyloChat</h1>
        <nav>
          <ul className="space-y-6">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="block text-xl text-gray-700 hover:text-[#6643b5]"
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="inline-block mr-2" /> Home
              </Link>
            </li>

            {/* Dashboard */}
            <li>
              <Link
                to="/dashboard"
                className="block text-xl text-gray-700 hover:text-[#6643b5]"
                onClick={() => setIsOpen(false)}
              >
                <FaChartBar className="inline-block mr-2" /> Dashboard
              </Link>
            </li>

            {/* Automations */}
            <li>
              <Link
                to="/automations"
                className="block text-xl text-gray-700 hover:text-[#6643b5]"
                onClick={() => setIsOpen(false)}
              >
                <FaRobot className="inline-block mr-2" /> Automations
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                className="block text-xl text-gray-700 hover:text-[#6643b5]"
                onClick={() => setIsOpen(false)}
              >
                <FaInfoCircle className="inline-block mr-2" /> About
              </Link>
            </li>

            {/* Brand */}
            <li>
              <Link
                to="/brand"
                className="block text-xl text-gray-700 hover:text-[#6643b5]"
                onClick={() => setIsOpen(false)}
              >
                <FaTags className="inline-block mr-2" /> Brand
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay when Sidebar is Open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[80] md:z-0 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
