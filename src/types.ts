export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  marketCap: number;
  price: number;
  volume24h: number;
  percentChange: number;
  rank: number;
}

export interface TimeframeData {
  timestamp: number;
  price: number;
}

export type Timeframe = 'Hour' | 'Day' | 'Week' | 'Month' | 'Year';