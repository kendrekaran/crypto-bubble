"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import './bubble.css';

interface CryptoData {
  Symbol: string;
  Risk: number;
}

interface BitcoinRiskChartProps {
  onBubbleClick: (crypto: CryptoData) => void;
}

export default function BitcoinRiskChart({ onBubbleClick }: BitcoinRiskChartProps) {
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState("Top 100");
  const [showRankDropdown, setShowRankDropdown] = useState(false);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://3.75.231.25/dex_risks");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Assuming the API returns an array of { Symbol, Risk }
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter the data based on the selected range
  const filteredData = useMemo(() => {
    const start = selectedRange === "Top 100" ? 0 : parseInt(selectedRange.split(" - ")[0]) - 1;
    const end = selectedRange === "Top 100" ? 100 : parseInt(selectedRange.split(" - ")[1]);
    return data.slice(start, end);
  }, [data, selectedRange]);

  // Calculate positions based on risk levels
  const bubblePositions = useMemo(() => {
    return filteredData.map((item) => {
      const y = 100 - item.Risk;
      const x = Math.random() * 80 + 10;
      return { x, y };
    });
  }, [filteredData]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="relative">
      {/* Dropdown */}
      <div className="relative mb-4">
        <button
          onClick={() => setShowRankDropdown(!showRankDropdown)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
        >
          {selectedRange}
          <ChevronDown size={20} />
        </button>

        {showRankDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
            <div className="p-2 space-y-1">
              {["Top 100", "101 - 200", "201 - 300", "301 - 400", "401 - 500", "501 - 600"].map((range) => (
                <label
                  key={range}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedRange(range);
                    setShowRankDropdown(false);
                  }}
                >
                  <input
                    type="radio"
                    name="rank"
                    className="text-blue-500"
                    checked={selectedRange === range}
                    onChange={() => setSelectedRange(range)}
                  />
                  <span className="text-white">{range}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="custom-div">
        <div className="absolute -left-[30px] top-0 h-full flex flex-col justify-between text-sm">
          <span>100-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>80 -</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>60 -</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>40 -</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>20 -</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>
          <span>00 -</span>
        </div>

        <div className="absolute left-8 top-2 text-lg font-semibold">Risk Levels</div>
        <div className="absolute bottom-2 right-4 text-emerald-300 font-medium">UNDERVALUED</div>
        <div className="absolute top-2 right-4 text-red-300 font-medium">OVERVALUED</div>

        {bubblePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          >
            <div className="relative w-20 h-20 p-2">
              <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm shadow-lg transform scale-100 transition-transform hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
              </div>

              <div onClick={() => onBubbleClick(filteredData[i])} className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <span>{filteredData[i].Symbol}</span>
                </div>
                <div className="text-sm font-bold">{filteredData[i].Risk}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
