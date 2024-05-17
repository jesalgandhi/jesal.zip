import React, { useState } from "react";
import "./index.css";
import "./styles.css";
import BouncingZip from "./components/BouncingZip";
import UncompressWindow from "./components/UncompressWindow";
import ReadMeWindow from "./components/ReadMeWindow";
import ImageWindow from "./components/ImageWindow";
import ReactiveBackground from "./components/ReactiveBackground";
import { motion } from "framer-motion";

const App = () => {
  const [isUncompressing, setIsUncompressing] = useState(false);
  const [isUncompressed, setIsUncompressed] = useState(false);

  const handleZipClick = () => {
    setIsUncompressing(true);
    setTimeout(() => {
      setIsUncompressing(false);
      setIsUncompressed(true);
    }, 3000);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {isUncompressing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0"
        >
          <ReactiveBackground />
        </motion.div>
      )}
      {isUncompressed && (
        <div className="absolute inset-0">
          <ReactiveBackground />
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        {!isUncompressed && !isUncompressing && (
          <BouncingZip onClick={handleZipClick} />
        )}
        {isUncompressing && <UncompressWindow onComplete={() => {}} />}
        {isUncompressed && (
          <>
            <ReadMeWindow />
            <ImageWindow />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
