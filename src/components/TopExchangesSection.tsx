import React from 'react';

export default function TopExchangesSection() {
  const exchanges = [
    {
      name: "Binance",
      logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
      bonus: "Up to $600 Bonus",
      features: ["#1 Global Exchange", "Lowest Trading Fees", "Deepest Liquidity"],
      rating: 4.9,
      link: "https://accounts.binance.com/register?ref=KANALCOIN",
      color: "from-[#F3BA2F] to-[#F3BA2F]/70"
    },
    {
      name: "Bybit",
      logo: "https://cryptologos.cc/logos/bybit-logo.png?v=029",
      bonus: "Up to $30,000 Bonus",
      features: ["Best for Derivatives", "High Leverage", "Copy Trading"],
      rating: 4.8,
      link: "https://www.bybit.com/register?affiliate_id=KANALCOIN",
      color: "from-[#F7A600] to-[#F7A600]/70"
    },
    {
      name: "OKX",
      logo: "https://cryptologos.cc/logos/okb-okb-logo.png",
      bonus: "Mystery Box up to $10k",
      features: ["Excellent Web3 Wallet", "High Yield Earn", "Crypto Bot Trading"],
      rating: 4.7,
      link: "https://www.okx.com/join/KANALCOIN",
      color: "from-[#000000] to-[#333333]"
    }
  ];

  return (
    <section className="mb-10 animate-fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-black text-foreground flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#F7A600]">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
          </svg>
          Top Recommended Exchanges
        </h2>
        <span className="text-sm font-bold bg-[#F7A600]/10 text-[#F7A600] px-3 py-1 rounded-full border border-[#F7A600]/20">Exclusive Bonuses</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exchanges.map((exchange, index) => (
          <div key={index} className="soft-card p-6 flex flex-col items-center text-center relative overflow-hidden group border border-border-light hover:border-[#8AA0E5]/50 transition-all">
            {/* Background Glow */}
            <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${exchange.color} rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
            
            <div className="w-16 h-16 bg-surface border border-border-strong rounded-2xl p-2 shadow-lg mb-4 relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img src={exchange.logo} alt={exchange.name} className="w-10 h-10 object-contain" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-1 relative z-10">{exchange.name}</h3>
            
            <div className="flex items-center gap-1 text-yellow-400 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.floor(exchange.rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              ))}
              <span className="text-sm font-bold ml-1 text-text-muted">{exchange.rating}</span>
            </div>

            <div className="bg-[#1ECB4F]/10 border border-[#1ECB4F]/20 text-[#1ECB4F] text-sm font-bold px-4 py-2 rounded-xl mb-6 w-full relative z-10">
              {exchange.bonus}
            </div>

            <ul className="text-sm text-text-muted text-left w-full space-y-2 mb-6 flex-1 relative z-10">
              {exchange.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#8AA0E5]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href={exchange.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-surface-hover border border-border-strong hover:bg-gradient-to-r hover:from-[#8AA0E5] hover:to-[#344A83] text-foreground hover:text-white font-bold py-3 rounded-xl transition-all relative z-10 shadow-sm hover:shadow-[0_4px_15px_rgba(106,133,211,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Claim Bonus
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
