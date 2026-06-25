const fs = require('fs');

const categories = [
  "Bitcoin", "Cryptocurrency", "Stablecoin", "Blockchain Industry", 
  "Regulator", "Market Exchange", "Fintech", "Metaverse", "Web3", "Crypto Crime", "People"
];

const images = [
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop"
];

const templates = {
  "Bitcoin": [
    "Bitcoin Mining Difficulty Adjusts After Recent Halving", 
    "Whales Accumulate BTC as Price Tests Critical Support", 
    "Bitcoin Hashrate Hits New All-Time High", 
    "Lightning Network Capacity Grows by 15% This Quarter", 
    "Institutions Buy the Dip During Weekend Correction", 
    "Bitcoin ETF Inflows Turn Positive After Brief Lull", 
    "Long-term Holders Refuse to Sell Amid Macro Uncertainty"
  ],
  "Cryptocurrency": [
    "Global Crypto Market Cap Recovers 5% Overnight", 
    "Altcoins Show Strength While Majors Consolidate", 
    "Top 10 Utility Tokens to Watch in Q3 2026", 
    "Crypto Adoption Surges in Latin America", 
    "Retail Trading Volume Reaches Multi-Month Highs", 
    "Next Generation Cryptocurrencies Focus on Privacy", 
    "Layer 1 Activity Spikes Following Network Upgrades"
  ],
  "Stablecoin": [
    "USDC Announces Expansion to 3 New Blockchains", 
    "Tether Market Cap Hits Unprecedented Milestone", 
    "Algorithmic Stablecoins Reimagined After Past Failures", 
    "CBDCs vs Privately Issued Stablecoins: The Debate", 
    "DeFi Stablecoin Yield Strategies Become Mainstream", 
    "Cross-chain Stablecoin Swaps See 200% Volume Increase", 
    "Euro-pegged Stablecoins Gain Traction in EU Markets"
  ],
  "Blockchain Industry": [
    "Enterprise Blockchain Adoption Reaches Tipping Point", 
    "Major Bank Pilots Tokenization on Public Blockchain", 
    "Blockchain Gaming Sector Secures $500M Funding", 
    "Supply Chain Tracking App Transitions to Mainnet", 
    "Decentralized Identity Solutions Enter Production", 
    "Tech Giants Form New Web3 Consortium", 
    "Layer 0 Protocols Vie for Interoperability Dominance"
  ],
  "Regulator": [
    "MiCA Framework Implementation Begins Across Europe", 
    "SEC Clarifies Stance on Staking as a Service", 
    "Asian Regulators Establish Joint Crypto Task Force", 
    "New US Bill Aims to Define Digital Commodities", 
    "Tax Authorities Release Guidelines for Airdrops", 
    "FASB Accounting Rules Bring Clarity for Crypto Firms", 
    "Global AML Watchdog Updates Crypto Regulations"
  ],
  "Market Exchange": [
    "Top Exchange Integrates Zero-Knowledge Proofs", 
    "DEX Trading Volume Surpasses Centralized Platforms", 
    "Major Platform Introduces Institutional Custody", 
    "Exchange Token Burns Reduce Supply by 10%", 
    "Options Market Shows Bullish Sentiment for Q4", 
    "New Derivatives Products Launched for Retail", 
    "Spot Trading Fees Slashed Amid Industry Competition"
  ],
  "Fintech": [
    "Neo-Bank Adds Native Crypto Trading Features", 
    "Payment Processor Facilitates Bitcoin Lightning Payments", 
    "Fintech Unicorn Acquires Crypto Custody Provider", 
    "Traditional Finance Integrates DeFi Lending Pools", 
    "Cross-Border Remittances Disrupted by Stablecoins", 
    "Tokenized Assets Platform Gets Banking License", 
    "API Gateway Connects Legacy Banks to Blockchain"
  ],
  "Metaverse": [
    "Virtual Real Estate Sales Rebound in Major Metaverses", 
    "Fashion Brands Launch Exclusive Digital Wearables", 
    "VR Hardware Breakthrough Promises Better Experiences", 
    "Metaverse Land Valuation Framework Published", 
    "Cross-Metaverse Avatars Standard Nears Completion", 
    "Virtual Concert Attracts 5 Million Simultaneous Viewers", 
    "Corporate Meetings Shift to 3D Virtual Spaces"
  ],
  "Web3": [
    "SocialFi Application Crosses 1 Million Active Users", 
    "Decentralized Storage Costs Drop by 50%", 
    "Web3 Infrastructure Providers Raise Seed Rounds", 
    "Account Abstraction Greatly Simplifies Onboarding", 
    "Creator Economy Shifts to Decentralized Platforms", 
    "Web3 Mobile Phones Gain Traction in Emerging Markets", 
    "Domain Name Services Expand Across Multiple Chains"
  ],
  "Crypto Crime": [
    "Whitehat Hackers Recover $20M from DeFi Exploit", 
    "Authorities Shut Down Major Crypto Mixer", 
    "Phishing Scams Using AI Voice Cloning on the Rise", 
    "Auditors Discover Critical Vulnerability in Popular Bridge", 
    "Stolen Funds Traced Through Multiple Cross-Chain Hops", 
    "Ransomware Payments in Crypto Decline Year-Over-Year", 
    "Security Firm Publishes Q2 Crypto Exploit Report"
  ],
  "People": [
    "Vitalik Buterin Proposes New Solution to MEV", 
    "Former Bank Executive Joins Leading Crypto Exchange", 
    "Satoshi Nakamoto Statue Unveiled in European City", 
    "Crypto Billionaire Donates $10M to Open Source Devs", 
    "Prominent Developer Transitions to New L1 Project", 
    "Regulator Resigns to Launch Blockchain Startup", 
    "Industry Pioneer Celebrates 10 Years in Crypto"
  ]
};

const mockNews = [];

categories.forEach(cat => {
  const titles = templates[cat] || [];
  titles.forEach((title, i) => {
    mockNews.push({
      title: title,
      excerpt: "An in-depth look at recent developments concerning " + title.toLowerCase() + ". Experts weigh in on the potential impact on the broader market.",
      date: "Jun " + Math.floor(Math.random() * 20 + 5) + ", 2026",
      category: cat,
      imageUrl: images[i % images.length],
      slug: cat.toLowerCase().replace(/ /g, '-') + "-news-" + i
    });
  });
});

const content = "export const mockNews = " + JSON.stringify(mockNews, null, 2) + ";";

const dir = 'C:\\\\Users\\\\QUYNLEE\\\\Downloads\\\\Kanalcoin\\\\src\\\\data';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(dir + '\\\\mockNews.ts', content);
console.log('Successfully generated mockNews.ts');
