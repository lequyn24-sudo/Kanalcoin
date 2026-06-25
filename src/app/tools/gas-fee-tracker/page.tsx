import React from 'react';
import Link from 'next/link';

export default function GasFeeTracker() {
  const networks = [
    {
      name: "Ethereum",
      logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
      symbol: "ETH",
      slow: 12,
      standard: 15,
      fast: 18,
      usdTransfer: 1.25,
      swap: 6.80,
      color: "from-[#627EEA]/20 to-[#627EEA]/5",
      border: "border-[#627EEA]/30",
      accent: "text-[#627EEA]"
    },
    {
      name: "Polygon",
      logoUrl: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
      symbol: "MATIC",
      slow: 40,
      standard: 55,
      fast: 70,
      usdTransfer: 0.01,
      swap: 0.05,
      color: "from-[#8247E5]/20 to-[#8247E5]/5",
      border: "border-[#8247E5]/30",
      accent: "text-[#8247E5]"
    },
    {
      name: "Arbitrum One",
      logoUrl: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
      symbol: "ETH",
      slow: 0.1,
      standard: 0.1,
      fast: 0.1,
      usdTransfer: 0.15,
      swap: 0.45,
      color: "from-[#28A0F0]/20 to-[#28A0F0]/5",
      border: "border-[#28A0F0]/30",
      accent: "text-[#28A0F0]"
    },
    {
      name: "Optimism",
      logoUrl: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg",
      symbol: "ETH",
      slow: 0.001,
      standard: 0.001,
      fast: 0.001,
      usdTransfer: 0.12,
      swap: 0.35,
      color: "from-[#FF0420]/20 to-[#FF0420]/5",
      border: "border-[#FF0420]/30",
      accent: "text-[#FF0420]"
    },
    {
      name: "Binance Smart Chain",
      logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
      symbol: "BNB",
      slow: 3,
      standard: 3,
      fast: 4,
      usdTransfer: 0.05,
      swap: 0.15,
      color: "from-[#F3BA2F]/20 to-[#F3BA2F]/5",
      border: "border-[#F3BA2F]/30",
      accent: "text-[#F3BA2F]"
    },
    {
      name: "Avalanche",
      logoUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.svg",
      symbol: "AVAX",
      slow: 25,
      standard: 30,
      fast: 35,
      usdTransfer: 0.03,
      swap: 0.10,
      color: "from-[#E84142]/20 to-[#E84142]/5",
      border: "border-[#E84142]/30",
      accent: "text-[#E84142]"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-strong pb-6">
          <div className="flex items-center gap-4">
            <Link href="/tools" className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-text-muted hover:text-white hover:bg-[#2A363B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                Gas Fee Tracker
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
                  Live Updates
                </span>
              </h1>
              <p className="text-text-muted text-sm mt-1">Monitor real-time gas prices across major EVM-compatible networks.</p>
            </div>
          </div>
          <div className="text-sm font-medium text-text-muted flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Last updated: Just now
          </div>
        </div>

        {/* Highlight Ethereum (Usually most important) */}
        <div className="soft-card p-8 rounded-3xl border border-border-strong bg-gradient-to-br from-[#121A1D] to-[#1A262B] shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#627EEA]/10 rounded-full blur-[80px]"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between relative z-10">
            <div className="flex items-center gap-6">
              <img src={networks[0].logoUrl} alt="Ethereum" className="w-20 h-20" />
              <div>
                <h2 className="text-4xl font-display font-bold text-foreground mb-2">Ethereum</h2>
                <div className="flex items-center gap-4 text-text-muted">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider">Transfer (ERC20)</span>
                    <span className="text-lg font-bold text-foreground">~${networks[0].usdTransfer.toFixed(2)}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider">Uniswap Swap</span>
                    <span className="text-lg font-bold text-foreground">~${networks[0].swap.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 w-full lg:w-auto">
              {/* Slow */}
              <div className="flex-1 lg:w-32 soft-card p-4 rounded-xl border border-border-light bg-surface/80 text-center">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Slow</p>
                <p className="text-2xl font-bold text-foreground">{networks[0].slow} <span className="text-sm font-normal text-text-muted">Gwei</span></p>
                <p className="text-[10px] text-green-400 mt-1">&gt; 3 mins</p>
              </div>
              {/* Standard */}
              <div className="flex-1 lg:w-32 soft-card p-4 rounded-xl border border-[#627EEA]/40 bg-[#627EEA]/10 text-center relative overflow-hidden shadow-[0_0_20px_rgba(98,126,234,0.15)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#627EEA] to-transparent"></div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Standard</p>
                <p className="text-2xl font-bold text-foreground">{networks[0].standard} <span className="text-sm font-normal text-text-muted">Gwei</span></p>
                <p className="text-[10px] text-yellow-400 mt-1">~ 1 min</p>
              </div>
              {/* Fast */}
              <div className="flex-1 lg:w-32 soft-card p-4 rounded-xl border border-border-light bg-surface/80 text-center">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Fast</p>
                <p className="text-2xl font-bold text-foreground">{networks[0].fast} <span className="text-sm font-normal text-text-muted">Gwei</span></p>
                <p className="text-[10px] text-red-400 mt-1">&lt; 15 secs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Networks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networks.slice(1).map((network, index) => (
            <div key={index} className="soft-card p-6 rounded-2xl border border-border-light bg-surface/80 flex flex-col group hover:border-white/20 transition-colors">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${network.color} flex items-center justify-center p-2`}>
                    <img src={network.logoUrl} alt={network.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{network.name}</h3>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-bold ${network.accent}`}>
                    {network.standard} <span className="text-xs font-normal text-text-muted">Gwei</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-surface-hover p-3 rounded-lg border border-border-light">
                  <p className="text-[10px] uppercase text-text-muted mb-1">Transfer</p>
                  <p className="text-sm font-bold text-foreground">${network.usdTransfer.toFixed(2)}</p>
                </div>
                <div className="bg-surface-hover p-3 rounded-lg border border-border-light">
                  <p className="text-[10px] uppercase text-text-muted mb-1">Swap</p>
                  <p className="text-sm font-bold text-foreground">${network.swap.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
