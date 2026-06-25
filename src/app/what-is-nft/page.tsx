import React from 'react';
import Link from 'next/link';

export default function WhatIsNftPage() {
  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-dim mb-8 mt-4 font-medium">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/insight" className="hover:text-foreground transition-colors">Insight</Link>
          <span>/</span>
          <span className="text-foreground">What is NFT?</span>
        </div>

        {/* Article Header */}
        <div className="mb-10">
          <div className="inline-block px-3 py-1 rounded-md bg-purple-500/20 text-purple-400 text-xs font-bold tracking-wider uppercase mb-4 border border-purple-500/30">
            Beginner Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            What is an NFT? <br className="hidden md:block"/>Non-Fungible Tokens Explained
          </h1>
          <div className="flex items-center gap-6 text-text-muted text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
              <span className="font-medium text-foreground">KanalCoin Editorial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Updated Oct 23, 2024
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              4 min read
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-12 relative border border-border-strong">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1200&auto=format&fit=crop" 
            alt="NFT Concept Art" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04080B] via-transparent to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="soft-card p-8 md:p-12 rounded-3xl bg-white/40 dark:bg-[#04080B]/60 backdrop-blur-2xl border border-border-light shadow-2xl">
          <article className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-purple-400 hover:prose-a:text-foreground prose-img:rounded-xl">
            <p className="lead text-xl text-text-dim dark:text-gray-200 leading-relaxed mb-8 font-medium">
              An NFT (Non-Fungible Token) is a unique digital identifier that is recorded on a blockchain and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided.
            </p>

            <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">1. Fungible vs Non-Fungible</h2>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              To understand NFTs, it helps to understand the word <strong>fungible</strong>. Physical money and cryptocurrencies are "fungible," meaning they can be traded or exchanged for one another. They are also equal in value—one dollar is always worth another dollar; one Bitcoin is always equal to another Bitcoin.
            </p>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              <strong>Non-fungible</strong> means the opposite. Each NFT contains a digital signature that makes it impossible for NFTs to be exchanged for or equal to one another (hence, non-fungible).
            </p>

            <div className="my-10 p-8 rounded-2xl bg-surface-active/30 border-l-4 border-purple-500 backdrop-blur-md">
              <h3 className="text-xl text-foreground mb-3 mt-0">Common NFT Use Cases</h3>
              <ul className="text-text-dim dark:text-gray-200 m-0 space-y-3">
                <li><strong>Digital Art:</strong> Proving ownership of digital artworks and generative art collections (like CryptoPunks or Bored Apes).</li>
                <li><strong>Gaming:</strong> In-game assets, characters, and land that players truly own.</li>
                <li><strong>Collectibles:</strong> Digital trading cards and sports moments.</li>
                <li><strong>Real World Assets:</strong> Tokenizing physical real estate or luxury goods.</li>
              </ul>
            </div>

            <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">2. How Do NFTs Work?</h2>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              NFTs exist on a blockchain, which is a distributed public ledger that records transactions. Most NFTs are held on the Ethereum blockchain, although other blockchains (like Solana and Polygon) support them as well.
            </p>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              An NFT is created, or "minted", from digital objects that represent both tangible and intangible items. The data stored inside the NFT points to the location of the actual image, video, or audio file, while the blockchain secures the ledger of who owns it.
            </p>
            
          </article>
        </div>

        {/* Next/Prev Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-border-strong">
          <Link href="/what-is-cryptocurrency" className="flex-1 soft-card p-6 rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="text-[10px] text-text-dim uppercase tracking-wider font-bold mb-2">Previous Guide</div>
            <div className="text-lg font-display font-bold text-foreground group-hover:text-primary-light transition-colors">
              What is Crypto?
            </div>
          </Link>
          <Link href="/insight" className="flex-1 soft-card p-6 rounded-2xl hover:border-primary/50 transition-colors group text-right">
            <div className="text-[10px] text-text-dim uppercase tracking-wider font-bold mb-2">Back to Library</div>
            <div className="text-lg font-display font-bold text-foreground group-hover:text-primary-light transition-colors">
              More Insights
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
