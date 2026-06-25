"use client";

import React, { useState } from 'react';
import { Metadata } from 'next';
import NewsCard from '@/components/NewsCard';
import Link from 'next/link';
import { mockNews } from '@/data/mockNews';


export default function PressReleasePage() {
  const filteredNews = [...mockNews].reverse().map(n => ({...n, category: "Press Release"}));

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-strong pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Press Releases
            </h1>
            <p className="text-text-muted text-lg max-w-2xl">
              Official announcements, product launches, and news directly from leading web3 projects.
            </p>
          </div>
          
          <div className="flex gap-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search news..." 
                className="bg-surface border border-border-strong text-foreground text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary w-full md:w-64"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3.5 top-3 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center text-3xl mb-4 text-foreground/50">📰</div>
              <h3 className="text-xl font-bold text-foreground mb-2">No News Available</h3>
              <p className="text-text-muted">We are currently gathering news for this category. Please check back later.</p>
            </div>
          )}
        </div>

        {/* Pagination UI */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="p-2 rounded-lg bg-surface-hover text-text-muted hover:text-white hover:bg-[#2A363B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-lg bg-primary text-white font-medium flex items-center justify-center shadow-lg shadow-primary/20">1</button>
          <button className="w-10 h-10 rounded-lg bg-surface-hover text-text-muted hover:text-white hover:bg-[#2A363B] font-medium flex items-center justify-center transition-colors">2</button>
          <button className="w-10 h-10 rounded-lg bg-surface-hover text-text-muted hover:text-white hover:bg-[#2A363B] font-medium flex items-center justify-center transition-colors">3</button>
          <span className="text-text-muted px-2">...</span>
          <button className="w-10 h-10 rounded-lg bg-surface-hover text-text-muted hover:text-white hover:bg-[#2A363B] font-medium flex items-center justify-center transition-colors">12</button>
          <button className="p-2 rounded-lg bg-surface-hover text-text-muted hover:text-white hover:bg-[#2A363B] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
