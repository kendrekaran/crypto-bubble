"use client";

import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import BitcoinRiskChart from '../components/BubbleChart2';

export default function Home() {
  const [selectedRange, setSelectedRange] = useState("Top 100");

  const handleRangeChange = (range: string) => {
    setSelectedRange(range);
  };

  return (
    <div>
      <Navbar 
        selectedRange={selectedRange}
        onRangeChange={handleRangeChange}
      />
      <BitcoinRiskChart 
        selectedRange={selectedRange}
        onBubbleClick={(crypto) => {
          // Handle bubble click
        }}
      />
    </div>
  );
}
