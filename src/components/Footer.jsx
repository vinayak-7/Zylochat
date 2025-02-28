import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy" },
];

export function FooterFancy() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div ref={footerRef} className="relative">
      {/* Wave SVG Effect */}
      <svg
        className="absolute top-[-1px] left-0 w-full text-[#430f58]"
        viewBox="0 0 1440 100"
      >
        <path
          fill="currentColor"
          d="M0,64L48,58.7C96,53,192,43,288,32C384,21,480,11,576,21.3C672,32,768,64,864,69.3C960,75,1056,53,1152,37.3C1248,21,1344,11,1392,5.3L1440,0V100H0Z"
        />
      </svg>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
        transition={{ duration: 1 }}
        className="bg-[#430f58] text-white py-8 relative z-10 mt-auto" // Added mt-auto
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between">
          {/* Brand Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/zylochat.png"
              alt="ZyloChat"
              className="h-10 w-10 animate-pulse"
            />
            <span className="text-xl font-extrabold tracking-wide text-white">
              ZyloChat
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex space-x-6 mt-4 pt-2 md:mt-0">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-300 hover:text-[#ff914d] transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-1">
          &copy; {year} ZyloChat. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}

export default FooterFancy;
