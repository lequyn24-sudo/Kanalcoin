"use client";

import { useEffect, useState } from "react";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function CoinTicker() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch("/api/market");
        if (!response.ok) throw new Error("Failed");
        const data = await response.json();
        setCoins(data);
      } catch (err) {
        console.error("Error fetching coins:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
    // Poll every 60 seconds
    const interval = setInterval(fetchCoins, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-primary/10 border-b border-primary/20 overflow-hidden py-2 flex justify-center">
        <span className="text-sm text-foreground/60 animate-pulse">Loading market data...</span>
      </div>
    );
  }

  if (error || coins.length === 0) {
    return (
      <div className="w-full bg-primary/10 border-b border-primary/20 overflow-hidden py-2 flex justify-center">
        <span className="text-sm text-red-400">Market data unavailable</span>
      </div>
    );
  }

  // Duplicate coins to ensure smooth infinite marquee
  const displayCoins = [...coins, ...coins];

  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 overflow-hidden py-2 relative flex items-center">
      <div className="flex animate-marquee whitespace-nowrap gap-8 px-4">
        {displayCoins.map((coin, i) => (
          <div key={`${coin.id}-${i}`} className="flex items-center gap-2 text-sm">
            <span className="font-bold text-foreground uppercase">{coin.symbol}</span>
            <span className="text-foreground/80">${coin.current_price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className={`font-medium ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {coin.price_change_percentage_24h >= 0 ? "+" : ""}{coin.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
