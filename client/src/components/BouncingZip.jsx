import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import winrarIcon from "../assets/winrar_crop.png";

const BouncingZip = ({ onClick }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center h-screen"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.25 }}
      style={{ cursor: "pointer", width: 100, height: 100 }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.img
        src={winrarIcon}
        alt="Zip File"
        className="w-full h-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <div className="pt-2">
        <motion.div
          className="border border-blue-500 rounded-full px-2 text-blue-500"
          whileHover={{
            backgroundColor: "rgba(59, 130, 246)",
            color: "white",
          }}
          whileTap={{ backgroundColor: "rgba(59, 130, 246, 0.7)" }}
        >
          <motion.p className="text-black" whileHover={{ color: "white" }}>
            jesal.zip
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BouncingZip;
