"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PublishingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Press Release',
    coverImage: '',
    content: '',
    tags: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to save article
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
        <div className="max-w-4xl mx-auto mt-20 text-center animate-fade-in-up">
          <div className="w-24 h-24 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-display font-black text-foreground mb-4">Article Submitted!</h1>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Your article has been submitted to the editorial team for review. You will be notified once it is published on KanalCoin.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => {
                setSubmitted(false);
                setFormData({ title: '', category: 'Press Release', coverImage: '', content: '', tags: '' });
              }}
              className="px-6 py-3 rounded-xl bg-surface-hover border border-border-strong text-sm font-bold text-foreground hover:bg-surface-active transition-colors"
            >
              Write Another
            </button>
            <Link 
              href="/"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8AA0E5] to-[#344A83] text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border-strong mt-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">Publishing Portal</h1>
            <p className="text-text-muted text-sm">Create and submit your articles directly to the KanalCoin network.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-xl border border-border-strong text-sm font-bold text-text-muted hover:bg-surface-hover hover:text-foreground transition-all">
              Save Draft
            </button>
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#8AA0E5] to-[#344A83] text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit for Review'}
              {!isSubmitting && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Editor Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Editor Area */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="soft-card p-6 bg-surface/80 border border-border-light rounded-[24px]">
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter an engaging title..."
                className="w-full bg-transparent text-3xl font-display font-bold text-foreground focus:outline-none placeholder:text-foreground/20 mb-6"
              />
              
              {/* Mock Toolbar */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-border-strong overflow-x-auto custom-scrollbar">
                {['B', 'I', 'U', 'H1', 'H2', 'Link', 'Quote', 'Image'].map(tool => (
                  <button key={tool} className="w-8 h-8 rounded bg-surface-hover border border-border-light text-xs font-bold text-text-muted hover:text-foreground hover:bg-surface-active flex items-center justify-center shrink-0">
                    {tool}
                  </button>
                ))}
              </div>

              <textarea 
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                placeholder="Start writing your amazing article here..."
                className="w-full h-[500px] bg-transparent text-[15px] leading-relaxed text-foreground focus:outline-none placeholder:text-foreground/20 resize-none custom-scrollbar"
              />
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="soft-card p-6 bg-surface/80 border border-border-light rounded-[24px] flex flex-col gap-5">
              <h3 className="text-lg font-bold text-foreground border-b border-border-strong pb-3">Settings</h3>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[#8AA0E5] transition-colors appearance-none cursor-pointer"
                >
                  <option value="Press Release">Press Release</option>
                  <option value="Sponsored Content">Sponsored Content</option>
                  <option value="Research & Insight">Research & Insight</option>
                  <option value="Opinion">Opinion</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Cover Image URL</label>
                <input 
                  type="url" 
                  value={formData.coverImage}
                  onChange={(e) => setFormData({...formData, coverImage: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                  className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[#8AA0E5] transition-colors"
                />
                {formData.coverImage && (
                  <div className="mt-2 w-full h-32 rounded-xl overflow-hidden border border-border-strong relative">
                    <img src={formData.coverImage} alt="Cover Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Invalid+Image+URL')} />
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Tags</label>
                <input 
                  type="text" 
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="e.g. Bitcoin, DeFi, NFT (comma separated)"
                  className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[#8AA0E5] transition-colors"
                />
              </div>
            </div>

            {/* Publishing Guidelines Widget */}
            <div className="p-6 rounded-[24px] bg-primary/5 border border-primary/20">
              <h4 className="text-sm font-bold text-primary-light mb-3 flex items-center gap-2">
                <span>💡</span> Editor's Tips
              </h4>
              <ul className="text-xs text-text-muted space-y-2">
                <li>• Use an engaging, click-worthy title.</li>
                <li>• High-quality cover images perform 40% better.</li>
                <li>• Format with headings (H2, H3) for readability.</li>
                <li>• Ensure all financial claims are properly sourced.</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
