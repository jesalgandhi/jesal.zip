import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Window from "./Window";

const UncompressWindow = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-opacity-75"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Window width="w-96" height="h-auto" title="WinRar(UNLICENSED)">
        <p>Expanding “jesal.zip”...</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <motion.div
            className="bg-blue-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }} // Sync with the uncompress time
          ></motion.div>
        </div>
        <button className="mt-2 bg-gray-300 text-gray-800 px-4 py-1 rounded">
          Cancel
        </button>
      </Window>
    </motion.div>
  );
};

export default UncompressWindow;
