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
