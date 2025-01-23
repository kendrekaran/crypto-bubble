import React from 'react';
import { X, Star, Edit3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CryptoData, Timeframe } from '../types';

interface TokenDetailsProps {
  crypto: CryptoData;
  onClose: () => void;
  selectedTimeframe: Timeframe;
  onTimeframeChange: (timeframe: Timeframe) => void;
}

const timeframes: Timeframe[] = ['Hour', 'Day', 'Week', 'Month', 'Year'];

const tradingPlatforms = [
  { name: 'Binance', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=025' },
  { name: 'ByBit', logo: 'https://cryptologos.cc/logos/bybit-bbt-logo.svg?v=025' },
  { name: 'KuCoin', logo: 'https://cryptologos.cc/logos/kucoin-token-kcs-logo.svg?v=025' }
];

const linkPlatforms = [
  { name: 'CoinMarketCap', icon: 'M' },
  { name: 'CoinGecko', icon: 'G' },
  { name: 'TradingView', icon: 'TV' }
];

export const TokenDetails: React.FC<TokenDetailsProps> = ({
  crypto,
  onClose,
  selectedTimeframe,
  onTimeframeChange,
}) => {
  // Sample price data for chart
  const priceData = {
    Hour: [
      { name: '00:00', price: 0.3338 },
      { name: '01:00', price: 0.3342 },
      { name: '02:00', price: 0.3335 },
      { name: '03:00', price: 0.3330 },
      { name: '04:00', price: 0.3325 },
    ],
    Day: [
      { name: 'Day 1', price: 0.3338 },
      { name: 'Day 2', price: 0.3350 },
      { name: 'Day 3', price: 0.3320 },
      { name: 'Day 4', price: 0.3360 },
      { name: 'Day 5', price: 0.3345 },
    ],
    Week: [
      { name: 'Week 1', price: 0.3338 },
      { name: 'Week 2', price: 0.3400 },
      { name: 'Week 3', price: 0.3250 },
      { name: 'Week 4', price: 0.3380 },
      { name: 'Week 5', price: 0.3420 },
    ],
    Month: [
      { name: 'Jan', price: 0.3338 },
      { name: 'Feb', price: 0.3500 },
      { name: 'Mar', price: 0.3200 },
      { name: 'Apr', price: 0.3450 },
      { name: 'May', price: 0.3600 },
    ],
    Year: [
      { name: '2023', price: 0.3338 },
      { name: 'Q1 2024', price: 0.3800 },
      { name: 'Q2 2024', price: 0.3100 },
      { name: 'Q3 2024', price: 0.3600 },
      { name: 'Q4 2024', price: 0.4000 },
    ]
  };

  const timeframePercentages = {
    Hour: '0%',
    Day: '-13.7%',
    Week: '6%',
    Month: '25.3%',
    Year: '130%'
  };

  const currentData = priceData[selectedTimeframe];

  // Calculate min and max prices for the chart
  const minPrice = Math.min(...currentData.map(d => d.price));
  const maxPrice = Math.max(...currentData.map(d => d.price));

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                {crypto.name}
                <span className="text-purple-500 flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-purple-500" />
                  PAAL AI
                </span>
              </h2>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Links and Trade Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-gray-400 mb-3">Links</h3>
              <div className="flex gap-3">
                {linkPlatforms.map(platform => (
                  <button
                    key={platform.name}
                    className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700"
                  >
                    {platform.icon}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-gray-400 mb-3">Trade</h3>
              <div className="flex gap-3">
                {tradingPlatforms.map(platform => (
                  <button
                    key={platform.name}
                    className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                  >
                    <img src={platform.logo} alt={platform.name} className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="text-gray-400 text-sm mb-1">Rank</div>
              <div className="text-white font-bold flex items-center gap-1">
                <span>221</span>
                <span className="text-red-500 text-sm">↓7</span>
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Market Cap</div>
              <div className="text-white font-bold">$293.41M</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">24h Volume</div>
              <div className="text-white font-bold">$17.66M</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Edit3 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value="1"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white"
              />
            </div>
            <div className="text-2xl font-bold text-white">
              PAAL = $0.3338
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentData}>
                <XAxis dataKey="name" tick={{ fill: 'white' }} axisLine={{ stroke: '#555' }} />
                <YAxis 
                  domain={[minPrice * 0.95, maxPrice * 1.05]} 
                  tick={{ fill: 'white' }} 
                  axisLine={{ stroke: '#555' }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                  itemStyle={{ color: 'white' }}
                  labelStyle={{ color: 'white' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#10b981" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Timeframe Selector */}
          <div className="flex justify-between items-center">
            {timeframes.map(timeframe => (
              <button
                key={timeframe}
                onClick={() => onTimeframeChange(timeframe)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedTimeframe === timeframe
                    ? 'bg-red-500/20 text-red-500'
                    : 'text-gray-400 hover:text-white'}`}
              >
                {timeframe}
                <div className={`${
                  timeframePercentages[timeframe].startsWith('-') ? 'text-red-500' : 'text-green-500'
                }`}>
                  {timeframePercentages[timeframe]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};