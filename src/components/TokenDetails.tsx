import React from 'react';
import { X, ExternalLink, TrendingUp } from 'lucide-react';
import { CryptoData, Timeframe } from '../types';
import { formatNumber, formatPrice } from '../utils';

interface TokenDetailsProps {
  crypto: CryptoData;
  onClose: () => void;
  selectedTimeframe: Timeframe;
  onTimeframeChange: (timeframe: Timeframe) => void;
}

const timeframes: Timeframe[] = ['Hour', 'Day', 'Week', 'Month', 'Year'];

export const TokenDetails: React.FC<TokenDetailsProps> = ({
  crypto,
  onClose,
  selectedTimeframe,
  onTimeframeChange,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl w-full max-w-2xl mx-4 overflow-hidden border border-gray-800">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">{crypto.name}</h2>
              <p className="text-gray-400">{crypto.symbol}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Rank</p>
              <p className="text-white font-bold">#{crypto.rank}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Market Cap</p>
              <p className="text-white font-bold">${formatNumber(crypto.marketCap)}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">24h Volume</p>
              <p className="text-white font-bold">${formatNumber(crypto.volume24h)}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Price</p>
              <p className="text-white font-bold">${formatPrice(crypto.price)}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex space-x-2 mb-4">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => onTimeframeChange(timeframe)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${selectedTimeframe === timeframe
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 h-48 flex items-center justify-center">
              <TrendingUp className="text-gray-600" size={48} />
              <span className="text-gray-600 ml-2">Chart placeholder</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <ExternalLink size={20} className="text-gray-400" />
              </button>
            </div>
            <div className={`text-lg font-bold ${
              crypto.percentChange >= 0 ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              {crypto.percentChange >= 0 ? '+' : ''}{crypto.percentChange.toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};