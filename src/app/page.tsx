import NewsCard from "@/components/NewsCard";
import MarketOverview from "@/components/MarketOverview";
import InsightSection from "@/components/InsightSection";
import MarketcapCoinsSection from "@/components/MarketcapCoinsSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import ToolsSection from "@/components/ToolsSection";
import ForumSection from "@/components/ForumSection";
import CalendarSection from "@/components/CalendarSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  const mockHotNews = [
    {
      title: "Bitcoin Surges Past $64k As Institutional Demand Grows",
      excerpt: "The world's largest cryptocurrency saw a massive influx of capital over the weekend, pushing its price above the critical resistance level.",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop",
      date: "Oct 24, 2024",
      category: "Markets",
      slug: "bitcoin-surges-past-64k"
    },
    {
      title: "New DeFi Protocol Reaches $1B TVL in Record Time",
      excerpt: "A newly launched decentralized exchange has broken all previous records for total value locked within its first week of operation.",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=800&auto=format&fit=crop",
      date: "Oct 23, 2024",
      category: "DeFi",
      slug: "new-defi-protocol-1b-tvL"
    },
    {
      title: "Ethereum Core Developers Announce Next Major Upgrade Date",
      excerpt: "The highly anticipated network upgrade promises to significantly reduce transaction fees for Layer 2 rollups.",
      imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=800&auto=format&fit=crop",
      date: "Oct 22, 2024",
      category: "Technology",
      slug: "ethereum-next-upgrade"
    },
    {
      title: "Regulatory Clarity Approaching for Stablecoins in EU",
      excerpt: "European lawmakers have finalized the draft for the comprehensive stablecoin regulatory framework set to launch next year.",
      imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=800&auto=format&fit=crop",
      date: "Oct 21, 2024",
      category: "Regulation",
      slug: "eu-stablecoin-regulation"
    },
    {
      title: "NFT Market Shows Signs of Revival with New Gaming Integrations",
      excerpt: "Top gaming studios announce integration of web3 assets, sparking renewed interest in the NFT sector.",
      imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=800&auto=format&fit=crop",
      date: "Oct 20, 2024",
      category: "NFTs",
      slug: "nft-market-revival-gaming"
    },
    {
      title: "Top 10 Crypto Startups to Watch in Q4 2024",
      excerpt: "A comprehensive look at the most promising early-stage projects building innovative solutions in DeFi and infrastructure.",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=800&auto=format&fit=crop",
      date: "Oct 19, 2024",
      category: "Startups",
      slug: "top-10-crypto-startups-q4"
    }
  ];
  const mockPressReleases = [
    {
      title: "First Block Announces First Solana Sto for U.S. Medical Device Business",
      date: "Oct 24, 2024",
      imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=150&auto=format&fit=crop",
      slug: "first-block-solana-sto"
    },
    {
      title: "LBank Pay Expands to Support BTC, ETH and 20+ Crypto Assets",
      date: "Oct 23, 2024",
      imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=150&auto=format&fit=crop",
      slug: "lbank-pay-expands"
    },
    {
      title: "MEXC May Report: SPACEX Launchpad Oversubscribed 15.5x",
      date: "Oct 22, 2024",
      imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=150&auto=format&fit=crop",
      slug: "mexc-may-report"
    },
    {
      title: "Binance Opens Traders League Season 3 for WLD",
      date: "Oct 21, 2024",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=150&auto=format&fit=crop",
      slug: "binance-opens-traders-league"
    }
  ];

  const mockMostRead = [
    {
      id: 1,
      title: "Solana Network Hits New ATH in Daily Active Users",
      views: "124K views"
    },
    {
      id: 2,
      title: "BlackRock Bitcoin ETF Surpasses $15B in AUM",
      views: "98K views"
    },
    {
      id: 3,
      title: "Federal Reserve Hints at Possible Rate Cuts in Q3",
      views: "85K views"
    }
  ];

  return (
    <main className="w-full flex-1 pb-12 overflow-x-hidden">
      <ScrollReveal>
        <MarketOverview />
      </ScrollReveal>

      {/* Tools & Directory quick links */}
      <ScrollReveal delay={0.1} className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
        <Link href="/tools" className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-[#8AA0E5]/20 hover:text-[#344A83] dark:hover:text-[#A8B8EF] transition-colors flex items-center shadow-sm active:scale-95 active:opacity-80">
          Crypto Tools
        </Link>
        <Link href="/live-price-cryptocurrencies" className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-[#8AA0E5]/20 hover:text-[#344A83] dark:hover:text-[#A8B8EF] transition-colors flex items-center shadow-sm active:scale-95 active:opacity-80">
          Marketcap Coins
        </Link>
        <Link href="/knowledge" className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-[#8AA0E5]/20 hover:text-[#344A83] dark:hover:text-[#A8B8EF] transition-colors flex items-center shadow-sm active:scale-95 active:opacity-80">
          <span>🎓</span> <span className="ml-2">Knowledge</span>
        </Link>
        <Link href="/calendar" className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-[#8AA0E5]/20 hover:text-[#344A83] dark:hover:text-[#A8B8EF] transition-colors flex items-center shadow-sm active:scale-95 active:opacity-80">
          Events Calendar
        </Link>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hot News Column */}
        <ScrollReveal delay={0.2} className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-2">
            <h2 className="text-2xl font-display font-bold text-primary-light flex items-center">
              Hot News
            </h2>
            <Link href="/category/news" className="text-sm text-foreground/60 hover:text-primary-light">View All &raquo;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mockHotNews.map((news) => (
              <NewsCard key={news.slug} {...news} />
            ))}
          </div>
        </ScrollReveal>

        {/* Right Sidebar */}
        <ScrollReveal delay={0.3} className="lg:col-span-1 flex flex-col gap-6 sticky top-8 self-start z-10">
          <div className="soft-card p-5 flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-2 border-b border-border-strong pb-4">
              <h2 className="text-lg text-[#8AA0E5] font-display font-bold flex items-center">
                Press Release <span className="ml-2 text-[10px] bg-primary/10 text-primary-light px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border border-primary/20">Sponsored</span>
              </h2>
            </div>
            
            <div className="flex flex-col">
              {mockPressReleases.slice(0, 3).map((pr) => (
                <Link key={pr.slug} href={`/press-release/${pr.slug}`} className="group flex gap-4 border-b border-border-light py-4 first:pt-4 last:border-0 last:pb-0 items-start">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-border-strong relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pr.imageUrl} alt={pr.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-text-muted mb-1.5 uppercase tracking-wider font-medium">{pr.date}</div>
                    <h3 className="text-[13px] font-semibold text-foreground group-hover:text-[#8AA0E5] transition-colors line-clamp-2 leading-snug">
                      {pr.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/press-release" className="mt-4 text-center text-[13px] w-full bg-surface-hover hover:bg-[#8AA0E5]/15 py-3 rounded-xl transition-all duration-300 text-[#8AA0E5] hover:text-[#344A83] dark:hover:text-[#A8B8EF] font-bold block shadow-sm hover:shadow-md hover:shadow-[#8AA0E5]/20">
              All Press Releases
            </Link>
          </div>

          {/* Most Read Column */}
          <div className="soft-card p-5 flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-4 border-b border-border-strong pb-4">
              <h2 className="text-lg text-[#8AA0E5] font-display font-bold flex items-center gap-2">
                Most Read
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.866 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
              </svg>
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {mockMostRead.slice(0, 3).map((item) => (
                <Link key={item.id} href={`/news/trending-${item.id}`} className="group flex items-start gap-4">
                  <div className="text-3xl font-display font-black text-foreground/10 group-hover:text-[#8AA0E5]/40 transition-colors italic w-6 text-center">
                    {item.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-bold text-text-muted group-hover:text-foreground transition-colors line-clamp-2 leading-snug mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[11px] text-text-dim font-medium uppercase tracking-wider">{item.views}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Subscribe */}
          <div className="soft-card p-5 flex flex-col shadow-sm relative overflow-hidden group border border-border-light">
            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8AA0E5]/20 rounded-full blur-[50px] group-hover:bg-[#8AA0E5]/30 transition-colors pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-hover border border-border-light flex items-center justify-center text-[#8AA0E5] shadow-inner mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h2 className="text-lg text-[#8AA0E5] font-display font-bold">Stay Updated</h2>
              </div>
              <p className="text-[13px] text-text-muted mb-5 leading-relaxed">
                Get the latest crypto news, market insights, and trading signals delivered straight to your inbox daily.
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-surface-hover border border-border-light rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:border-primary-light/50 focus:bg-surface-active/30 transition-all shadow-inner"
                />
                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-[#8AA0E5] to-[#344A83] text-white font-bold py-3 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(106,133,211,0.4)] hover:from-[#A8B8EF] hover:to-[#6A85D3] hover:shadow-[0_0_30px_rgba(106,133,211,0.8)] hover:border-white hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <InsightSection />
      </ScrollReveal>

      {/* New Demo Sections */}
      <div className="mt-16">
        <ScrollReveal>
          <MarketcapCoinsSection />
        </ScrollReveal>
        <ScrollReveal>
          <KnowledgeSection />
        </ScrollReveal>
        <ScrollReveal>
          <ToolsSection />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ScrollReveal>
            <ForumSection />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <CalendarSection />
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
