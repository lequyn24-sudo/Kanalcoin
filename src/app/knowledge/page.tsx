import React from 'react';
import Link from 'next/link';

export default function KnowledgePage() {
  // Group 1: Basics
  const basicsGuides = [
    { title: "What Is Cryptocurrency", slug: "what-is-cryptocurrency", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=200&auto=format&fit=crop", time: "5 min read" },
    { title: "What Are Altcoins", slug: "what-are-altcoins", imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=200&auto=format&fit=crop", time: "4 min read" },
    { title: "What Is Stablecoin", slug: "what-is-stablecoin", imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=200&auto=format&fit=crop", time: "5 min read" },
    { title: "What Is Ethereum", slug: "what-is-ethereum", imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=200&auto=format&fit=crop", time: "7 min read" },
  ];

  // Group 2: Tech & Ecosystem
  const techGuides = [
    { title: "What Are Smart Contracts", slug: "what-are-smart-contracts", imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=200&auto=format&fit=crop", time: "6 min read" },
    { title: "What Is DeFi", slug: "what-is-defi", imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=200&auto=format&fit=crop", time: "8 min read" },
    { title: "What Is NFT", slug: "what-is-nft", imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop", time: "5 min read" },
    { title: "What Is A Hard Fork", slug: "what-is-a-hard-fork", imageUrl: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=200&auto=format&fit=crop", time: "4 min read" },
  ];

  // Group 3: Mining & Consensus
  const consensusGuides = [
    { title: "What Is Bitcoin Mining", slug: "what-is-bitcoin-mining", imageUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=200&auto=format&fit=crop", time: "7 min read" },
    { title: "What Is Proof Of Work", slug: "what-is-proof-of-work", imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=200&auto=format&fit=crop", time: "8 min read" },
    { title: "What Is Proof Of Stake", slug: "what-is-proof-of-stake", imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=200&auto=format&fit=crop", time: "6 min read" },
  ];

  const renderGrid = (guides: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {guides.map((guide, idx) => (
        <Link 
          href={`/knowledge/${guide.slug}`} 
          key={idx}
          className="soft-card p-5 rounded-2xl border border-border-light hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(106,133,211,0.15)] bg-surface/80 flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border-strong flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 shadow-inner overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={guide.imageUrl} alt={guide.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-foreground group-hover:text-primary-light transition-colors leading-snug mb-1">
              {guide.title}
            </h3>
            <span className="text-text-muted text-xs font-medium">{guide.time}</span>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden soft-card border border-border-strong p-8 md:p-12 mt-4 academy-bg">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8AA0E5]/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-bold tracking-wider uppercase mb-6 border border-primary/30">
              KanalCoin Academy
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Master Crypto with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-[#8AA0E5]">Kanalcoin Knowledge</span>
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Explore our comprehensive library of 11 essential crypto guides. From basic concepts to advanced consensus mechanisms, everything you need to know is grouped right here.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-10">
          
          <div>
            <div className="flex items-center gap-3 border-b border-border-strong pb-3">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary-light font-bold">1</div>
              <h2 className="text-2xl font-display font-bold text-[#8AA0E5]">Crypto Fundamentals</h2>
            </div>
            {renderGrid(basicsGuides)}
          </div>

          <div>
            <div className="flex items-center gap-3 border-b border-border-strong pb-3">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary-light font-bold">2</div>
              <h2 className="text-2xl font-display font-bold text-[#8AA0E5]">Technology & Ecosystem</h2>
            </div>
            {renderGrid(techGuides)}
          </div>

          <div>
            <div className="flex items-center gap-3 border-b border-border-strong pb-3">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary-light font-bold">3</div>
              <h2 className="text-2xl font-display font-bold text-[#8AA0E5]">Mining & Consensus</h2>
            </div>
            {renderGrid(consensusGuides)}
          </div>

        </div>

      </div>
    </div>
  );
}
