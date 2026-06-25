"use client";

import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const megaMenuData = {
  insight: [
    { title: "What is Cryptocurrency?", url: "/insight/what-is-cryptocurrency" },
    { title: "What is Ethereum?", url: "/insight/what-is-ethereum" },
    { title: "What are Smart Contracts?", url: "/insight/what-are-smart-contracts" },
    { title: "What is DeFi?", url: "/insight/what-is-defi" },
    { title: "What is NFT?", url: "/insight/what-is-nft" },
  ],
  directory: [
    { title: "Knowledge Hub", url: "/knowledge" },
    { title: "Market Reports", url: "/insight" },
    { title: "On-chain Data", url: "/insight" },
    { title: "Macro Analysis", url: "/insight" },
  ],
  tools: [
    { title: "Crypto Calculator", url: "/calculator" },
    { title: "Heatmap", url: "/cryptocurrency-heatmap" },
  ],

  calendar: [
    { title: "Crypto Events", url: "/crypto-events" },
    { title: "ICO / IDO", url: "/ido-ieo-ico-calendar" },
    { title: "Airdrops", url: "/airdrop" },
  ]
};

export default function FloatingHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="sticky top-4 z-[100] w-full flex justify-center px-4 mt-2 mb-8">
      <header className="w-full max-w-6xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-primary/10 transition-all duration-300 border border-white/20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.webp" 
              alt="KanalCoin Logo" 
              width={160} 
              height={80} 
              className="h-8 w-auto group-hover:brightness-125 transition-all"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" onMouseLeave={handleMouseLeave}>
          {/* Dropdown items */}
          {Object.keys(megaMenuData).map((key) => (
            <div 
              key={key}
              className="relative py-2 cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(key)}
            >
              <span className={`text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 ${activeMenu === key ? 'text-primary-light' : 'hover:text-primary-light'}`}>
                {key} <span className="text-[8px] opacity-50">▼</span>
              </span>
            </div>
          ))}

          <Link href="/news" className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider hover:text-primary-light transition-colors py-2">
            News
          </Link>
          <Link href="/live-price-cryptocurrencies" className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider hover:text-primary-light transition-colors py-2">
            Marketcap Coins
          </Link>
          <Link href="/press-release" className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider hover:text-primary-light transition-colors py-2">
            Press Release
          </Link>
          <Link href="/sponsored" className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider hover:text-primary-light transition-colors py-2">
            Sponsored
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/publishing" className="hidden md:flex glass bg-primary/20 text-primary-light border border-primary/30 px-3 py-1.5 xl:px-4 rounded-full text-[10px] xl:text-xs font-bold uppercase tracking-wider hover:bg-primary/40 transition-colors items-center gap-1">
            <span>+</span> Get Publishing
          </Link>
        </div>
      </header>

      {/* Mega Menu Overlay */}
      <div 
        className={`absolute top-[75px] w-[95%] max-w-4xl z-[90] bg-[#0b1120]/95 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300 border border-border-strong ${
          activeMenu ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
        onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
        onMouseLeave={handleMouseLeave}
      >
        {activeMenu && (
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-display font-bold text-primary-light mb-6 uppercase tracking-widest border-b border-border-strong pb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Explore {activeMenu}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {(megaMenuData as any)[activeMenu]?.map((item: any) => (
                  <Link key={item.title} href={item.url} className="text-sm font-medium text-foreground/80 hover:text-primary-light hover:translate-x-1 transition-all flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary-light group-hover:scale-150 transition-all"></div>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="col-span-1 bg-white/5 rounded-2xl p-6 border border-border-light relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/30 to-blue-500/20 mb-5 flex items-center justify-center border border-border-strong shadow-inner">
                <span className="text-5xl drop-shadow-lg">🌟</span>
              </div>
              <h4 className="font-bold text-base mb-2 text-primary-light">Featured {activeMenu}</h4>
              <p className="text-xs leading-relaxed text-foreground/60">Discover the latest updates, trending topics, and premium content in our dedicated {activeMenu} section.</p>
              
              <button className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary hover:underline flex items-center gap-1">
                View All <span className="text-[10px]">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
