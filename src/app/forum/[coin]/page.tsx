import TradingViewChart from "@/components/TradingViewChart";
import TradingViewTechAnalysis from "@/components/TradingViewTechAnalysis";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";

// Mock Data for demonstration
const mockCoinData: Record<string, any> = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    tvSymbol: "BINANCE:BTCUSD",
    price: "$64,230.50",
    change: "+2.4%",
    marketCap: "$1.2T",
    volume: "$34.5B",
    supply: "19.5M BTC",
    desc: "Bitcoin was the first successful internet money based on peer-to-peer technology; where there is no central bank or authority involved in the transactions and production of the Bitcoin currency."
  },
  solana: {
    name: "Solana",
    symbol: "SOL",
    tvSymbol: "BINANCE:SOLUSD",
    price: "$145.20",
    change: "+5.1%",
    marketCap: "$65.2B",
    volume: "$4.1B",
    supply: "448.5M SOL",
    desc: "Solana is a highly functional open source project that banks on blockchain technology's permissionless nature to provide decentralized finance (DeFi) solutions."
  }
};

const mockNews = [
  {
    title: "Market Analysis: Bull Run Continuation?",
    excerpt: "Analysts predict a strong upward trend for the rest of the quarter.",
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop",
    date: "Oct 24, 2024",
    category: "Markets",
    slug: "market-analysis-bull-run"
  },
  {
    title: "Institutional Adoption Reaches New Highs",
    excerpt: "Major banks are now offering crypto custody solutions to their clients.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=800&auto=format&fit=crop",
    date: "Oct 23, 2024",
    category: "Adoption",
    slug: "institutional-adoption-highs"
  }
];

export default async function ForumCoinPage({ params }: { params: Promise<{ coin: string }> }) {
  const resolvedParams = await params;
  const coinSlug = resolvedParams.coin.toLowerCase();
  
  // Fallback if coin is not in our mock data
  const coin = mockCoinData[coinSlug] || {
    name: coinSlug.charAt(0).toUpperCase() + coinSlug.slice(1),
    symbol: coinSlug.substring(0, 3).toUpperCase(),
    tvSymbol: `BINANCE:${coinSlug.substring(0, 3).toUpperCase()}USDT`,
    price: "N/A",
    change: "N/A",
    marketCap: "N/A",
    volume: "N/A",
    supply: "N/A",
    desc: `Overview and information about ${coinSlug.charAt(0).toUpperCase() + coinSlug.slice(1)}.`
  };

  return (
    <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 max-w-7xl animate-fade-in-up">
      
      {/* 1. Header & Anchor Tabs */}
      <div className="mb-8 border-b border-border-strong pb-6">
        <h1 className="text-3xl font-display font-bold text-foreground mb-6">
          {coin.name} Forum Discussion, News and Chart
        </h1>
        <div className="flex flex-wrap gap-3">
          <a href="#overview" className="border border-border-strong bg-white/5 text-primary-light px-5 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">Overview</a>
          <a href="#chart" className="border border-border-strong bg-transparent text-foreground/60 px-5 py-2 rounded-full text-sm font-medium hover:text-foreground hover:bg-white/5 transition-colors">Chart</a>
          <a href="#news" className="border border-border-strong bg-transparent text-foreground/60 px-5 py-2 rounded-full text-sm font-medium hover:text-foreground hover:bg-white/5 transition-colors">News</a>
          <a href="#forum" className="border border-border-strong bg-transparent text-foreground/60 px-5 py-2 rounded-full text-sm font-medium hover:text-foreground hover:bg-white/5 transition-colors">Forum</a>
        </div>
      </div>

      {/* 2. Overview Section */}
      <section id="overview" className="mb-12 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-6 flex flex-col gap-4">
            <h2 className="text-xl font-display font-bold border-b border-border-strong pb-2 mb-2">What is {coin.name}?</h2>
            <p className="text-foreground/70 leading-relaxed text-sm">
              {coin.desc}
            </p>
            <div className="flex gap-4 mt-auto pt-4">
              <Link href="#" className="text-xs bg-primary/20 text-primary-light px-4 py-2 rounded-lg font-semibold hover:bg-primary/40 transition-colors">🌐 Official Website</Link>
              <Link href="#" className="text-xs bg-white/5 text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">🔍 Explorer</Link>
            </div>
          </div>
          <div className="lg:col-span-1 glass-card p-6">
            <h3 className="text-lg font-display font-bold mb-4 border-b border-border-strong pb-2">Market Stats</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-foreground/50 text-sm">Price</span>
                <span className="font-bold text-foreground text-lg">{coin.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50 text-sm">24h Change</span>
                <span className={`font-bold ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{coin.change}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50 text-sm">Market Cap</span>
                <span className="font-semibold text-foreground">{coin.marketCap}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50 text-sm">Volume (24h)</span>
                <span className="font-semibold text-foreground">{coin.volume}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50 text-sm">Circulating Supply</span>
                <span className="font-semibold text-foreground">{coin.supply}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Chart Section */}
      <section id="chart" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-display font-bold text-primary-light mb-6 flex items-center gap-2 border-b border-border-strong pb-2">
          <span className="text-xl">📈</span> Live Chart & Analysis
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card p-2 h-[500px] overflow-hidden">
            <TradingViewChart symbol={coin.tvSymbol} />
          </div>
          <div className="lg:col-span-1 glass-card p-2 h-[500px] overflow-hidden">
            <TradingViewTechAnalysis symbol={coin.tvSymbol} />
          </div>
        </div>
      </section>

      {/* 4. News Section */}
      <section id="news" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-display font-bold text-primary-light mb-6 flex items-center gap-2 border-b border-border-strong pb-2">
          <span className="text-xl">📰</span> Latest {coin.name} News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mockNews.map((news) => (
            <NewsCard key={news.slug} {...news} />
          ))}
        </div>
      </section>

      {/* 5. Forum Section */}
      <section id="forum" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-display font-bold text-primary-light mb-6 flex items-center gap-2 border-b border-border-strong pb-2">
          <span className="text-xl">💬</span> Community Forum
        </h2>
        <div className="glass-card p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl mb-4">
             🗣️
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Join the Conversation</h3>
          <p className="text-foreground/60 max-w-md mb-6">
            Share your thoughts, analysis, and predictions about {coin.name} with our growing community of traders and investors.
          </p>
          <button className="btn-primary px-8 py-2.5 rounded-full">
            Login to Post a Comment
          </button>
        </div>
      </section>

    </main>
  );
}
