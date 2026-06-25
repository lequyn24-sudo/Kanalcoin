"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function CalendarContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeImportance, setActiveImportance] = useState<string[]>(["Critical", "High", "Medium"]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Sync state if URL changes and set default "From Date" to today
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
    
    // Set default fromDate to today to show upcoming events like major sites do
    const today = new Date();
    // Use local timezone format (YYYY-MM-DD)
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setFromDate(`${yyyy}-${mm}-${dd}`);
  }, [searchParams]);

  const toggleImportance = (level: string) => {
    setActiveImportance(prev => 
      prev.includes(level) ? prev.filter(i => i !== level) : [...prev, level]
    );
  };

  const categories = [
    "All",
    "Crypto Calendar",
    "ICO, IEO, IDO Calendar",
    "Crypto Airdrop",
    "Crypto Events And Conference"
  ];
  
  const realEvents = [
    // Today's Events (June 24, 2026)
    {
      id: 11,
      title: "Solana Ecosystem Global Call",
      date: "Jun 24, 2026",
      month: "June 2026",
      time: "15:00 UTC",
      type: "Conference",
      importance: "Medium",
      coin: "SOL",
      description: "Monthly global community call discussing the latest ecosystem updates, DApps, and protocol upgrades.",
      location: "Virtual",
      color: "border-green-400",
      bg: "bg-green-400/10",
      text: "text-green-400",
      category: "Crypto Events And Conference"
    },
    {
      id: 12,
      title: "Binance Launchpool: New Layer 2",
      date: "Jun 24, 2026",
      month: "June 2026",
      time: "08:00 UTC",
      type: "ICO/IDO",
      importance: "High",
      coin: "BNB",
      description: "Farming period opens for the newest Zero-Knowledge Layer 2 network on Binance Launchpool.",
      location: "Binance",
      color: "border-yellow-400",
      bg: "bg-yellow-400/10",
      text: "text-yellow-400",
      category: "ICO, IEO, IDO Calendar"
    },
    // Crypto Events And Conference
    {
      id: 1,
      title: "Consensus Asia 2026",
      date: "Jul 18-20, 2026",
      month: "July 2026",
      time: "09:00 HKT",
      type: "Conference",
      importance: "High",
      coin: "ALL",
      description: "One of the world's largest crypto events comes to Asia, bringing together developers, investors, and founders.",
      location: "Hong Kong",
      color: "border-blue-500",
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      category: "Crypto Events And Conference"
    },
    {
      id: 2,
      title: "ETHGlobal London",
      date: "Aug 23 - 25, 2026",
      month: "August 2026",
      time: "08:00 BST",
      type: "Hackathon",
      importance: "High",
      coin: "ETH",
      description: "The largest Ethereum #BUIDLathon in Europe, bringing thousands of Web3 developers.",
      location: "London, UK",
      color: "border-purple-500",
      bg: "bg-purple-500/10",
      text: "text-purple-500",
      category: "Crypto Events And Conference"
    },
    {
      id: 3,
      title: "Paris Blockchain Week 2026",
      date: "Sep 08-10, 2026",
      month: "September 2026",
      time: "09:00 CET",
      type: "Conference",
      importance: "Medium",
      coin: "ALL",
      description: "A major European blockchain summit featuring top industry leaders and institutional players.",
      location: "Paris, France",
      color: "border-green-400",
      bg: "bg-green-400/10",
      text: "text-green-400",
      category: "Crypto Events And Conference"
    },
    // Crypto Calendar
    {
      id: 4,
      title: "FOMC Meeting & Interest Rate Decision",
      date: "Jun 26, 2026",
      month: "June 2026",
      time: "14:00 EST",
      type: "Macro Event",
      importance: "Critical",
      coin: "ALL",
      description: "Federal Reserve announces latest decision on interest rates, highly impactful for crypto markets.",
      location: "Washington D.C.",
      color: "border-red-500",
      bg: "bg-red-500/10",
      text: "text-red-500",
      category: "Crypto Calendar"
    },
    {
      id: 5,
      title: "Ethereum Osaka Upgrade (Testnet)",
      date: "Jul 05, 2026",
      month: "July 2026",
      time: "TBA",
      type: "Network Upgrade",
      importance: "High",
      coin: "ETH",
      description: "Next major network upgrade launching on testnet, focusing on statelessness and verkle trees.",
      location: "Network",
      color: "border-blue-500",
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      category: "Crypto Calendar"
    },
    {
      id: 6,
      title: "Arbitrum Massive Token Unlock",
      date: "Jul 15, 2026",
      month: "July 2026",
      time: "00:00 UTC",
      type: "Tokenomics",
      importance: "High",
      coin: "ARB",
      description: "Scheduled release of massive ARB tokens to team and investors.",
      location: "On-chain",
      color: "border-orange-500",
      bg: "bg-orange-500/10",
      text: "text-orange-500",
      category: "Crypto Calendar"
    },
    // Crypto Airdrop
    {
      id: 7,
      title: "ZKSync Ecosystem Airdrop Wave 2",
      date: "Jun 30, 2026",
      month: "June 2026",
      time: "TBA",
      type: "Airdrop",
      importance: "Critical",
      coin: "ZK",
      description: "Second wave of ZK airdrop targeting active ecosystem dApp users and liquidity providers.",
      location: "On-chain",
      color: "border-green-500",
      bg: "bg-green-500/10",
      text: "text-green-500",
      category: "Crypto Airdrop"
    },
    {
      id: 8,
      title: "Monad Mainnet Launch & Airdrop",
      date: "Aug 10, 2026",
      month: "August 2026",
      time: "TBA",
      type: "Airdrop",
      importance: "High",
      coin: "MONAD",
      description: "High-performance EVM L1 blockchain expected to go live with a massive community airdrop.",
      location: "Network",
      color: "border-yellow-500",
      bg: "bg-yellow-500/10",
      text: "text-yellow-500",
      category: "Crypto Airdrop"
    },
    // ICO, IEO, IDO Calendar
    {
      id: 9,
      title: "Movement Labs Public Sale",
      date: "Jul 12, 2026",
      month: "July 2026",
      time: "17:00 UTC",
      type: "ICO",
      importance: "High",
      coin: "MOVE",
      description: "The first modular Move-based L2 network public token sale.",
      location: "CoinList",
      color: "border-purple-500",
      bg: "bg-purple-500/10",
      text: "text-purple-500",
      category: "ICO, IEO, IDO Calendar"
    },
    {
      id: 10,
      title: "Hyperliquid Token Listing",
      date: "Jun 28, 2026",
      month: "June 2026",
      time: "10:00 UTC",
      type: "IEO",
      importance: "Medium",
      coin: "HL",
      description: "Perpetual DEX Appchain native token official listing event on top tier exchanges.",
      location: "Major Exchanges",
      color: "border-blue-400",
      bg: "bg-blue-400/10",
      text: "text-blue-400",
      category: "ICO, IEO, IDO Calendar"
    }
  ];

  const filteredEvents = realEvents.filter(e => {
    const matchCategory = activeCategory === "All" || e.category === activeCategory;
    const matchImportance = activeImportance.includes(e.importance);
    
    let matchDate = true;
    if (fromDate || toDate) {
      let dateString = e.date;
      if (dateString.includes("-")) {
        dateString = dateString.split("-")[0] + dateString.slice(-5); // "Feb 18-20, 2025" -> "Feb 18, 2025"
      }
      const parsedDate = new Date(dateString);
      const fallbackDate = new Date(e.month);
      const eventTime = isNaN(parsedDate.getTime()) ? fallbackDate.getTime() : parsedDate.getTime();
      
      if (fromDate) {
        if (eventTime < new Date(fromDate).getTime()) matchDate = false;
      }
      if (toDate) {
        // Set to end of day for inclusive comparison
        const toDateTime = new Date(toDate);
        toDateTime.setHours(23, 59, 59, 999);
        if (eventTime > toDateTime.getTime()) matchDate = false;
      }
    }
    
    return matchCategory && matchImportance && matchDate;
  });

  const groupedEvents = filteredEvents.reduce((acc, event) => {
    if (!acc[event.month]) acc[event.month] = [];
    acc[event.month].push(event);
    return acc;
  }, {} as Record<string, typeof realEvents>);

  const monthOrder = ["June 2026", "July 2026", "August 2026", "September 2026"];
  const sortedMonths = Object.keys(groupedEvents).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-strong pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Crypto Event Calendar</h1>
            <p className="text-text-muted max-w-2xl">Track upcoming token unlocks, mainnet launches, macro-economic events, and major crypto conferences globally.</p>
          </div>
          
          <div className="flex gap-2">
            <button className="px-4 py-2.5 rounded-lg btn-primary text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Submit Event
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar: Filters */}
          <div className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
            <div className="soft-card p-5 rounded-2xl border border-border-light bg-surface/80">
              <h3 className="font-display font-bold text-[#8AA0E5] mb-4 border-b border-border-strong pb-2">Filter by Date</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">From Date</label>
                  <input 
                    type="date" 
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors dark:[color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">To Date</label>
                  <input 
                    type="date" 
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors dark:[color-scheme:dark]"
                  />
                </div>
                {(fromDate || toDate) && (
                  <button 
                    onClick={() => { setFromDate(""); setToDate(""); }}
                    className="text-xs font-bold text-text-muted hover:text-foreground mt-1 text-left transition-colors flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Clear Dates
                  </button>
                )}
              </div>
            </div>

            <div className="soft-card p-5 rounded-2xl border border-border-light bg-surface/80">
              <h3 className="font-display font-bold text-[#8AA0E5] mb-4 border-b border-border-strong pb-2">Filter by Category</h3>
              <div className="flex flex-col gap-3">
                {categories.map((cat, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category"
                      checked={activeCategory === cat} 
                      onChange={() => setActiveCategory(cat)}
                      className="w-4 h-4 rounded-full border-white/20 bg-black/20 text-primary focus:ring-primary focus:ring-offset-0" 
                    />
                    <span className={`text-sm transition-colors ${activeCategory === cat ? 'text-foreground font-bold' : 'text-text-muted group-hover:text-foreground'}`}>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="soft-card p-5 rounded-2xl border border-border-light bg-surface/80">
              <h3 className="font-display font-bold text-[#8AA0E5] mb-4 border-b border-border-strong pb-2">Importance</h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={activeImportance.includes("Critical")}
                    onChange={() => toggleImportance("Critical")}
                    className="w-4 h-4 rounded border-white/20 bg-black/20 text-red-500 focus:ring-red-500 focus:ring-offset-0" 
                  />
                  <span className={`text-sm font-medium ${activeImportance.includes("Critical") ? 'text-red-400' : 'text-red-400/50'}`}>Critical</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={activeImportance.includes("High")}
                    onChange={() => toggleImportance("High")}
                    className="w-4 h-4 rounded border-white/20 bg-black/20 text-orange-500 focus:ring-orange-500 focus:ring-offset-0" 
                  />
                  <span className={`text-sm font-medium ${activeImportance.includes("High") ? 'text-orange-400' : 'text-orange-400/50'}`}>High</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={activeImportance.includes("Medium")}
                    onChange={() => toggleImportance("Medium")}
                    className="w-4 h-4 rounded border-white/20 bg-black/20 text-blue-500 focus:ring-blue-500 focus:ring-offset-0" 
                  />
                  <span className={`text-sm font-medium ${activeImportance.includes("Medium") ? 'text-blue-400' : 'text-blue-400/50'}`}>Medium</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Content: Events List */}
          <div className="flex-1 flex flex-col gap-8">
            {sortedMonths.length > 0 ? (
              sortedMonths.map((month) => (
                <div key={month} className="relative">
                  <div className="sticky top-0 z-20 pt-4 pb-2 bg-background/80 backdrop-blur-xl mb-6 pl-2 sm:pl-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8AA0E5] text-white shrink-0 shadow-lg shadow-[#8AA0E5]/30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-display font-bold text-[#8AA0E5] whitespace-nowrap tracking-wide">{month}</h2>
                      <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {groupedEvents[month].map((event) => (
                      <div key={event.id} className={`soft-card p-6 rounded-2xl border-l-4 ${event.color} border-t border-r border-b border-border-light bg-surface/80 hover:bg-surface-hover/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`px-3 py-1.5 rounded-lg ${event.bg} ${event.text} text-xs font-bold uppercase tracking-wider`}>
                              {event.type}
                            </div>
                            {event.importance === "Critical" && (
                              <div className="flex items-center gap-1 text-red-500 text-xs font-bold uppercase animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Critical
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-text-dim font-medium">
                            <div className="flex items-center gap-1.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {event.date}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {event.time}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-border-strong flex items-center justify-center font-bold text-foreground text-xs mt-1">
                            {event.coin}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-light transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed mb-4">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-medium text-text-dim">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-border-light flex justify-end">
                          <button className="text-sm font-bold text-primary hover:text-foreground transition-colors flex items-center gap-1">
                            Add to Calendar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center text-3xl mb-4 text-foreground/50">📅</div>
                <h3 className="text-xl font-bold text-foreground mb-2">No Events Found</h3>
                <p className="text-text-muted">There are currently no events for this category.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-text-muted">Loading calendar...</div>}>
      <CalendarContent />
    </Suspense>
  );
}
