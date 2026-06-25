import React from 'react';
import Link from 'next/link';

export default function ToolsPage() {
  const categories = ["All", "Calculators", "Trackers", "Tax", "Security", "Developer"];
  
  const mockTools = [
    {
      name: "Impermanent Loss Calculator",
      category: "Calculators",
      description: "Calculate potential impermanent loss for liquidity providers in automated market makers.",
      icon: "🧮",
      color: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20",
      isPro: false,
      url: "/tools/impermanent-loss-calculator"
    },
    {
      name: "Crypto Portfolio Tracker",
      category: "Trackers",
      description: "Connect multiple wallets and exchanges to track your entire crypto net worth in real-time.",
      icon: "📈",
      color: "from-green-500/20 to-green-500/5",
      border: "border-green-500/20",
      isPro: true,
      url: "/tools/portfolio-tracker"
    },
    {
      name: "Market Heatmap",
      category: "Trackers",
      description: "Visualize market movements across all sectors in real-time.",
      icon: "🗺️",
      color: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/20",
      isPro: true,
      url: "/tools/market-heatmap"
    },
    {
      name: "Staking Rewards Estimator",
      category: "Calculators",
      description: "Estimate APY and daily, weekly, or yearly returns from staking various Proof-of-Stake coins.",
      icon: "🥩",
      color: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/20",
      isPro: false,
      url: "/tools/staking-rewards-estimator"
    },
    {
      name: "Gas Fee Tracker",
      category: "Trackers",
      description: "Real-time gas prices for Ethereum, Polygon, Arbitrum, and other EVM-compatible chains.",
      icon: "⛽",
      color: "from-red-500/20 to-red-500/5",
      border: "border-red-500/20",
      isPro: false,
      url: "/tools/gas-fee-tracker"
    },
    {
      name: "Crypto Tax Generator",
      category: "Tax",
      description: "Automatically generate tax reports based on your transaction history across multiple chains.",
      icon: "📑",
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
      isPro: true,
      url: "/tools/tax-generator"
    },
    {
      name: "Smart Contract Auditor",
      category: "Developer",
      description: "Automated vulnerability scanning for Solidity smart contracts using static analysis.",
      icon: "🛡️",
      color: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/20",
      isPro: true,
      url: "/tools/smart-contract-auditor"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-strong pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Crypto Tools</h1>
            <p className="text-text-muted max-w-2xl">Essential utilities, calculators, and trackers to help you manage your digital assets more effectively.</p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                idx === 0 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-surface-hover text-text-muted hover:text-white hover:bg-[#2A363B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTools.map((tool, index) => (
            <div key={index} className="soft-card p-6 rounded-2xl border border-border-light bg-surface/80 hover:bg-surface-hover/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(106,133,211,0.1)] flex flex-col h-full relative overflow-hidden">
              
              {tool.isPro && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-md">
                  PRO
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} border ${tool.border} flex items-center justify-center text-3xl shadow-inner mb-6 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-light transition-colors pr-10">
                {tool.name}
              </h3>
              
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                {tool.description}
              </p>
              
              <Link href={tool.url} className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-light transition-colors group/link">
                Open Tool
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Tool Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-border-strong p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">Need a custom tool?</h2>
            <p className="text-text-muted">Our developer team is constantly building new utilities. If you have an idea for a tool that would help the community, let us know!</p>
          </div>
          <button className="relative z-10 px-6 py-3 rounded-xl bg-white text-black font-bold whitespace-nowrap hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
            Submit an Idea
          </button>
        </div>

      </div>
    </div>
  );
}
