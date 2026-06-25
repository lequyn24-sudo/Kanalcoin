"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

type MenuItem = {
  title: string;
  icon: string;
  url: string;
  subItems?: { title: string; url: string; }[];
};

const mobileMenu: MenuItem[] = [
  { title: "Home", icon: "🏠", url: "/" },
  { title: "News", icon: "📰", url: "/news" },
  { title: "Insight Hub", icon: "💡", url: "/insight" },
  { title: "Marketcap Coins", icon: "📊", url: "/live-price-cryptocurrencies" },
  { title: "Knowledge", icon: "🎓", url: "/knowledge" },
  { title: "Tools", icon: "🛠️", url: "/tools" },
  { title: "Press Release", icon: "📢", url: "/press-release" },
  { title: "Sponsored", icon: "⭐", url: "/sponsored" },
  { title: "Calendar", icon: "📅", url: "/calendar" },
  { title: "Forum", icon: "💬", url: "/forum" },
  { title: "About & Legal", icon: "📜", url: "/about" },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Mobile Sticky Header */}
      <header className="sticky top-0 z-[90] w-full glass px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.webp" 
            alt="KanalCoin Logo" 
            width={120} 
            height={40} 
            className="h-8 w-auto"
            priority
          />
        </Link>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg bg-surface-hover border border-border-light text-foreground active:scale-90 active:bg-border-strong transition-all"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>

      {/* Slide-out Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-[101] w-4/5 max-w-sm glass bg-white/95 dark:bg-transparent border-l border-border-light shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-border-light">
          <span className="font-display font-bold text-lg text-foreground">Menu</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-surface-hover text-text-muted hover:text-foreground active:scale-90 active:bg-border-strong transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
          <nav className="flex flex-col gap-2">
            {mobileMenu.map((item) => {
              const isActive = pathname.startsWith(item.url) && item.url !== '/';
              return (
                <Link 
                  key={item.title} 
                  href={item.url}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all active:scale-[0.98] active:opacity-80 ${
                    isActive 
                      ? 'bg-[#8AA0E5]/10 text-[#8AA0E5] border border-[#8AA0E5]/20' 
                      : 'text-text-muted hover:bg-surface-hover hover:text-foreground border border-transparent'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-border-light flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-text-muted">Theme</span>
            <ThemeToggle />
          </div>
          <Link href="/publishing" className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#6A85D3] to-[#344A83] text-white font-bold shadow-lg shadow-[#6A85D3]/20 transition-all active:scale-95 active:shadow-none hover:shadow-[#6A85D3]/40">
            + GET PUBLISHING
          </Link>
        </div>
      </div>
    </div>
  );
}
