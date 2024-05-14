import React, { useEffect, useRef } from "react";
import Sketch from "react-p5";

const colors = [
  [6, 141, 157], // blue-munsell
  [83, 89, 154], // ultra-violet
  [109, 157, 197], // air-superiority-blue
  [128, 222, 217], // tiffany-blue
  [174, 236, 239], // celeste
];

const ReactiveBackground = () => {
  const step = 0.1; // Increase step for more blocky effect
  const speed = 0.02; // Increase speed for more dynamic effect
  const intensity = 20; // Increase intensity for more pronounced artifacts
  const scale = 50; // Block size

  const widthRef = useRef(window.innerWidth);
  const heightRef = useRef(window.innerHeight);
  const rowsRef = useRef(Math.floor(heightRef.current / scale) + 2);
  const colsRef = useRef(Math.floor(widthRef.current / scale) + 2);
  let toff = 0;

  const setScale = () => {
    widthRef.current = window.innerWidth;
    heightRef.current = window.innerHeight;
    rowsRef.current = Math.floor(heightRef.current / scale) + 2;
    colsRef.current = Math.floor(widthRef.current / scale) + 2;
  };

  const setup = (p5, canvasParentRef) => {
    setScale();
    p5.createCanvas(widthRef.current, heightRef.current).parent(
      canvasParentRef
    );
    p5.frameRate(18);

    window.addEventListener("resize", () => {
      setScale();
      p5.resizeCanvas(widthRef.current, heightRef.current);
    });
  };

  const draw = (p5) => {
    p5.clear();

    for (let y = 0; y <= rowsRef.current; y++) {
      for (let x = 0; x <= colsRef.current; x++) {
        const xoff = x * step;
        const yoff = y * step;
        const r = p5.noise(xoff, yoff, toff) * intensity;
        const color =
          colors[Math.floor(p5.map(r, 0, intensity, 0, colors.length))];

        p5.push();
        p5.noStroke();
        p5.translate((x - 1) * scale, (y - 1) * scale);
        p5.fill(color[0], color[1], color[2], 100);
        p5.rect(0, 0, scale, scale);
        p5.pop();
      }
    }

    toff += speed;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ReactiveBackground;
