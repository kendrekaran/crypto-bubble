import React, { useState, useMemo } from 'react';
import { 
  Crown,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  XCircle,
  ExternalLink
} from 'lucide-react';

interface SignalData {
  symbol: string;
  price: number;
  risk: number;
  marketCap: string;
  timeAgo: string;
  good: string[];
  bad: string[];
}

const WALLET_OPTIONS = [
  'apds46saerqweu...Gah',
  'b7x5n2qw3rt9...Xyz',
  'k9m1p6hs8jl3...Pqr'
];

const signals: SignalData[] = [
  {
    symbol: 'SOL',
    price: 243.80,
    risk: 44,
    marketCap: '$1.2B',
    timeAgo: '15m',
    good: ['4 cycles are at the bottom'],
    bad: ['3-Day Cycle is falling, can indicate further downside']
  },
  {
    symbol: 'DOT',
    price: 8.12,
    risk: 38,
    marketCap: '$892M',
    timeAgo: '1h',
    good: ['RSI oversold on 4h timeframe'],
    bad: ['Volume declining']
  },
  {
    symbol: 'TON',
    price: 2.43,
    risk: 52,
    marketCap: '$456M',
    timeAgo: '16h',
    good: ['Strong support level reached'],
    bad: ['High selling pressure']
  }
];

const WalletDropdown: React.FC<{
  selectedWallet: string;
  onSelect: (wallet: string) => void;
  onDisconnect: () => void;
}> = ({ selectedWallet, onSelect, onDisconnect }) => {
  return (
    <div className="absolute right-0 mt-2 w-full bg-gray-900 rounded-lg shadow-xl z-50">
      {WALLET_OPTIONS.map((wallet) => (
        <button 
          key={wallet}
          onClick={() => onSelect(wallet)}
          className={`w-full px-4 py-2 text-left hover:bg-gray-800 ${
            wallet === selectedWallet ? 'bg-gray-800 text-white' : 'text-gray-400'
          }`}
        >
          {wallet}
        </button>
      ))}
      <div className="border-t border-gray-700">
        <button 
          onClick={onDisconnect}
          className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-800"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};

const SignalItem: React.FC<{ signal: SignalData }> = ({ signal }) => (
  <div className="p-4 border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors cursor-pointer">
    <div className="flex items-center justify-between mb-3">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-mono">${signal.symbol}</span>
          <span className="text-orange-500">{signal.timeAgo} ago</span>
        </div>
        <span className="text-2xl font-bold text-white">${signal.price}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-600" />
    </div>

    <div className="flex items-center gap-2 mb-3 text-sm">
      <span className="text-gray-400">Risk: {signal.risk}/100</span>
      <span className="text-gray-600">|</span>
      <span className="text-gray-400">Market Cap: {signal.marketCap}</span>
      <ExternalLink className="w-4 h-4 text-blue-400 ml-auto" />
    </div>

    <div className="mb-2">
      <div className="flex items-center gap-2 text-emerald-500 mb-1">
        <CheckCircle className="w-4 h-4" />
        <span className="font-medium">The Good:</span>
      </div>
      {signal.good.map((item, index) => (
        <div key={index} className="text-gray-400 text-sm pl-6">
          {item}
        </div>
      ))}
    </div>

    <div>
      <div className="flex items-center gap-2 text-rose-500 mb-1">
        <XCircle className="w-4 h-4" />
        <span className="font-medium">The Bad:</span>
      </div>
      {signal.bad.map((item, index) => (
        <div key={index} className="text-gray-400 text-sm pl-6">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export const BuySignalsPanel: React.FC = () => {
  const [selectedWallet, setSelectedWallet] = useState(WALLET_OPTIONS[0]);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);

  const handleWalletSelect = (wallet: string) => {
    setSelectedWallet(wallet);
    setShowWalletDropdown(false);
  };

  const handleDisconnect = () => {
    setSelectedWallet('');
    setShowWalletDropdown(false);
  };

  return (
    <div className="w-full lg:w-80 bg-black border-l border-gray-800/50 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-800/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-400">Premium</span>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowWalletDropdown(!showWalletDropdown)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-full text-sm text-gray-400"
            >
              <div className="w-4 h-4 rounded-full bg-purple-500" />
              {selectedWallet}
              <ChevronDown size={16} />
            </button>
            {showWalletDropdown && (
              <WalletDropdown 
                selectedWallet={selectedWallet}
                onSelect={handleWalletSelect}
                onDisconnect={handleDisconnect}
              />
            )}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">Latest Buy Signals</h1>
      </div>

      {/* Signals List */}
      <div className="flex-1 overflow-y-auto">
        {signals.map((signal) => (
          <SignalItem key={signal.symbol} signal={signal} />
        ))}
      </div>

      {/* Premium Support Button */}
      <div className="p-4 border-t border-gray-800/50">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <span className="font-medium">Premium Support</span>
          <span className="transform rotate-45">
            <ExternalLink className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
};







