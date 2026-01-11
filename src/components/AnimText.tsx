import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimText = () => {
  const alias = [
    "devdiagon",
    "Frektip",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % alias.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [alias.length]);

  return (
    <div className="flex items-center text-4xl font-bold text-gray-800">
      <span className="mr-2">Hi there, I'm {" "}</span>
      <div className="relative inline-flex items-center min-w-[200px] h-[1em]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 text-red-500"
          >
            {alias[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}