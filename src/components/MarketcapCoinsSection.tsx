import Link from "next/link";

const mockCoins = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC", logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", price: "$64,230.50", change: "+2.4%", isPositive: true, marketCap: "$1.2T", volume: "$32B" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png", price: "$3,450.20", change: "-0.8%", isPositive: false, marketCap: "$415B", volume: "$15B" },
  { id: "solana", name: "Solana", symbol: "SOL", logoUrl: "https://cryptologos.cc/logos/solana-sol-logo.png", price: "$145.80", change: "+5.2%", isPositive: true, marketCap: "$65B", volume: "$4.2B" },
  { id: "binancecoin", name: "BNB", symbol: "BNB", logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png", price: "$590.00", change: "+1.1%", isPositive: true, marketCap: "$87B", volume: "$1.8B" },
  { id: "ripple", name: "XRP", symbol: "XRP", logoUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png", price: "$0.52", change: "-0.3%", isPositive: false, marketCap: "$28B", volume: "$900M" },
];

export default function MarketcapCoinsSection() {
  return (
    <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-4">
        <h2 className="text-2xl font-display font-bold text-[#8AA0E5] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8AA0E5] flex items-center justify-center text-white shadow-[0_0_15px_rgba(106,133,211,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
          </div>
          Marketcap & Top Coins
        </h2>
        <Link href="/live-price-cryptocurrencies" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">View Full Market &raquo;</Link>
      </div>

      <div className="soft-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-light bg-surface-hover/50 text-[11px] uppercase tracking-wider text-text-dim">
                <th className="px-6 py-4 font-semibold">Asset</th>
                <th className="px-6 py-4 font-semibold text-right">Price</th>
                <th className="px-6 py-4 font-semibold text-right">24h Change</th>
                <th className="px-6 py-4 font-semibold text-right hidden sm:table-cell">Market Cap</th>
                <th className="px-6 py-4 font-semibold text-right hidden md:table-cell">Volume (24h)</th>
                <th className="px-6 py-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {mockCoins.map((coin) => (
                <tr key={coin.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center border border-border-strong overflow-hidden shrink-0 shadow-inner">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={coin.logoUrl} alt={coin.name} className="w-full h-full object-contain p-1.5" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground group-hover:text-[#8AA0E5] transition-colors">{coin.name}</div>
                        <div className="text-xs text-text-muted">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-foreground">
                    {coin.price}
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${coin.isPositive ? 'text-[#16c784] dark:text-[#00FFAA]' : 'text-[#ea3943] dark:text-[#FF4A4A]'}`}>
                    {coin.change}
                  </td>
                  <td className="px-6 py-4 text-right text-text-muted hidden sm:table-cell">
                    {coin.marketCap}
                  </td>
                  <td className="px-6 py-4 text-right text-text-muted hidden md:table-cell">
                    {coin.volume}
                  </td>
                  <td className="p-4 text-right">
                    <a href="https://accounts.binance.com/register?ref=KANALCOIN" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-xl bg-surface-hover border border-border-light text-[#8AA0E5] font-bold text-sm hover:bg-gradient-to-r hover:from-[#8AA0E5] hover:to-[#344A83] hover:text-white transition-all shadow-sm hover:shadow-md">
                      Trade
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
