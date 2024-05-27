import React from "react";
import Window from "./Window";
import headshot from "../assets/headshot.png";

const ImageWindow = () => {
  return (
    <Window width="2/8" title="📷 me.png">
      <img src={headshot} alt="jesal headshot" />
    </Window>
  );
};

export default ImageWindow;
