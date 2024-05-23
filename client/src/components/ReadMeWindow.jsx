import React from "react";
import Window from "./Window";
import Typewriter from "typewriter-effect";
import "../styles.css";

const ReadMeWindow = () => {
  const lines = [
    "software engineer",
    "music lover",
    "tv/movie enthusiast",
    "lifelong learner",
  ];

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen">
      <Window width="w-2/5" height="h-2/10" title="📄 jesal.txt">
        <p className="font-mono text-lg">Hi, my name is</p>
        <p className="font-title font-bold text-2xl text-blue-500">
          JESAL GANDHI
        </p>
        <div className="font-mono text-lg">
          <Typewriter
            options={{
              strings: lines,
              autoStart: true,
              loop: true,
              deleteSpeed: 60,
              delay: 75,
            }}
          />
        </div>
      </Window>
    // </div>
  );
};

export default ReadMeWindow;
