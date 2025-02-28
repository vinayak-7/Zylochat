import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Define paths where the menu button should be hidden
  const hiddenPaths = ["/dashboard", "/automations", "/automations/new"];

  const isActive = (path) =>
    location.pathname === path
      ? "relative text-[#430f58] font-extrabold before:absolute before:inset-0 before:animate-pulse before:bg-[#8594e4] before:blur-lg"
      : "hover:text-[#8594e4] font-extrabold transition duration-300";

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false); // Close menu on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed w-full z-50 transition-all duration-300 bg-[#d5def5]/70 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <img src="/images/zylochat.png" alt="ZyloChat" className="h-10 w-10" />
                <span className="ml-3 text-2xl font-bold text-[#430f58]">ZyloChat</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10 text-lg font-semibold mx-auto">
              {["Home", "About", "Brand", "Dashboard"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`relative text-[#430f58] ${isActive(
                    item === "Home" ? "/" : `/${item.toLowerCase()}`
                  )}`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Sign In Button */}
            <Link
              to="/signin"
              className="hidden md:flex bg-gradient-to-r from-[#430f58] to-[#8594e4] text-white px-5 py-2 rounded-full shadow-lg hover:shadow-[#8594e4]/50 transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Link>

            {/* Mobile Menu Button (Hidden on Dashboard, Automations, New Automation) */}
            {!hiddenPaths.includes(location.pathname) && (
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(true)} className="p-2 text-[#430f58] hover:text-[#8594e4]">
                  <Menu className="h-7 w-7" />
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#430f58] bg-opacity-95 flex flex-col items-center justify-center z-50 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#8594e4]"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              {["Home", "About", "Brand", "Dashboard"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`relative text-white ${isActive(
                    item === "Home" ? "/" : `/${item.toLowerCase()}`
                  )}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/signin"
                className="text-3xl font-bold bg-gradient-to-r from-[#430f58] to-[#8594e4] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-[#8594e4]/50 transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
