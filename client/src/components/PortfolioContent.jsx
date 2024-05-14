import React from "react";
import Window from "./Window";

const PortfolioContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Window width="w-2/5" height="h-2/5" title="My Portfolio">
        <h1 className="text-3xl font-bold">README.md</h1>
        {/* Add your portfolio content here */}
      </Window>
    </div>
  );
};

export default PortfolioContent;
