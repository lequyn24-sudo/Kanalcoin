import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import NewsCard from '@/components/NewsCard';
import { mockNews } from '@/data/mockNews';

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Convert slug to a readable title dynamically
  const rawTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = rawTitle.length > 3 ? rawTitle : "Breaking Crypto News: Market Update";

  // Determine category based on keywords in slug
  let category = "Crypto News";
  if (slug.includes('bitcoin') || slug.includes('btc') || slug.includes('ordinals')) category = "Bitcoin";
  else if (slug.includes('ethereum') || slug.includes('eth') || slug.includes('eigenlayer')) category = "Ethereum";
  else if (slug.includes('defi') || slug.includes('uniswap') || slug.includes('aave')) category = "DeFi";
  else if (slug.includes('nft')) category = "NFT";
  else if (slug.includes('solana')) category = "Solana";

  // Different Unsplash images based on category
  let imageUrl = "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1200&auto=format&fit=crop";
  if (category === "Bitcoin") imageUrl = "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop";
  if (category === "Ethereum") imageUrl = "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1200&auto=format&fit=crop";
  if (category === "DeFi") imageUrl = "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1200&auto=format&fit=crop";

  // Generate dynamic content to make it look like a real contextual article
  const generateContent = () => {
    return (
      <>
        <p className="lead text-xl text-text-dim dark:text-gray-200 leading-relaxed mb-8 font-medium">
          The cryptocurrency market is buzzing today following recent developments surrounding <strong>{title}</strong>. This major event has caused significant ripples across major digital asset exchanges and communities, capturing the attention of retail and institutional investors alike.
        </p>

        <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">1. Market Impact and Analysis</h2>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          According to industry experts, the implications of "{title}" are far-reaching. While some analysts maintain a cautious outlook regarding the short-term volatility, the general sentiment within the {category} ecosystem remains overwhelmingly positive. On-chain data indicates a noticeable shift in trading volumes immediately following the initial reports.
        </p>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          "This is exactly the kind of catalyst we've been anticipating," noted a senior quantitative analyst from a leading digital asset firm. "When you look at the fundamental metrics of the {category} network, it's clear that the infrastructure is maturing to support these institutional-grade movements without faltering."
        </p>

        <div className="my-10 p-8 rounded-2xl bg-surface-active/30 border-l-4 border-primary backdrop-blur-md">
          <h3 className="text-xl text-foreground mb-3 mt-0">Key Takeaways</h3>
          <ul className="text-text-dim dark:text-gray-200 m-0 space-y-3">
            <li><strong>Immediate Market Reaction:</strong> Trading volumes spiked significantly across major centralized and decentralized exchanges globally.</li>
            <li><strong>Long-term Outlook:</strong> Institutional players are likely to use this event as a foundation for future capital allocation in {category}.</li>
            <li><strong>Technical Milestones:</strong> The underlying blockchain networks processed the sudden surge in activity demonstrating improved scalability.</li>
          </ul>
        </div>

        <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">2. What's Next for {category}?</h2>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          Looking ahead, the focus now shifts to how regulatory bodies and major financial institutions will respond to these developments. For everyday users and investors in the {category} space, this marks yet another milestone in the ongoing maturation of decentralized digital assets.
        </p>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          The KanalCoin editorial team will continue to monitor the situation closely and provide updates as more data becomes available on the blockchain explorer. Stay tuned for further technical analysis and market commentary.
        </p>
      </>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto mt-6">
        
        {/* Back Button */}
        <BackButton />
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-dim font-medium mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/news" className="hover:text-foreground transition-colors">News</Link>
          <span>/</span>
          <Link href={category === "Crypto News" ? "/news" : `/tag/${category.toLowerCase()}`} className="hover:text-foreground transition-colors">{category}</Link>
        </div>

        {/* Article Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="tech-badge text-white/90 text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
              {category}
            </span>
            <span className="text-text-muted text-sm">Oct 24, 2024 • 5 min read</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
            {title}
          </h1>
          
          {/* Author Info */}
          <div className="flex items-center gap-4 py-4 border-y border-border-strong mt-2">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-light font-bold text-xl border border-border-strong">
              K
            </div>
            <div>
              <div className="text-foreground font-medium">KanalCoin Desk</div>
              <div className="text-text-dim text-xs">Editorial Team</div>
            </div>
            
            <div className="ml-auto flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-foreground/70 transition-colors border border-border-light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-foreground/70 transition-colors border border-border-light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full aspect-[21/9] relative rounded-3xl overflow-hidden border border-border-strong shadow-2xl mt-4">
          <div className="absolute inset-0 bg-surface animate-pulse"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Article Body */}
        <div className="soft-card p-8 md:p-12 rounded-3xl bg-white/40 dark:bg-[#04080B]/60 backdrop-blur-2xl border border-border-light shadow-2xl mt-4">
          <article className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-light hover:prose-a:text-foreground prose-img:rounded-xl">
            {generateContent()}
          </article>
        </div>

        {/* Suggested Articles */}
        <div className="mt-16 pt-12 border-t border-border-strong">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-foreground">Suggested Reads</h2>
            <Link href="/news" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">More News &raquo;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.slice(0, 3).map((news, idx) => (
              <NewsCard key={idx} {...news} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
