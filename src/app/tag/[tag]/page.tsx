import React from 'react';
import NewsCard from '@/components/NewsCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const resolvedParams = await params;
  const { tag } = resolvedParams;
  
  // Valid tags based on Sidebar
  const validTags = ['bitcoin', 'ethereum', 'defi'];
  
  if (!validTags.includes(tag)) {
    notFound();
  }

  // Format title
  const displayTitle = tag === 'defi' ? 'DeFi' : tag.charAt(0).toUpperCase() + tag.slice(1);

  // Mock specific data based on tag
  const getMockNews = (tagCategory: string) => {
    if (tagCategory === 'bitcoin') {
      return [
        {
          title: "Bitcoin Mining Difficulty Hits New All-Time High",
          excerpt: "Despite recent price volatility, the Bitcoin network continues to grow stronger as mining difficulty reaches unprecedented levels.",
          date: "Oct 20, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
          slug: "bitcoin-mining-difficulty-ath"
        },
        {
          title: "Major Wall Street Bank Predicts Bitcoin at $150K",
          excerpt: "New analytical report suggests upcoming halving effects haven't been fully priced in yet.",
          date: "Oct 19, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop",
          slug: "bitcoin-price-prediction"
        },
        {
          title: "Institutional Outflows Slow Down For Bitcoin ETFs",
          excerpt: "Recent data shows a stabilization in ETF flows after a week of massive liquidations.",
          date: "Oct 18, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop",
          slug: "bitcoin-etf-outflows"
        },
        {
          title: "El Salvador Announces New Bitcoin City Project",
          excerpt: "President Nayib Bukele reveals plans for a tax-free metropolis funded entirely by cryptocurrency bonds.",
          date: "Oct 17, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop",
          slug: "el-salvador-bitcoin-city"
        },
        {
          title: "MicroStrategy Acquires Another 5,000 BTC",
          excerpt: "The business intelligence firm continues its aggressive Bitcoin accumulation strategy.",
          date: "Oct 16, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=600&auto=format&fit=crop",
          slug: "microstrategy-buys-btc"
        },
        {
          title: "Bitcoin Hashrate Distribution Becomes More Decentralized",
          excerpt: "New mining facilities coming online in South America and Africa are shifting global network power dynamics.",
          date: "Oct 15, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
          slug: "bitcoin-hashrate-decentralization"
        },
        {
          title: "Lightning Network Capacity Reaches Historic Milestones",
          excerpt: "Layer-2 scaling solution for Bitcoin sees explosive growth in channel capacity and daily active users.",
          date: "Oct 14, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=600&auto=format&fit=crop",
          slug: "lightning-network-capacity"
        },
        {
          title: "First Major Retailer Accepts Lightning Payments Nationwide",
          excerpt: "A top 10 retail chain announced native integration with Bitcoin's Lightning Network for all physical stores.",
          date: "Oct 13, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop",
          slug: "retail-lightning-adoption"
        },
        {
          title: "Bitcoin Ordinals Ecosystem Valuation Surpasses $2B",
          excerpt: "Digital artifacts on the Bitcoin blockchain are creating a booming new economy for miners and creators.",
          date: "Oct 12, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=600&auto=format&fit=crop",
          slug: "bitcoin-ordinals-valuation"
        },
        {
          title: "State Pension Fund Allocates 2% to Bitcoin",
          excerpt: "A major US state pension fund becomes the first to directly allocate a portion of its reserves to the primary cryptocurrency.",
          date: "Oct 11, 2024",
          category: "Bitcoin",
          imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop",
          slug: "pension-fund-bitcoin"
        }
      ];
    } else if (tagCategory === 'ethereum') {
      return [
        {
          title: "Ethereum Core Developers Announce Next Major Upgrade Date",
          excerpt: "The highly anticipated network upgrade promises to significantly reduce transaction fees for Layer 2 rollups.",
          date: "Oct 22, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=600&auto=format&fit=crop",
          slug: "ethereum-upgrade-date"
        },
        {
          title: "Layer 2 Networks Processing Record Number of Transactions",
          excerpt: "Scaling solutions are handling more volume than ever, taking significant load off the mainnet.",
          date: "Oct 16, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop",
          slug: "l2-transactions-record"
        },
        {
          title: "Staked ETH Reaches New Milestone",
          excerpt: "Over 25% of all Ethereum supply is now locked in staking contracts, securing the network.",
          date: "Oct 14, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=600&auto=format&fit=crop",
          slug: "staked-eth-milestone"
        },
        {
          title: "EigenLayer TVL Crosses $15 Billion Mark",
          excerpt: "The leading restaking protocol on Ethereum continues to absorb massive amounts of capital.",
          date: "Oct 13, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=600&auto=format&fit=crop",
          slug: "eigenlayer-tvl-15b"
        },
        {
          title: "Major Banks Begin Tokenizing Assets on Ethereum",
          excerpt: "Traditional financial giants are utilizing the public Ethereum network for settling tokenized Treasury bills.",
          date: "Oct 12, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop",
          slug: "banks-tokenize-assets"
        },
        {
          title: "Vitalik Buterin Proposes New Gas Limit Model",
          excerpt: "Ethereum's co-founder outlines a new multidimensional gas pricing strategy to optimize block space.",
          date: "Oct 11, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=600&auto=format&fit=crop",
          slug: "vitalik-gas-proposal"
        },
        {
          title: "Arbitrum and Optimism Activate Interoperability Bridge",
          excerpt: "The two largest Ethereum Layer-2 networks have established direct communication channels.",
          date: "Oct 10, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=600&auto=format&fit=crop",
          slug: "l2-interoperability"
        },
        {
          title: "Ethereum Inflation Drops to Negative For Third Consecutive Month",
          excerpt: "High network activity is burning more ETH than what is being issued to validators, making the asset deflationary.",
          date: "Oct 09, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
          slug: "eth-deflationary-streak"
        },
        {
          title: "New EIP Promises Account Abstraction for All Users",
          excerpt: "The upcoming standard will allow users to pay gas fees with ERC-20 tokens and recover lost private keys.",
          date: "Oct 08, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop",
          slug: "account-abstraction-eip"
        },
        {
          title: "Base Network Becomes Most Profitable L2",
          excerpt: "Coinbase's Layer-2 network has surpassed competitors in daily active users and generated revenue.",
          date: "Oct 07, 2024",
          category: "Ethereum",
          imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop",
          slug: "base-network-profitable"
        }
      ];
    } else {
      return [
        {
          title: "Major DeFi Protocol Reaches $10B Total Value Locked",
          excerpt: "The decentralized finance sector shows signs of resurgence as leading lending protocol crosses a major milestone.",
          date: "Oct 19, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=600&auto=format&fit=crop",
          slug: "defi-tvl-milestone"
        },
        {
          title: "New Automated Market Maker Promises Zero Impermanent Loss",
          excerpt: "A novel mathematical approach to liquidity provision could change how decentralized exchanges operate forever.",
          date: "Oct 15, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop",
          slug: "zero-il-amm"
        },
        {
          title: "Liquid Restaking Tokens Dominate DeFi Narratives",
          excerpt: "The newest primitive in decentralized finance is attracting billions in TVL across multiple protocols.",
          date: "Oct 10, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
          slug: "liquid-restaking-boom"
        },
        {
          title: "Uniswap V4 Officially Deployed on Mainnet",
          excerpt: "The highly anticipated decentralized exchange upgrade brings custom hooks and extreme gas efficiency.",
          date: "Oct 09, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=600&auto=format&fit=crop",
          slug: "uniswap-v4-mainnet"
        },
        {
          title: "MakerDAO Rebrands and Launches New Stablecoin",
          excerpt: "The original DeFi protocol undergoes a massive overhaul to prepare for its endgame vision.",
          date: "Oct 08, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop",
          slug: "makerdao-rebrand"
        },
        {
          title: "Aave Deploys V4 Across Multiple Networks",
          excerpt: "The premier lending protocol introduces isolated lending pairs and advanced risk management features.",
          date: "Oct 07, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=600&auto=format&fit=crop",
          slug: "aave-v4-deployment"
        },
        {
          title: "Cross-Chain DEX Aggregator Reaches $50B Volume",
          excerpt: "Seamless swapping across different blockchains is becoming the standard for modern DeFi users.",
          date: "Oct 06, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=600&auto=format&fit=crop",
          slug: "crosschain-dex-volume"
        },
        {
          title: "Real World Asset Protocol Surpasses Crypto Native TVL",
          excerpt: "Tokenized treasuries and private credit are now the fastest-growing sector within Decentralized Finance.",
          date: "Oct 05, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
          slug: "rwa-defi-dominance"
        },
        {
          title: "DeFi Options Trading Volume Hits Record Highs",
          excerpt: "Sophisticated traders are moving on-chain to execute complex options strategies transparently.",
          date: "Oct 04, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop",
          slug: "defi-options-volume"
        },
        {
          title: "Flash Loan Attack Thwarted by AI Security Oracle",
          excerpt: "A new on-chain security system successfully blocked a $20M exploit attempt in real-time.",
          date: "Oct 03, 2024",
          category: "DeFi",
          imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop",
          slug: "ai-oracle-prevents-hack"
        }
      ];
    }
  };

  const newsList = getMockNews(tag);

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-dim mt-4 font-medium">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/news" className="hover:text-foreground transition-colors">News</Link>
          <span>/</span>
          <span className="text-foreground">Tag: {displayTitle}</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-strong pb-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-primary/20 text-primary-light text-xs font-bold tracking-wider uppercase mb-4">
              News Topic
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-2">
              {displayTitle} News
            </h1>
            <p className="text-text-muted max-w-2xl mt-4">
              Read the latest breaking news, updates, and deep dives specifically curated for {displayTitle}.
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {newsList.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

      </div>
    </div>
  );
}
