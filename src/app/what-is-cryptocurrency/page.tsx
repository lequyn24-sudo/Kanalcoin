import React from 'react';
import Link from 'next/link';

export default function WhatIsCryptoPage() {
  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-dim mb-8 mt-4 font-medium">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/insight" className="hover:text-foreground transition-colors">Insight</Link>
          <span>/</span>
          <span className="text-foreground">What is Cryptocurrency?</span>
        </div>

        {/* Article Header */}
        <div className="mb-10">
          <div className="inline-block px-3 py-1 rounded-md bg-primary/20 text-primary-light text-xs font-bold tracking-wider uppercase mb-4">
            Beginner Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            What is Cryptocurrency? <br className="hidden md:block"/>The Ultimate Beginner's Guide
          </h1>
          <div className="flex items-center gap-6 text-text-muted text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500"></div>
              <span className="font-medium text-foreground">KanalCoin Editorial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Updated Oct 24, 2024
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              5 min read
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-12 relative border border-border-strong">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1200&auto=format&fit=crop" 
            alt="Cryptocurrency Concept" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04080B] via-transparent to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="soft-card p-8 md:p-12 rounded-3xl bg-white/40 dark:bg-[#04080B]/60 backdrop-blur-2xl border border-border-light shadow-2xl">
          <article className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-light hover:prose-a:text-foreground prose-img:rounded-xl">
            <p className="lead text-xl text-text-dim dark:text-gray-200 leading-relaxed mb-8 font-medium">
              Cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology.
            </p>

            <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">1. The Core Concept</h2>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation. The word "cryptocurrency" is derived from the encryption techniques which are used to secure the network.
            </p>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              Blockchains, which are organizational methods for ensuring the integrity of transactional data, are an essential component of many cryptocurrencies. Many experts believe that blockchain and related technology will disrupt many industries, including finance and law.
            </p>

            <div className="my-10 p-8 rounded-2xl bg-surface-active/30 border-l-4 border-primary backdrop-blur-md">
              <h3 className="text-xl text-foreground mb-3 mt-0">Key Takeaways</h3>
              <ul className="text-text-dim dark:text-gray-200 m-0 space-y-3">
                <li>Cryptocurrency is a form of digital asset based on a network that is distributed across a large number of computers.</li>
                <li>They are known for their decentralization, transparency, and immutability.</li>
                <li>Bitcoin is the most popular and valuable cryptocurrency.</li>
              </ul>
            </div>

            <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">2. How Do Cryptocurrencies Work?</h2>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders. Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins.
            </p>
            
            <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">3. The Future of Crypto</h2>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              The cryptocurrency market has grown from a niche technological curiosity into a global financial phenomenon. With institutional adoption increasing and regulatory frameworks becoming clearer, digital assets are rapidly integrating into the traditional financial system.
            </p>
          </article>
        </div>

        {/* Next/Prev Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-border-strong">
          <Link href="/insight" className="flex-1 soft-card p-6 rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="text-[10px] text-text-dim uppercase tracking-wider font-bold mb-2">Back to Library</div>
            <div className="text-lg font-display font-bold text-foreground group-hover:text-primary-light transition-colors">
              Explore More Guides
            </div>
          </Link>
          <Link href="/what-is-nft" className="flex-1 soft-card p-6 rounded-2xl hover:border-primary/50 transition-colors group text-right">
            <div className="text-[10px] text-text-dim uppercase tracking-wider font-bold mb-2">Up Next</div>
            <div className="text-lg font-display font-bold text-foreground group-hover:text-primary-light transition-colors">
              What is NFT?
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
