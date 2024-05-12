import React from "react";
import Window from "./Window";

const PortfolioContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Window width="w-4/5" height="h-4/5" title="My Portfolio">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        {/* Add your portfolio content here */}
      </Window>
    </div>
  );
};

export default PortfolioContent;
