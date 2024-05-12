import React, { useState } from "react";
import "./index.css";
import "./styles.css";
import BouncingZip from "./components/BouncingZip";
import UncompressWindow from "./components/UncompressWindow";
import PortfolioContent from "./components/PortfolioContent";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!isUncompressed && !isUncompressing && (
        <BouncingZip onClick={handleZipClick} />
      )}
      {isUncompressing && <UncompressWindow onComplete={() => {}} />}
      {isUncompressed && <PortfolioContent />}
    </div>
  );
};

export default App;
