"use client";

import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Us" },
    { id: "editorial", label: "Editorial Policy" },
    { id: "disclaimer", label: "Financial Disclaimer" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Service" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full animate-fade-in pb-20">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-[#344A83] mb-4">
          About & Legal
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Learn about KanalCoin's mission, our editorial standards, and important legal information.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 shrink-0 soft-card p-4 overflow-x-auto custom-scrollbar flex md:flex-col gap-2 md:sticky md:top-8 z-10 sticky-tab-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left px-5 py-3 rounded-xl transition-all font-semibold whitespace-nowrap text-sm ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#8AA0E5] to-[#344A83] text-white shadow-md scale-[1.02]"
                  : "text-text-muted hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full soft-card p-6 md:p-10 min-h-[600px] text-foreground text-[15px] leading-relaxed">
          {activeTab === "about" && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-primary-light mb-6">About KanalCoin</h2>
              <p className="mb-4 text-text-muted">
                Welcome to <strong>KanalCoin</strong>, your premier destination for the latest news, insights, and tools in the cryptocurrency and blockchain ecosystem. Founded in 2024, our mission is to demystify the complex world of Web3 and empower our readers with accurate, timely, and actionable information.
              </p>
              <p className="mb-4 text-text-muted">
                We believe that decentralized technologies are reshaping the future of finance, governance, and the internet itself. Our team of dedicated researchers, journalists, and developers work around the clock to bring you the most critical updates and powerful tools like our Portfolio Tracker and Impermanent Loss Calculator.
              </p>
              <div className="mt-8 p-6 bg-surface-hover rounded-xl border border-border-light">
                <h3 className="text-lg font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-text-muted m-0">To become the most trusted and comprehensive command center for navigating the decentralized economy.</p>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-foreground mb-4">Join Our Community</h3>
                <p className="text-sm text-text-muted mb-6">Stay updated with the latest news, market insights, and connect with other crypto enthusiasts across our official channels.</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground/5 text-foreground hover:bg-foreground hover:text-background border border-foreground/10 transition-all font-semibold text-sm group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
                    X (Twitter)
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#229ED9]/10 text-[#229ED9] hover:bg-[#229ED9] hover:text-white border border-[#229ED9]/20 transition-all font-semibold text-sm group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.666 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    Telegram
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#5865F2]/10 text-[#5865F2] hover:bg-[#5865F2] hover:text-white border border-[#5865F2]/20 transition-all font-semibold text-sm group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.55,67.55,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.33,46,96.22,53,91.08,65.69,84.69,65.69Z"/></svg>
                    Discord
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white border border-[#1877F2]/20 transition-all font-semibold text-sm group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "editorial" && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-primary-light mb-6">Editorial Policy</h2>
              <p className="mb-4 text-text-muted">
                At KanalCoin, we hold ourselves to the highest journalistic standards. Our core principles are:
              </p>
              <ul className="space-y-4 mt-4 text-text-muted">
                <li className="flex gap-3">
                  <span className="text-primary-light font-bold">1.</span>
                  <div><strong className="text-foreground">Accuracy:</strong> All facts, figures, and technical claims are rigorously verified before publication.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-light font-bold">2.</span>
                  <div><strong className="text-foreground">Objectivity:</strong> We separate reporting from opinion. Market analysis and op-eds are clearly labeled as such.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-light font-bold">3.</span>
                  <div><strong className="text-foreground">Transparency:</strong> Any potential conflicts of interest, including holdings of specific cryptocurrencies by our writers, are fully disclosed.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-light font-bold">4.</span>
                  <div><strong className="text-foreground">No Paid Coverage:</strong> We do not accept payment in exchange for news coverage. Sponsored posts and press releases are strictly segregated and clearly marked with "Sponsored" tags.</div>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "disclaimer" && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Financial Disclaimer
              </h2>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
                <p className="text-red-400 font-bold mb-2 text-lg">NOT FINANCIAL ADVICE</p>
                <p className="text-sm text-text-muted">
                  The information provided on KanalCoin is for educational and informational purposes only. It should not be considered financial, investment, or trading advice.
                </p>
              </div>
              <p className="mb-4 text-text-muted">
                Cryptocurrency investments are highly volatile and carry a significant risk of loss. You should never invest money that you cannot afford to lose. KanalCoin and its team members do not endorse any specific cryptocurrency, token, or platform.
              </p>
              <p className="mb-4 text-text-muted">
                Always conduct your own due diligence (DYOR - Do Your Own Research) and consult with a certified financial advisor before making any investment decisions. KanalCoin is not responsible for any financial losses incurred from using the information or tools provided on our platform.
              </p>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-primary-light mb-6">Privacy Policy</h2>
              <p className="mb-6 text-text-muted">We respect your privacy and are committed to protecting it. This section outlines our practices.</p>
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">1. Information We Collect</h3>
              <p className="text-text-muted mb-6">We collect minimal information necessary to provide our services. This includes your email address if you subscribe to our newsletter, and anonymous usage data via analytics.</p>
              
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">2. How We Use Your Data</h3>
              <p className="text-text-muted mb-6">Your email is used solely for sending our newsletter. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
              
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">3. Cookies</h3>
              <p className="text-text-muted mb-6">We use standard cookies to save your preferences (like Dark/Light theme) and to understand how visitors interact with our site to improve the user experience.</p>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-primary-light mb-6">Terms of Service</h2>
              <p className="mb-6 text-text-muted">By accessing KanalCoin, you agree to be bound by these Terms of Service.</p>
              <ul className="space-y-6 mt-6 text-text-muted">
                <li><strong className="text-foreground block mb-1">Intellectual Property:</strong> All content, design, and branding on KanalCoin are owned by us. You may not reproduce or distribute our content without explicit permission.</li>
                <li><strong className="text-foreground block mb-1">Use of Tools:</strong> Our crypto tools (calculators, trackers) are provided "as is" without any warranties of absolute accuracy. Market prices fluctuate, and calculations may not reflect real-time conditions perfectly.</li>
                <li><strong className="text-foreground block mb-1">User Conduct:</strong> You agree not to use KanalCoin for any unlawful purposes or to attempt to breach our security infrastructure. Spamming or manipulating our voting/trending systems is prohibited.</li>
                <li><strong className="text-foreground block mb-1">External Links:</strong> We are not responsible for the content or safety of third-party websites linked from our articles or press releases.</li>
              </ul>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-primary-light mb-6">Contact Us</h2>
              <p className="mb-8 text-text-muted">We'd love to hear from you. Whether you have a news tip, a partnership proposal, or just want to give feedback.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-hover p-6 rounded-xl border border-border-light hover:border-primary-light/50 transition-colors">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Editorial Team</h3>
                  <p className="text-sm text-text-muted mb-4">For news tips, press releases, and editorial inquiries.</p>
                  <a href="mailto:news@kanalcoin.com" className="text-primary-light font-bold hover:underline">news@kanalcoin.com</a>
                </div>
                <div className="bg-surface-hover p-6 rounded-xl border border-border-light hover:border-primary-light/50 transition-colors">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Partnerships</h3>
                  <p className="text-sm text-text-muted mb-4">For advertising, sponsorships, and business partnerships.</p>
                  <a href="mailto:partners@kanalcoin.com" className="text-primary-light font-bold hover:underline">partners@kanalcoin.com</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
