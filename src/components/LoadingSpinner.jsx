import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const LoadingSpinner = ({ onComplete }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 3 } }}
        className="flex bg-[#430f58] justify-center items-center min-h-screen"
      >
        <Lottie animationData={loadingAnimation} loop={true} className="w-16 h-16 md:w-64 md:h-64" />
        <Lottie animationData={loadingAnimation} loop={true} className="w-16 h-16 md:w-64 md:h-64" />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingSpinner;
