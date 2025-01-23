import React from 'react';
import { 
  Bell, 
  CheckCircle, 
  AlertCircle, 
  CreditCard, 
  Bitcoin,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

interface SignalData {
  symbol: string;
  name: string;
  price: number;
  riskScore: number;
  marketCap: string;
  timeAgo: string;
}

const signals: SignalData[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    price: 243.80,
    riskScore: 4,
    marketCap: '1.2B',
    timeAgo: '15m'
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 35.42,
    riskScore: 3,
    marketCap: '892M',
    timeAgo: '1h'
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    price: 7.85,
    riskScore: 5,
    marketCap: '456M',
    timeAgo: '2h'
  }
];

export const BuySignalsPanel: React.FC = () => {
  return (
    <div className="w-full lg:w-80 bg-black border-l border-gray-800 p-6 flex flex-col h-screen">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-blue-400" />
        <h2 className="text-xl font-bold text-white">Buy Signals</h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-emerald-400">The Good</h3>
          </div>
          <p className="text-gray-300 text-sm">4 cycles are at the bottom</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-rose-400" />
            <h3 className="font-semibold text-rose-400">The Bad</h3>
          </div>
          <p className="text-gray-300 text-sm">3-Day Cycle is falling, can indicate further downside</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-700 pr-2">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 sticky top-0 bg-gray-900 z-10 pb-2">
          Latest Signals
        </h3>
        <div className="space-y-3">
          {signals.map((signal) => (
            <div
              key={signal.symbol}
              className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors cursor-pointer group border border-transparent hover:border-gray-700"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white">${signal.symbol}</span>
                    <span className="text-sm text-gray-400">{signal.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    ${signal.price.toFixed(2)}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">
                    Risk: <span className="text-white">{signal.riskScore}/10</span>
                  </span>
                  <span className="text-gray-400">
                    MCap: <span className="text-white">${signal.marketCap}</span>
                  </span>
                </div>
                <span className="text-gray-500">{signal.timeAgo} ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          <h3 className="font-semibold text-white">Premium Signals</h3>
        </div>
        <p className="text-gray-300 text-sm mb-4">
          Get early access to all buy signals and advanced analytics
        </p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-white">$49</span>
          <span className="text-gray-400">/month</span>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Subscribe Now
        </button>
        <div className="flex items-center justify-center gap-3 mt-3">
          <CreditCard className="w-5 h-5 text-gray-400" />
          <Bitcoin className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};