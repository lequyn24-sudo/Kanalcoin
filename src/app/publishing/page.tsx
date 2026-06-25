"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PublishingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'Press Release',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative soft-card overflow-hidden rounded-3xl p-10 md:p-16 border border-border-light bg-surface/80 flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-light/20 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00FFAA]/10 to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-[#8AA0E5] font-bold text-sm mb-6 relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#8AA0E5] animate-pulse"></span>
            Reach The Web3 Audience
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-black text-foreground mb-6 leading-tight relative z-10 max-w-4xl">
            Amplify Your Project on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-[#8AA0E5]">Kanalcoin</span>
          </h1>
          
          <p className="text-text-muted text-lg md:text-xl max-w-2xl relative z-10">
            Publish your Press Releases or Sponsored Content to reach thousands of crypto investors, developers, and enthusiasts daily.
          </p>
        </div>

        {/* Pricing/Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Press Release Card */}
          <div className="soft-card p-8 rounded-3xl border border-border-light bg-surface/80 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h2 className="text-2xl font-display font-bold text-[#8AA0E5] mb-2">Press Release</h2>
                <p className="text-text-muted text-sm">Perfect for announcements and product launches.</p>
              </div>
              <div className="text-3xl font-display font-black text-foreground">$299</div>
            </div>
            <ul className="flex flex-col gap-4 mb-8 relative z-10">
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                Published within 24 hours
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                Permanent DoFollow Link
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                Listed in "Press Releases" section
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                Included in Weekly Newsletter
              </li>
            </ul>
            <button 
              onClick={() => { setFormData({...formData, type: 'Press Release'}); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full py-4 rounded-xl font-bold bg-surface-hover border border-border-strong text-foreground hover:bg-[#8AA0E5] hover:text-white hover:border-[#8AA0E5] transition-all relative z-10"
            >
              Select Press Release
            </button>
          </div>

          {/* Sponsored Content Card */}
          <div className="soft-card p-8 rounded-3xl border-2 border-[#8AA0E5] bg-surface/80 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group shadow-[0_0_30px_rgba(138,160,229,0.15)]">
            <div className="absolute top-0 right-0 bg-[#8AA0E5] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">Most Popular</div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#8AA0E5]/10 to-transparent pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-6 relative z-10 mt-2">
              <div>
                <h2 className="text-2xl font-display font-bold text-[#8AA0E5] mb-2">Sponsored Content</h2>
                <p className="text-text-muted text-sm">In-depth coverage featured on Homepage.</p>
              </div>
              <div className="text-3xl font-display font-black text-foreground">$599</div>
            </div>
            <ul className="flex flex-col gap-4 mb-8 relative z-10">
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                Everything in Press Release
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                Featured on Homepage (Top Section)
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                Shared across our Social Media
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">✓</div>
                SEO Optimized by our Editorial Team
              </li>
            </ul>
            <button 
              onClick={() => { setFormData({...formData, type: 'Sponsored Content'}); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-[#8AA0E5] to-[#344A83] text-white border border-white/20 shadow-[0_4px_20px_rgba(106,133,211,0.4)] hover:shadow-[0_0_30px_rgba(106,133,211,0.6)] transition-all relative z-10"
            >
              Select Sponsored Content
            </button>
          </div>
          
        </div>

        {/* Contact Form Section */}
        <div id="contact-form" className="soft-card p-8 md:p-12 rounded-3xl border border-border-light bg-surface/80 scroll-mt-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-[#8AA0E5] mb-4 text-center">Submit Your Request</h2>
            <p className="text-text-muted text-center mb-10">Fill out the form below and our editorial team will get back to you within 12 hours.</p>

            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center flex flex-col items-center gap-4 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Request Submitted Successfully!</h3>
                <p className="text-text-muted">Thank you for reaching out. We have received your request for a {formData.type} and will contact you via email shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-lg bg-surface-hover border border-border-strong text-sm font-bold text-foreground hover:bg-surface-active transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@project.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Company / Project Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g. Kanalcoin Foundation"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Publication Type</label>
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Press Release">Press Release ($299)</option>
                      <option value="Sponsored Content">Sponsored Content ($599)</option>
                      <option value="Custom Partnership">Custom Partnership (Let's Talk)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Message or Article Draft Link</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project or share a Google Doc link to your article draft..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-4 w-full py-4 rounded-xl font-bold bg-gradient-to-r from-[#8AA0E5] to-[#344A83] text-white border border-white/20 shadow-[0_4px_20px_rgba(106,133,211,0.4)] hover:shadow-[0_0_30px_rgba(106,133,211,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
