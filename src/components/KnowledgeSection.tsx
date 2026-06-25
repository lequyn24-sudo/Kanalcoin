import Link from "next/link";

export default function KnowledgeSection() {
  const featuredArticles = [
    { 
      category: "Crypto Fundamentals", 
      title: "What Is Cryptocurrency", 
      slug: "what-is-cryptocurrency", 
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=200&auto=format&fit=crop", 
      time: "5 min read" 
    },
    { 
      category: "Technology & Ecosystem", 
      title: "What Are Smart Contracts", 
      slug: "what-are-smart-contracts", 
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=200&auto=format&fit=crop", 
      time: "6 min read" 
    },
    { 
      category: "Mining & Consensus", 
      title: "What Is Bitcoin Mining", 
      slug: "what-is-bitcoin-mining", 
      imageUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=200&auto=format&fit=crop", 
      time: "7 min read" 
    }
  ];

  return (
    <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-4">
        <h2 className="text-2xl font-display font-bold text-[#8AA0E5] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8AA0E5] flex items-center justify-center text-white shadow-[0_0_15px_rgba(106,133,211,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          Crypto Knowledge
        </h2>
        <Link href="/knowledge" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">Start Learning &raquo;</Link>
      </div>

      <div className="text-sm text-text-muted max-w-xl mb-8">
        Master the fundamentals of cryptocurrency, trading, and blockchain technology with our comprehensive guides.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredArticles.map((article, idx) => (
          <Link 
            key={idx} 
            href={`/knowledge/${article.slug}`} 
            className="soft-card p-4 rounded-2xl border border-border-light hover:border-[#8AA0E5]/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(106,133,211,0.15)] bg-surface flex flex-row items-center gap-4"
          >
            <div className="w-24 h-24 rounded-xl bg-surface-hover border border-border-strong flex items-center justify-center shrink-0 shadow-inner overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-[10px] font-bold text-[#8AA0E5] uppercase tracking-wider mb-1.5">
                {article.category}
              </div>
              <h3 className="text-[14px] font-bold text-foreground group-hover:text-[#8AA0E5] transition-colors leading-snug mb-3 line-clamp-2">
                {article.title}
              </h3>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-text-muted text-xs font-medium flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {article.time}
                </span>
                <span className="text-[#8AA0E5] text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Read
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
