import React from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d5def5] px-4">
      <div className="w-full max-w-md md:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Sign In Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 md:p-12 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Get Started
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Have an account?{" "}
            <a href="#" className="text-[#6643b5] font-medium">
              Sign In
            </a>
          </p>

          {/* Google Sign-In Button - Centered */}
          <div className="mt-6 flex justify-center">
            <button className="w-full max-w-xs flex items-center justify-center gap-3 border border-gray-300 rounded-3xl py-2 px-4 text-gray-700 hover:bg-[#d5def5] transition">
              <FaGoogle size={20} color="#6643b5" />
              <span className="text-center">Sign up with Google</span>
            </button>
          </div>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-500 text-center mt-6">
            By proceeding you acknowledge that you have read, understood, and
            agree to our{" "}
            <a href="#" className="text-[#6643b5] font-medium">
              Terms and Conditions
            </a>
            .
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex items-center justify-center bg-[#6643b5] p-6"
        >
          <img
            src="/images/signin.jpg" // Replace with your image path
            alt="Sign In Illustration"
            className="w-full h-auto max-h-96 object-contain rounded-md shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
