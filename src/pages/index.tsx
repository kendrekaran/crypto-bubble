"use client";

import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import BitcoinRiskChart from '../components/BubbleChart2';

export default function Home() {
  const [selectedRange, setSelectedRange] = useState("Top 100");

  const handleRangeChange = (range: string) => {
    setSelectedRange(range);
  };

  const handleBubbleClick = (crypto: CryptoData) => {
    // Show the Wget component with moralisLink
    return <Wget onClose={() => {/* handle close */}} moralisLink={crypto.moralis} />;
  };

  return (
    <div>
      <Navbar 
        selectedRange={selectedRange}
        onRangeChange={handleRangeChange}
      />
      <BitcoinRiskChart 
        selectedRange={selectedRange}
        onBubbleClick={handleBubbleClick}
      />
    </div>
  );
}
