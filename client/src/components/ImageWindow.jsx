import React from "react";
import Window from "./Window";
import headshot from "../assets/headshot.png";

const ImageWindow = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = headshot;
    link.download = "jesal.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Window width="min-w-48 max-w-xs" title="jesal.png">
        <img src={headshot} alt="jesal headshot" />
        <div>
          <p className="text-gray-500 text-xs text-center">Size: 3.8 MB</p>
          <p className="text-gray-500 text-xs text-center">
            <button onClick={handleDownload}>
              Download Uncompressed Image
            </button>
          </p>
        </div>
      </Window>
    </div>
  );
};

export default ImageWindow;
