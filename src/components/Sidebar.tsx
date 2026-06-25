"use client";

import Image from "next/image";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

type MenuItem = {
  title: string;
  icon: string;
  url: string;
  subItems?: { title: string; url: string; }[];
};

const sidebarMenu: MenuItem[] = [
  {
    title: "News",
    icon: "📰",
    url: "/news"
  },
  {
    title: "Insight Hub",
    icon: "💡",
    url: "/insight",
  },
  { title: "Marketcap Coins", icon: "📊", url: "/live-price-cryptocurrencies" },
  { title: "Knowledge", icon: "🎓", url: "/knowledge" },
  { title: "Tools", icon: "🛠️", url: "/tools" },
  { title: "Press Release", icon: "📢", url: "/press-release" },
  { title: "Sponsored", icon: "⭐", url: "/sponsored" },
  { 
    title: "Calendar", 
    icon: "📅", 
    url: "/calendar"
  },
  { 
    title: "About & Legal", 
    icon: "📜", 
    url: "/about"
  },
];

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      setActiveMenu(null);
    } else {
      const activeItem = sidebarMenu.find(item => pathname.startsWith(item.url) && item.url !== '/');
      if (activeItem) {
        setActiveMenu(activeItem.title);
      }
    }
  }, [pathname]);

  const toggleSubMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <aside className="hidden lg:flex w-72 h-full shrink-0 bg-transparent border-r border-border-light flex-col justify-between sticky top-0 z-[100] pb-6">
      {/* Top Section */}
      <div className="p-8 pb-4 flex flex-col gap-6 relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.webp" 
            alt="KanalCoin Logo" 
            width={160} 
            height={80} 
            className="h-10 w-auto group-hover:brightness-125 transition-all"
            priority
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto pt-6 pb-2 custom-scrollbar relative z-10 px-6">
        <nav className="flex flex-col gap-2">
          {sidebarMenu.map((item) => {
            const isActive = activeMenu === item.title;
            return (
              <div key={item.title} className="relative w-full mb-1">
                {/* Áp dụng Gradient vào Container tổng của một mục Active */}
                <div 
                  className={`relative transition-all duration-300 w-full rounded-[24px] overflow-hidden ${isActive ? 'shadow-none border border-[#6A85D3]/30 bg-gradient-to-br from-blue-100/50 to-blue-200/50 dark:from-[#6A85D3]/15 dark:to-[#344A83]/40' : 'hover:bg-white/5 border border-transparent'}`}
                >
                  {/* Vạch sáng xanh ở cạnh trái */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#6A85D3] to-[#344A83] rounded-r-full shadow-[0_0_10px_rgba(106,133,211,0.4)] z-20"></div>
                  )}

                  {item.subItems ? (
                    <div>
                      <button 
                        onClick={() => toggleSubMenu(item.title)}
                        className={`w-full flex items-center justify-between px-5 py-4 transition-all duration-300 text-sm font-semibold group relative
                          ${isActive 
                            ? 'text-foreground' 
                            : 'text-text-muted hover:text-foreground'
                          }
                        `}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <span>{item.title}</span>
                        </div>
                        <span className={`text-[10px] transition-transform duration-300 ${isActive ? 'rotate-180 text-primary-light' : 'text-text-dim'}`}>▼</span>
                      </button>
                      
                      {/* Submenu Accordion */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${isActive ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-[20px] pr-4 py-2 flex flex-col gap-3 relative">
                          <div className="grid grid-cols-1 gap-2">
                            {item.subItems.map(sub => (
                              <Link key={sub.title} href={sub.url} className={`text-[11px] font-medium transition-all flex items-center gap-2 relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full ${activeMenu && sub.url.includes(activeMenu.toLowerCase()) ? 'text-primary-light before:bg-primary-light' : 'text-text-muted hover:text-white before:bg-[#7B929B]'}`}>
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                          
                          {/* Mini Preview inside Sidebar for News */}
                          {item.title === "News" && (
                            <div className="mt-2 bg-surface-hover p-3 rounded-xl border border-border-light">
                              <h4 className="text-[10px] font-bold text-primary-light uppercase tracking-wider mb-2 flex items-center gap-1">
                                <span>🔥</span> Trending
                              </h4>
                              <Link href="/news" className="group/news block mb-2">
                                <p className="text-[11px] font-bold text-foreground group-hover/news:text-primary-light transition-colors line-clamp-2 leading-snug">Bitcoin Mining Difficulty Hits New All-Time High</p>
                                <p className="text-[9px] text-text-muted mt-0.5">2h ago</p>
                              </Link>
                              <Link href="/news" className="group/news block">
                                <p className="text-[11px] font-bold text-foreground group-hover/news:text-primary-light transition-colors line-clamp-2 leading-snug">Major DeFi Protocol Reaches $10B TVL</p>
                                <p className="text-[9px] text-text-muted mt-0.5">8h ago</p>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.url} 
                      className={`flex items-center gap-4 px-5 py-4 transition-all duration-300 text-sm font-semibold group relative
                        ${isActive 
                          ? 'text-foreground' 
                          : 'text-text-muted hover:text-foreground'
                        }
                      `}
                      onClick={() => setActiveMenu(item.title)}
                    >
                      <span className="relative z-10">{item.title}</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-6 flex flex-col gap-4 relative z-10 mt-2">
        <div className="flex items-center justify-between px-3">
          <span className="text-xs font-semibold text-text-dim">Theme</span>
          <ThemeToggle />
        </div>

        {/* Login State Toggle */}
        {isLoggedIn ? (
          <div className="w-full relative group">
            {/* User Profile Box */}
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-[20px] border border-border-light cursor-pointer hover:border-[#8AA0E5]/50 hover:shadow-md hover:shadow-[#8AA0E5]/10 transition-all">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8AA0E5] to-[#344A83] p-[2px] shrink-0">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="User Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                  <span className="text-[13px] font-bold text-foreground truncate">Alex Crypto</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-[10px] text-text-muted">Pro Member</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoggedIn(false);
                }}
                className="p-1.5 text-text-muted hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors shrink-0" 
                title="Log out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full relative group">
            <button 
              onClick={() => router.push('/login')}
              className="w-full flex items-center justify-center gap-2 p-3 bg-surface-hover rounded-[20px] border border-border-light hover:border-[#8AA0E5]/50 hover:bg-[#8AA0E5]/5 transition-all text-[13px] font-bold text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#8AA0E5]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              Sign In / Register
            </button>
          </div>
        )}

        <button 
          onClick={() => {
            if (!isLoggedIn) {
              alert("Please Sign In to access the Publishing Portal!");
            } else {
              window.location.href = "/publishing";
            }
          }}
          className="w-full relative overflow-hidden group bg-gradient-to-r from-[#8AA0E5] to-[#344A83] hover:from-[#A8B8EF] hover:to-[#6A85D3] border border-white/20 py-3 rounded-[20px] text-sm font-bold text-center text-white hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(106,133,211,0.2)] hover:shadow-[0_6px_20px_rgba(106,133,211,0.3)] transition-all block"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>+</span> GET PUBLISHING
          </span>
        </button>
      </div>
    </aside>
  );
}
