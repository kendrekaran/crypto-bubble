import  { useState } from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import { FaTelegram } from "react-icons/fa";


interface Strategy {
  id: string;
  name: string;
  type: 'short' | 'long' | 'rsi';
}

interface Token {
  id: string;
  name: string;
  type: 'ai' | 'binance' | 'bybit';
}

export const Navbar = () => {
  const [showRankDropdown, setShowRankDropdown] = useState(false);
  const [showFilterDropdown] = useState(false);
  const [showStrategySelector, setShowStrategySelector] = useState(false);
  const [showTokenSelector, setShowTokenSelector] = useState(false);

  const [selectedStrategies, setSelectedStrategies] = useState<Strategy[]>([
    { id: '1', name: 'Short-Term', type: 'short' },
    { id: '2', name: 'Long-Term', type: 'long' }
  ]);

  const [selectedTokens, setSelectedTokens] = useState<Token[]>([
    { id: '1', name: 'Binance', type: 'binance' },
    { id: '2', name: 'Bybit', type: 'bybit' }
  ]);

  const allStrategies: Strategy[] = [
    { id: '1', name: 'Short-Term', type: 'short' },
    { id: '2', name: 'Long-Term', type: 'long' },
    { id: '3', name: 'RSI', type: 'rsi' }
  ];

  const allTokens: Token[] = [
    { id: '1', name: 'Binance', type: 'binance' },
    { id: '2', name: 'Bybit', type: 'bybit' },
    { id: '3', name: 'AI Agent', type: 'ai' }
  ];

  const toggleStrategy = (strategy: Strategy) => {
    if (selectedStrategies.find(s => s.id === strategy.id)) {
      setSelectedStrategies(selectedStrategies.filter(s => s.id !== strategy.id));
    } else {
      setSelectedStrategies([...selectedStrategies, strategy]);
    }
  };

  const toggleToken = (token: Token) => {
    if (selectedTokens.find(t => t.id === token.id)) {
      setSelectedTokens(selectedTokens.filter(t => t.id !== token.id));
    } else {
      setSelectedTokens([...selectedTokens, token]);
    }
  };

  const getButtonStyle = (type: 'short' | 'long' | 'rsi' | 'ai' | 'binance' | 'bybit') => {
    switch (type) {
      case 'short':
      case 'bybit':
        return 'bg-green-500/20 text-green-500 hover:bg-green-500/30';
      case 'long':
      case 'rsi':
      case 'binance':
        return 'bg-green-500/20 text-green-500 hover:bg-green-500/30';
      case 'ai':
        return 'bg-purple-500/20 text-purple-500 hover:bg-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-500 hover:bg-gray-500/30';
    }
  };

  const getSelectorItemStyle = (type: 'short' | 'long' | 'rsi' | 'ai' | 'binance' | 'bybit', isSelected: boolean) => {
    const baseStyle = 'px-3 mt-2 py-2 rounded cursor-pointer transition-colors duration-150 w-full text-left';
    if (!isSelected) return `${baseStyle} hover:bg-gray-700  text-gray-300`;
    
    switch (type) {
      case 'short':
      case 'bybit':
        return `${baseStyle} bg-green-500/20 text-green-500`;
      case 'long':
      case 'rsi':
      case 'binance':
        return `${baseStyle} bg-green-500/20 text-green-500`;
      case 'ai':
        return `${baseStyle} bg-purple-500/20 text-purple-500`;
      default:
        return `${baseStyle} bg-gray-700 text-white`;
    }
  };

  return (
    <div className="flex flex-col w-full bg-gray-900">
      <div className="flex items-center justify-between p-4 bg-gray-800/50">
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/znbC3SV/Group.jpg"
            alt="Coinchart.fun"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-bold text-white">Coinchart.fun</span>
        </div>

        {/* Top 100 & API Access */}
        <div className="flex items-center gap-4">
        <div className="relative max-w-xl w-64 mx-4">
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Top 100
            <ChevronDown size={20} />
          </button>
          
          {showRankDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
              <div className="p-2 space-y-1">
                <label className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
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
        <button className="flex items-center ml-4 text-xs gap-2 text-gray-300 hover:text-white">
          Need API Access ?
          <FaTelegram size={14} className="text-blue-400" />
        </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between p-4 bg-black">
        {/* Left Section */}
        <div className="flex items-center gap-12">
          {/* Strategies */}
          <div className="flex items-center gap-4">
            <span className="text-white">Strategies :</span>
            {selectedStrategies.map(strategy => (
              <button
                key={strategy.id}
                onClick={() => toggleStrategy(strategy)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg ${getButtonStyle(strategy.type)}`}
              >
                {strategy.name}
                {strategy.type === 'short' && <span className="text-xl">⚡</span>}
              </button>
            ))}
            <button
              onClick={() => setShowStrategySelector(!showStrategySelector)}
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700"
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Tokens */}
          <div className="flex items-center gap-4">
            <span className="text-white">Token :</span>
            {selectedTokens.map(token => (
              <button
                key={token.id}
                onClick={() => toggleToken(token)}
                className={`px-4 py-1.5 rounded-lg ${getButtonStyle(token.type)}`}
              >
                {token.name}
              </button>
            ))}
            <button
              onClick={() => setShowTokenSelector(!showTokenSelector)}
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Strategy Selector Dropdown */}
        {showStrategySelector && (
          <div className="absolute left-32 top-32 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
            <div className="p-2">
              {allStrategies.map(strategy => (
                <button
                  key={strategy.id}
                  onClick={() => toggleStrategy(strategy)}
                  className={getSelectorItemStyle(
                    strategy.type,
                    selectedStrategies.some(s => s.id === strategy.id)
                  )}
                >
                  {strategy.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Token Selector Dropdown */}
        {showTokenSelector && (
          <div className="absolute left-96 top-32 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
            <div className="p-2">
              {allTokens.map(token => (
                <button
                  key={token.id}
                  onClick={() => toggleToken(token)}
                  className={getSelectorItemStyle(
                    token.type,
                    selectedTokens.some(t => t.id === token.id)
                  )}
                >
                  {token.name}
                </button>
              ))}
            </div>
          </div>
        )}

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