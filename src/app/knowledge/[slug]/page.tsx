import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/BackButton';

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Convert slug to a readable title dynamically
  const rawTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = rawTitle.length > 3 ? rawTitle : "Understanding Crypto Concepts";

  // Determine category based on keywords in slug
  let category = "Fundamentals";
  if (slug.includes('ethereum') || slug.includes('smart') || slug.includes('defi') || slug.includes('nft') || slug.includes('fork')) {
    category = "Technology & Ecosystem";
  } else if (slug.includes('mining') || slug.includes('proof') || slug.includes('work') || slug.includes('stake')) {
    category = "Mining & Consensus";
  }

  // Different Unsplash images based on category
  let imageUrl = "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop";
  if (category === "Technology & Ecosystem") imageUrl = "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1200&auto=format&fit=crop";
  if (category === "Mining & Consensus") imageUrl = "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200&auto=format&fit=crop";

  // Generate educational content dynamically
  const generateContent = () => {
    return (
      <>
        <p className="lead text-xl text-text-dim dark:text-gray-200 leading-relaxed mb-8 font-medium">
          Welcome to this comprehensive guide on <strong>{title}</strong>. As the blockchain industry rapidly evolves, understanding core concepts is crucial for anyone looking to participate in the digital economy. This guide breaks down the complex mechanics into easily digestible insights.
        </p>

        <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">1. The Core Concept</h2>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          At its foundation, understanding {title.toLowerCase()} requires a shift from traditional centralized thinking to a decentralized paradigm. The concept fundamentally changes how we perceive trust, value transfer, and data integrity on the internet.
        </p>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          Unlike traditional systems that rely on a central authority or intermediary (like a bank or government), the mechanisms powering this rely on cryptography, distributed networks, and community consensus to function securely and autonomously.
        </p>

        <div className="my-10 p-8 rounded-2xl bg-surface-active/30 border-l-4 border-primary backdrop-blur-md">
          <h3 className="text-xl text-foreground mb-3 mt-0">Why It Matters</h3>
          <ul className="text-text-dim dark:text-gray-200 m-0 space-y-3">
            <li><strong>Decentralization:</strong> It removes single points of failure, making systems highly resilient against attacks and censorship.</li>
            <li><strong>Transparency:</strong> All underlying mechanics and rule sets are open-source and auditable by anyone in the world.</li>
            <li><strong>Innovation:</strong> It serves as a foundational building block for the next generation of Web3 applications and digital finance.</li>
          </ul>
        </div>

        <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">2. How Does It Work in Practice?</h2>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          When we look under the hood, the implementation involves a combination of game theory and advanced computer science. Network participants are economically incentivized to act honestly, while malicious actors are penalized automatically by the protocol's rules.
        </p>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          As adoption grows, we are seeing continuous upgrades to the protocol to handle greater throughput, reduce environmental impact, and improve user accessibility without sacrificing the core tenets of security and decentralization.
        </p>

        <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">3. Conclusion</h2>
        <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
          Mastering the concept of {title.replace('What Is ', '').replace('What Are ', '')} is just the beginning of your journey into the {category} space. By grasping these fundamentals, you are better equipped to navigate the rapidly changing landscape of digital assets.
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
          <Link href="/knowledge" className="hover:text-foreground transition-colors">Knowledge Hub</Link>
          <span>/</span>
          <span className="text-foreground">{category}</span>
        </div>

        {/* Article Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="tech-badge text-white/90 text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
              Knowledge Guide
            </span>
            <span className="text-text-muted text-sm">Educational</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
            {title}
          </h1>
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
        <div className="soft-card p-8 md:p-12 rounded-3xl bg-white/40 dark:bg-[#04080B]/60 backdrop-blur-2xl border border-border-light shadow-2xl mt-4 relative">
          
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-surface-hover border border-border-strong px-4 py-2 rounded-full text-xs text-[#8AA0E5] font-bold tracking-wider shadow-lg">
            {category}
          </div>

          <article className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-light hover:prose-a:text-foreground prose-img:rounded-xl">
            {generateContent()}
          </article>
        </div>

      </div>
    </div>
  );
}
