import  { useState } from 'react';
import { Search, ChevronDown, Globe2, Paperclip } from 'lucide-react';

export const Navbar = () => {
  const [showRankDropdown, setShowRankDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#0a0a0a]">
      <div className="flex items-center justify-between p-4 bg-gray-800/50">
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/znbC3SV/Group.jpg"
            alt="Coinchart.fun"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-2xl font-bold text-white">Coinchart.fun</span>
        </div>

        

        <div className="flex items-center gap-4">
        <div className="relative max-w-xl w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Crypto Currencies"
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg
              border border-gray-700 focus:border-blue-500 focus:outline-none
              placeholder-gray-500"
          />
        </div>
          <div className="relative">
            <button 
              onClick={() => setShowRankDropdown(!showRankDropdown)}
              className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
            >
              Top 100
              <ChevronDown size={20} />
            </button>
            
            {showRankDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
                <div className="p-2 space-y-1">
                  <label className="flex items-center text-sm gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                    <input type="radio" name="rank" className="text-blue-500" defaultChecked />
                    <span className="text-white">Top 100</span>
                  </label>
                  <label className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                    <input type="radio" name="rank" className="text-blue-500" />
                    <span className="text-white">101 - 200</span>
                  </label>
                  <label className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                    <input type="radio" name="rank" className="text-blue-500" />
                    <span className="text-white">201 - 300</span>
                  </label>
                  <label className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                    <input type="radio" name="rank" className="text-blue-500" />
                    <span className="text-white">301 - 400</span>
                  </label>
                  <label className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                    <input type="radio" name="rank" className="text-blue-500" />
                    <span className="text-white">401 - 500</span>
                  </label>
                  <label className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                    <input type="radio" name="rank" className="text-blue-500" />
                    <span className="text-white">501 - 600</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          <button className="flex text-sm items-center gap-2 text-gray-300 hover:text-white">
            Need API Access?
            <Paperclip size={20} className="text-blue-400" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between p-4 bg-black text-sm">
        {/* Left Section */}
        <div className="flex items-center gap-12">
          {/* Strategies */}
          <div className="flex items-center gap-4">
            <span className="text-white">Strategies :</span>
            <button 
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30"
            >
              Short-Term
              <span className="text-sm">⚡</span>
            </button>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-green-500/20 text-green-500 hover:bg-green-500/30">
              Long-Term
            </button>
          </div>

          {/* Indicator */}
          <div className="flex items-center gap-4">
            <span className="text-white">Indicator</span>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30">
              Short-Term
              <span className="text-sm">⚡</span>
            </button>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-green-500/20 text-green-500 hover:bg-green-500/30">
              Long-Term
            </button>
            <button className="px-2 py-1.5 rounded-lg bg-green-500/20 text-green-500 hover:bg-green-500/30">
              RSI
            </button>
          </div>
        </div>

        {/* Right Section - Exchange Buttons */}
        <div className="flex items-center gap-4">
        <span className="text-white">Token :</span>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30">
              AI Agent
              <span className="text-base">⚡</span>
            </button>
          <button className="px-2 py-1.5 rounded-lg bg-green-500/20 text-green-500 hover:bg-green-500/30">
            Binance
          </button>
          <button className="px-2 py-1.5 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30">
            Bybit
          </button>
        </div>

        {/* Filter Dropdown */}
        {showFilterDropdown && (
          <div className="absolute left-4 top-32 w-72 bg-gray-800 rounded-lg shadow-lg z-50 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Filter</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span>Avoid potential traps</span>
              </label>
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span>Avoid too bullish tokens</span>
              </label>
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span>Avoid Market Structure Breaks</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};