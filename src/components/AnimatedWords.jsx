import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedWords() {
  const words = ["Instagram Reels", "Snapchat Spotlight","Youtube Shorts","Tiktok","Short Form Videos"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-40 text-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={words[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold  text-[#430f58]"
        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedWords;