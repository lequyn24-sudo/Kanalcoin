"use client";

import React, { useState } from 'react';

export default function MarketcapCoinsPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mockCoins = [
    { rank: 1, name: "Bitcoin", symbol: "BTC", logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", price: "$68,420.50", change24h: "+2.4%", change7d: "+5.2%", marketCap: "$1.34T", volume24h: "$32.5B", sparklineColor: "text-green-400" },
    { rank: 2, name: "Ethereum", symbol: "ETH", logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png", price: "$3,842.10", change24h: "+1.8%", change7d: "-1.2%", marketCap: "$462.1B", volume24h: "$14.2B", sparklineColor: "text-green-400" },
    { rank: 3, name: "Tether", symbol: "USDT", logoUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png", price: "$1.00", change24h: "0.0%", change7d: "0.0%", marketCap: "$104.2B", volume24h: "$45.1B", sparklineColor: "text-gray-400" },
    { rank: 4, name: "BNB", symbol: "BNB", logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png", price: "$592.30", change24h: "-0.5%", change7d: "+8.4%", marketCap: "$88.5B", volume24h: "$1.8B", sparklineColor: "text-red-400" },
    { rank: 5, name: "Solana", symbol: "SOL", logoUrl: "https://cryptologos.cc/logos/solana-sol-logo.png", price: "$142.85", change24h: "+5.6%", change7d: "+12.1%", marketCap: "$62.3B", volume24h: "$3.4B", sparklineColor: "text-green-400" },
    { rank: 6, name: "XRP", symbol: "XRP", logoUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png", price: "$0.62", change24h: "-1.2%", change7d: "-3.5%", marketCap: "$34.1B", volume24h: "$1.2B", sparklineColor: "text-red-400" },
    { rank: 7, name: "USDC", symbol: "USDC", logoUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png", price: "$1.00", change24h: "0.0%", change7d: "0.0%", marketCap: "$32.4B", volume24h: "$4.1B", sparklineColor: "text-gray-400" },
    { rank: 8, name: "Cardano", symbol: "ADA", logoUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png", price: "$0.58", change24h: "+1.1%", change7d: "-2.1%", marketCap: "$20.5B", volume24h: "$450M", sparklineColor: "text-green-400" },
    { rank: 9, name: "Avalanche", symbol: "AVAX", logoUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png", price: "$45.20", change24h: "+8.2%", change7d: "+15.4%", marketCap: "$17.2B", volume24h: "$890M", sparklineColor: "text-green-400" },
    { rank: 10, name: "Dogecoin", symbol: "DOGE", logoUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png", price: "$0.15", change24h: "-2.4%", change7d: "+1.2%", marketCap: "$21.5B", volume24h: "$1.1B", sparklineColor: "text-red-400" },
    { rank: 11, name: "Polkadot", symbol: "DOT", logoUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png", price: "$8.40", change24h: "+0.5%", change7d: "-4.2%", marketCap: "$11.8B", volume24h: "$210M", sparklineColor: "text-green-400" },
    { rank: 12, name: "Chainlink", symbol: "LINK", logoUrl: "https://cryptologos.cc/logos/chainlink-link-logo.png", price: "$18.90", change24h: "+3.4%", change7d: "+6.8%", marketCap: "$11.1B", volume24h: "$420M", sparklineColor: "text-green-400" },
  ];

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-strong pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Cryptocurrency Prices by Market Cap</h1>
            <p className="text-text-muted max-w-2xl">The global cryptocurrency market cap today is $2.64 Trillion, a <span className="text-green-400 font-medium">+1.5%</span> change in the last 24 hours.</p>
          </div>
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 relative">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'filters' ? null : 'filters')}
              className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeDropdown === 'filters' ? 'btn-primary shadow-md' : 'bg-surface-hover border border-border-strong text-foreground hover:bg-surface-active'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Filters
            </button>
            
            {activeDropdown === 'filters' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-border-strong rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in-up">
                <div className="px-3 py-2 border-b border-border-light text-xs font-bold text-text-muted uppercase tracking-wider">Quick Filters</div>
                <div className="p-1">
                  {['Top 100 Coins', 'Top Gainers (24h)', 'Top Losers (24h)', 'Recently Added', 'Audited Only'].map(filter => (
                    <button key={filter} className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-surface-hover rounded-lg transition-colors" onClick={() => setActiveDropdown(null)}>
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'categories' ? null : 'categories')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${activeDropdown === 'categories' ? 'btn-primary shadow-md' : 'bg-surface-hover border border-border-strong text-foreground hover:bg-surface-active'}`}
            >
              Categories
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === 'categories' && (
              <div className="absolute top-full left-24 mt-2 w-48 bg-surface border border-border-strong rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in-up">
                <div className="px-3 py-2 border-b border-border-light text-xs font-bold text-text-muted uppercase tracking-wider">Sectors</div>
                <div className="p-1">
                  {['DeFi', 'Layer 1 / Layer 2', 'AI & Big Data', 'Gaming (GameFi)', 'Memecoins', 'Metaverse'].map(cat => (
                    <button key={cat} className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-surface-hover rounded-lg transition-colors" onClick={() => setActiveDropdown(null)}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search coins..." 
                className="bg-surface border border-border-strong text-foreground text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary w-full md:w-64"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3.5 top-2.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="soft-card overflow-hidden shadow-xl rounded-2xl border border-border-light bg-surface/80">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-hover/50 border-b border-border-light text-[11px] font-bold text-text-dim uppercase tracking-wider">
                  <th className="p-4 pl-6 whitespace-nowrap">#</th>
                  <th className="p-4 whitespace-nowrap">Coin</th>
                  <th className="p-4 text-right whitespace-nowrap">Price</th>
                  <th className="p-4 text-right whitespace-nowrap">24h %</th>
                  <th className="p-4 text-right whitespace-nowrap">7d %</th>
                  <th className="p-4 text-right whitespace-nowrap">Market Cap</th>
                  <th className="p-4 text-right whitespace-nowrap">Volume (24h)</th>
                  <th className="p-4 text-right pr-6 whitespace-nowrap">Last 7 Days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {mockCoins.map((coin) => (
                  <tr key={coin.symbol} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                    <td className="p-4 pl-6 text-text-muted text-sm font-medium w-12">{coin.rank}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center border border-border-strong overflow-hidden shrink-0 shadow-inner">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={coin.logoUrl} alt={coin.name} className="w-full h-full object-contain p-1.5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-foreground group-hover:text-primary-light transition-colors">{coin.name}</span>
                          <span className="text-[11px] text-text-muted font-medium">{coin.symbol}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-right font-medium text-foreground">{coin.price}</td>
                    <td className={`p-4 text-right font-medium ${coin.change24h.startsWith('+') ? 'text-green-400' : coin.change24h === '0.0%' ? 'text-gray-400' : 'text-red-400'}`}>
                      {coin.change24h}
                    </td>
                    <td className={`p-4 text-right font-medium ${coin.change7d.startsWith('+') ? 'text-green-400' : coin.change7d === '0.0%' ? 'text-gray-400' : 'text-red-400'}`}>
                      {coin.change7d}
                    </td>
                    <td className="p-4 text-right font-medium text-text-muted">{coin.marketCap}</td>
                    <td className="p-4 text-right font-medium text-text-muted">
                      <div className="flex flex-col items-end">
                        <span className="text-foreground">{coin.volume24h}</span>
                        <span className="text-[10px]">{(parseFloat(coin.volume24h.replace(/[^0-9.]/g, '')) * 342).toLocaleString()} {coin.symbol}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right pr-6 w-32">
                      <svg viewBox="0 0 100 30" className="w-24 h-8 inline-block opacity-80 group-hover:opacity-100 transition-opacity">
                        <path 
                          d={coin.change7d.startsWith('+') ? "M0,25 Q10,20 20,25 T40,15 T60,20 T80,5 T100,10" : "M0,5 Q10,10 20,5 T40,15 T60,10 T80,25 T100,20"} 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          className={coin.sparklineColor}
                          strokeLinecap="round"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-4">
          <button className="px-6 py-2.5 rounded-xl border border-border-strong text-foreground font-medium hover:bg-white/5 transition-colors">
            Load More Coins
          </button>
        </div>

      </div>
    </div>
  );
}
