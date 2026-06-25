import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import NewsCard from '@/components/NewsCard';
import { mockNews } from '@/data/mockNews';

export default async function PressReleaseArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Convert slug to a readable title dynamically
  const rawTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = rawTitle.length > 3 ? rawTitle : "Official Press Release Announcement";

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto mt-6">
        
        {/* Back Button */}
        <BackButton />
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-dim font-medium mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Press Release</span>
        </div>

        {/* Article Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase bg-surface-hover text-[#8AA0E5] px-3 py-1.5 rounded font-bold tracking-wider border border-border-strong">
              Sponsored
            </span>
            <span className="text-text-muted text-sm">Oct 24, 2024</span>
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
            src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200&auto=format&fit=crop"
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Article Body */}
        <div className="soft-card p-8 md:p-12 rounded-3xl bg-white/40 dark:bg-[#04080B]/60 backdrop-blur-2xl border border-border-light shadow-2xl mt-4 relative">
          
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-surface-hover border border-border-strong px-4 py-2 rounded-full text-xs text-[#8AA0E5] font-bold tracking-wider shadow-lg">
            PRESS RELEASE
          </div>

          <article className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-light hover:prose-a:text-foreground prose-img:rounded-xl">
            <p className="lead text-xl text-text-dim dark:text-gray-200 leading-relaxed mb-8 font-medium">
              <strong>NEW YORK, NY / ACCESSWIRE / October 24, 2024 /</strong> Today marks a significant milestone as the company announces <strong>{title}</strong>. This strategic move is expected to accelerate adoption and bring unprecedented value to the ecosystem.
            </p>

            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              "We are thrilled to officially share this news with our community and stakeholders," stated the CEO. "The development of {title.toLowerCase()} has been our primary focus for the past quarters, and seeing it come to fruition demonstrates our commitment to pushing the boundaries of web3 technology."
            </p>

            <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">Strategic Implications</h2>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              The announcement represents a crucial step in the company's roadmap. By integrating new scaling solutions and expanding cross-chain interoperability, the platform is now positioned to capture a larger share of the institutional market. Early partners have already reported significant improvements in capital efficiency.
            </p>

            <h2 className="text-2xl text-foreground mt-12 mb-4 border-b border-border-strong pb-2">About The Company</h2>
            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6 text-sm">
              We are a leading blockchain technology provider focused on building decentralized infrastructure for the next generation of financial applications. With a team of cryptography experts and veteran engineers, we continue to deliver robust, scalable solutions to millions of users worldwide.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-border-light bg-white/[0.02]">
              <h4 className="text-sm text-foreground font-bold mb-2">Media Contact</h4>
              <p className="text-xs text-text-muted m-0">
                Email: press@example.com<br/>
                Website: www.example-crypto-pr.com
              </p>
            </div>
            
          </article>
        </div>

        {/* Suggested Articles */}
        <div className="mt-16 pt-12 border-t border-border-strong">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-foreground">Suggested Press Releases</h2>
            <Link href="/press-release" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">More Press Releases &raquo;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.slice(9, 12).map((news, idx) => (
              <NewsCard key={idx} {...news} category="Press Release" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
