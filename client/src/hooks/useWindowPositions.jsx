import { useState, useEffect } from "react";

const useWindowPositions = () => {
  const [positions, setPositions] = useState([]);

  const calculatePositions = () => {
    const width = window.innerWidth;

    let newPositions;

    if (width > 800) {
      // Large screens: staggered positions
      newPositions = [
        { top: "10%", left: "10%" },
        { top: "20%", left: "40%" },
        { top: "30%", left: "70%" },
      ];
    } else {
      // Small screens: one after the other
      newPositions = [
        { top: "10%", left: "10%" },
        { top: "30%", left: "10%" },
        { top: "50%", left: "10%" },
      ];
    }

    setPositions(newPositions);
  };

  useEffect(() => {
    calculatePositions();
    window.addEventListener("resize", calculatePositions);

    return () => {
      window.removeEventListener("resize", calculatePositions);
    };
  }, []);

  return positions;
};

export default useWindowPositions;
