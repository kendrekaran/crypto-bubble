import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CryptoData } from '../types';
import {  formatPercentage } from '../utils';

interface BubbleChartProps {
  data: CryptoData[];
  onBubbleClick: (crypto: CryptoData) => void;
}

export const BubbleChart: React.FC<BubbleChartProps> = ({ data, onBubbleClick }) => {
  const maxMarketCap = Math.max(...data.map(d => d.marketCap));
  
  const getBubbleSize = (marketCap: number) => {
    return (marketCap / maxMarketCap) * 120 + 40; 
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence>
        {data.map((crypto) => {
          const size = getBubbleSize(crypto.marketCap);
          const x = Math.random() * (100 - size/6) + size/12;
          const y = Math.random() * (100 - size/6) + size/12;
          
          return (
            <motion.div
              key={crypto.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: `${x}%`,
                y: `${y}%`,
              }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute cursor-pointer"
              style={{ 
                width: size,
                height: size,
              }}
              onClick={() => onBubbleClick(crypto)}
            >
              <div 
                className={`w-full h-full rounded-full flex flex-col items-center justify-center
                  ${crypto.percentChange >= 0 
                    ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 border-emerald-400/30' 
                    : 'bg-gradient-to-br from-rose-500/20 to-rose-600/30 border-rose-400/30'}
                  border backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow
                  text-white`}
              >
                <span className="text-lg font-bold">{crypto.symbol}</span>
                <span className={`text-sm ${
                  crypto.percentChange >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {formatPercentage(crypto.percentChange)}
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};