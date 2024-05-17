import React from "react";
import Window from "./Window";

const ReadMeWindow = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Window width="w-2/5" height="h-2/5" title="README.md">
        <p className=" font-bold">Hi! My name is Jesal Gandhi</p>
      </Window>
    </div>
  );
};

export default ReadMeWindow;
