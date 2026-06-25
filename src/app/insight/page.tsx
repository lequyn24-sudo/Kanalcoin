import React from 'react';
import Link from 'next/link';
import ScrollReveal from "@/components/ScrollReveal";

export default function InsightPage() {
  const featuredReport = {
    title: "Q3 2026 DeFi Ecosystem Report: The Rise of Real World Assets",
    excerpt: "An in-depth analysis of how Tokenized Treasuries and Real World Assets (RWAs) are reshaping the decentralized finance landscape, with total value locked crossing $15B.",
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200&auto=format&fit=crop",
    date: "Jun 24, 2026",
    category: "Market Report",
    slug: "q3-2026-defi-report",
    readTime: "12 min read"
  };

  const researchArticles = [
    {
      title: "Bitcoin Mining Difficulty Adjusts After Halving",
      excerpt: "Hashrate distribution and miner profitability post-halving. Are we seeing capitulation or consolidation?",
      category: "On-chain Data",
      date: "Jun 22, 2026",
      slug: "bitcoin-mining-difficulty-post-halving",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Ethereum L2 Gas Fees Hit All-Time Low",
      excerpt: "Analyzing the transaction volume and fee structures across Arbitrum, Optimism, and Base after the latest network upgrade.",
      category: "On-chain Data",
      date: "Jun 20, 2026",
      slug: "eth-l2-gas-fees",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Macro Watch: Federal Reserve Rate Decision Impact",
      excerpt: "How the recent FOMC meeting and interest rate holds are affecting liquidity in crypto markets.",
      category: "Macro Economy",
      date: "Jun 18, 2026",
      slug: "macro-watch-fed-rates",
      readTime: "10 min read",
      imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "The Surge of Institutional Stablecoin Adoption",
      excerpt: "Payment giants are increasingly utilizing stablecoins for cross-border settlements. A look into the data.",
      category: "Market Report",
      date: "Jun 15, 2026",
      slug: "institutional-stablecoin-adoption",
      readTime: "9 min read",
      imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <ScrollReveal className="border-b border-border-strong pb-8 mt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[#8AA0E5] font-bold text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Research & Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Insight Hub
          </h1>
          <p className="text-text-muted text-lg max-w-3xl leading-relaxed">
            Premium market reports, on-chain data analysis, and macroeconomic insights from the Kanalcoin Research Team.
          </p>
        </ScrollReveal>

        {/* Featured Report */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl font-display font-bold text-[#8AA0E5] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Featured Report
          </h2>
          <Link href={`/insight/${featuredReport.slug}`} className="group relative soft-card rounded-3xl overflow-hidden border border-border-light bg-surface lg:bg-white/5 lg:backdrop-blur-xl flex flex-col lg:flex-row hover:border-[#8AA0E5]/50 hover:shadow-[0_0_40px_rgba(106,133,211,0.15)] transition-all duration-500">
            <div className="lg:w-3/5 h-[300px] lg:h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featuredReport.imageUrl} alt={featuredReport.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-[#8AA0E5] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                  {featuredReport.category}
                </span>
              </div>
            </div>
            <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-text-dim font-medium mb-4">
                <span>{featuredReport.date}</span>
                <span className="w-1 h-1 rounded-full bg-border-strong"></span>
                <span>{featuredReport.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-[#8AA0E5] transition-colors leading-tight">
                {featuredReport.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-8">
                {featuredReport.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#8AA0E5] group-hover:translate-x-2 transition-transform">
                Read Full Report
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Latest Research Grid */}
        <div>
          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 border-b border-border-strong pb-4">Latest Research</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchArticles.map((article, idx) => (
              <ScrollReveal key={idx} delay={0.1 * (idx % 2 + 1)}>
                <Link href={`/insight/${article.slug}`} className="group soft-card p-0 rounded-2xl border border-border-light bg-surface/80 hover:border-[#8AA0E5]/30 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden h-full">
                <div className="w-full h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#8AA0E5] px-3 py-1.5 rounded-full shadow-md">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs text-text-dim">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#8AA0E5] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs font-medium text-text-dim border-t border-border-light pt-4">
                    <span>{article.readTime}</span>
                    <span className="group-hover:text-foreground transition-colors flex items-center gap-1">
                      View Report &raquo;
                    </span>
                  </div>
                </div>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
