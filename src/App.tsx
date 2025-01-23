import React, { useState } from 'react';
import { CryptoData, Timeframe } from './types';
import { BubbleChart } from './components/BubbleChart';
import { TokenDetails } from './components/TokenDetails';
import { SearchBar } from './components/SearchBar';
import { BuySignalsPanel } from './components/BuySignalsPanel';

const mockData: CryptoData[] = [
  {
    id: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    marketCap: 789456123000,
    price: 42069.50,
    volume24h: 12345678900,
    percentChange: 2.5,
    rank: 1
  },
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    marketCap: 234567890000,
    price: 2345.67,
    volume24h: 9876543210,
    percentChange: -1.8,
    rank: 2
  },
  // Add more mock data as needed
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>('Day');

  const filteredData = mockData.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black flex">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Crypto Analytics</h1>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>

          <BubbleChart
            data={filteredData}
            onBubbleClick={setSelectedCrypto}
          />

          {selectedCrypto && (
            <TokenDetails
              crypto={selectedCrypto}
              onClose={() => setSelectedCrypto(null)}
              selectedTimeframe={selectedTimeframe}
              onTimeframeChange={setSelectedTimeframe}
            />
          )}
        </div>
      </div>
      
      <BuySignalsPanel />
    </div>
  );
}

export default App;