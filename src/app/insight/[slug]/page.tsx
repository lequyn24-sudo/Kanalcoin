import React from 'react';
import Link from 'next/link';
import BackButton from '@/components/BackButton';

export default async function InsightReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Transform slug back to title format
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto mt-6">
        
        {/* Back Button */}
        <BackButton />
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-dim font-medium mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/insight" className="hover:text-foreground transition-colors">Insight Hub</Link>
          <span>/</span>
          <span className="text-foreground">Report</span>
        </div>

        {/* Article Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="tech-badge text-white/90 text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full backdrop-blur-md bg-[#8AA0E5]">
              Market Report
            </span>
            <span className="text-text-muted text-sm">Jun 24, 2026 • 12 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-4 py-6 border-y border-border-strong">
            <div className="w-12 h-12 rounded-full bg-surface-hover border border-border-strong flex items-center justify-center shrink-0">
              <span className="text-lg font-bold text-primary-light">KR</span>
            </div>
            <div>
              <div className="font-bold text-foreground">Kanalcoin Research Team</div>
              <div className="text-sm text-text-muted">Institutional Research</div>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-text-muted hover:text-[#1DA1F2] transition-colors border border-border-light hover:border-[#1DA1F2]/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-text-muted hover:text-primary-light transition-colors border border-border-light hover:border-primary-light/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden relative shadow-xl border border-border-light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200&auto=format&fit=crop" 
            alt="Report Cover" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none prose-p:text-text-muted prose-p:leading-relaxed prose-headings:text-foreground prose-headings:font-display prose-a:text-primary-light hover:prose-a:text-primary-light/80">
          <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
            This report dives deep into the emerging trends of Q3 2026, analyzing on-chain data to reveal institutional capital flows and the burgeoning growth of Real World Assets (RWAs) across top tier smart contract platforms.
          </p>

          <h2 className="text-2xl text-[#8AA0E5] mt-12 mb-4 border-b border-border-strong pb-2">1. Macro Overview & Liquidity Metrics</h2>
          <p>
            The global macroeconomic environment has significantly shifted over the last quarter. Central banks holding interest rates steady have inadvertently catalyzed a search for yield within decentralized protocols. We observe a substantial pivot towards tokenized U.S. treasuries, creating a stable foundation for a new wave of DeFi composability.
          </p>
          <div className="my-8 soft-card p-6 border border-border-strong rounded-2xl bg-surface/50 text-center">
            <div className="text-sm text-text-dim mb-2 uppercase tracking-wider font-bold">Chart 1: Total Value Locked in RWAs</div>
            <div className="h-[250px] w-full bg-gradient-to-t from-[#8AA0E5]/10 to-transparent flex items-end justify-between px-4 pb-0 pt-8 rounded-xl border border-border-light">
               <div className="w-[10%] bg-[#8AA0E5]/40 hover:bg-[#8AA0E5] transition-colors h-[20%] rounded-t-md"></div>
               <div className="w-[10%] bg-[#8AA0E5]/40 hover:bg-[#8AA0E5] transition-colors h-[35%] rounded-t-md"></div>
               <div className="w-[10%] bg-[#8AA0E5]/40 hover:bg-[#8AA0E5] transition-colors h-[50%] rounded-t-md"></div>
               <div className="w-[10%] bg-[#8AA0E5]/40 hover:bg-[#8AA0E5] transition-colors h-[60%] rounded-t-md"></div>
               <div className="w-[10%] bg-[#8AA0E5]/40 hover:bg-[#8AA0E5] transition-colors h-[85%] rounded-t-md"></div>
               <div className="w-[10%] bg-primary hover:bg-primary-light transition-colors h-[100%] rounded-t-md relative shadow-[0_0_15px_rgba(0,255,170,0.5)]"></div>
            </div>
          </div>

          <h2 className="text-2xl text-[#8AA0E5] mt-12 mb-4 border-b border-border-strong pb-2">2. Strategic Implications for Investors</h2>
          <p>
            With the integration of traditional financial assets on-chain, the barrier between TradFi and DeFi continues to blur. Institutional entities are now executing large-scale transactions with minimal slippage directly on Layer 2 networks.
          </p>
          <ul className="list-disc pl-6 my-6 space-y-2 text-text-muted">
            <li><strong>Stablecoin Velocity:</strong> Has increased by 45% compared to Q2, indicating high transaction utility over pure holding.</li>
            <li><strong>Lending Protocols:</strong> Dominance is shifting towards platforms offering native yield derived from external real-world cash flows.</li>
            <li><strong>Risk Premium:</strong> On-chain yields must now outpace the risk-free rate plus smart contract risk to attract fresh capital.</li>
          </ul>

          <h2 className="text-2xl text-[#8AA0E5] mt-12 mb-4 border-b border-border-strong pb-2">3. Conclusion & Outlook</h2>
          <p>
            As we progress into the final quarter of the year, the structural changes witnessed in Q3 will likely serve as the bedrock for the next major market cycle. Monitoring these capital flows will be critical for alpha generation.
          </p>

          {/* Premium Paywall Demo */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-surface-hover to-surface border border-border-light relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8AA0E5]/10 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold text-foreground mb-2">Want to download the full PDF report?</h3>
            <p className="text-text-muted mb-6 text-sm">Get access to raw data, high-resolution charts, and exclusive expert commentary.</p>
            <button className="px-6 py-3 bg-[#8AA0E5] hover:bg-[#6A85D3] text-white font-bold rounded-xl transition-colors shadow-lg">
              Unlock Premium Access
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
