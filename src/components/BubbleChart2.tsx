"use client";

import { useMemo } from "react";
import './bubble.css'

// Generate random positions for bubbles
function generateBubblePositions(count: number) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
  }));
}

export default function BitcoinRiskChart() {
    const bubblePositions = useMemo(() => generateBubblePositions(15), []);
  
    return (
        <div className="custom-div">
        {/* Y-axis labels */}
        <div className="absolute -left-[30px] pb-5 h-full flex flex-col justify-between text-sm">
          <span>100-</span>
          <span>80 -</span>
          <span>60 -</span>
          <span>40 -</span>
          <span>20 -</span>
          <span>00 -</span>
        </div>
  
        {/* Chart title */}
        <div className="absolute left-8 top-2 text-lg font-semibold">Risk Levels</div>
  
        {/* Value labels */}
        <div className="absolute bottom-2 right-4 text-emerald-300 font-medium">UNDERVALUED</div>
        <div className="absolute top-2 right-4 text-red-300 font-medium">OVERVALUED</div>
  
        {/* Bitcoin bubbles */}
        {bubblePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          >
            <div className="relative w-full h-full">
              {/* 3D Bubble effect */}
              <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm hite/20 shadow-lg transform scale-100 transition-transform hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
              </div>
  
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1 text-sm font-medium">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-orange-500"
                    fill="currentColor"
                  >
                    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.974.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                  </svg>
                  <span>BITCOIN</span>
                </div>
                <div className="text-lg font-bold">-21%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }