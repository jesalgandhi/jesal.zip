import React, { useState } from "react";
import "./index.css";
import "./styles.css";
import BouncingZip from "./components/BouncingZip";
import UncompressWindow from "./components/UncompressWindow";
import PortfolioContent from "./components/PortfolioContent";
import ReactiveBackground from "./components/ReactiveBackground";
import Window from "./components/Window";

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
      {isUncompressed && <ReactiveBackground />}
      <div className="absolute inset-0 flex items-center justify-center">
        {!isUncompressed && !isUncompressing && (
          <BouncingZip onClick={handleZipClick} />
        )}
        {isUncompressing && <UncompressWindow onComplete={() => {}} />}
        {isUncompressed && <PortfolioContent />}
      </div>
    </div>
  );
};

export default App;
