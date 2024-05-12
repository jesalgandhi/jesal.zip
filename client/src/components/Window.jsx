import React from "react";
import { motion } from "framer-motion";

const Window = ({ width, height, title, children }) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg ${width} ${height} overflow-hidden cursor-default`}
      drag
      dragMomentum={false}
      dragConstraints={{
        top: -window.innerHeight,
        left: -window.innerWidth,
        right: window.innerWidth,
        bottom: window.innerHeight,
      }}
      onTap={() => console.log("Tapped")}
      onTapStart={() => console.log("Tap Start")}
      onTapEnd={() => console.log("Tap End")}
      onDrag={() => console.log("Dragging")}
      onDragStart={() => console.log("Drag Start")}
      onDragEnd={() => console.log("Drag End")}
    >
      <div className="flex items-center justify-between bg-gray-800 text-white px-3 py-1 rounded-t-lg cursor-move">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm">{title}</span>
        <div></div>
      </div>
      <div className="bg-white p-4 h-full">{children}</div>
    </motion.div>
  );
};

export default Window;
