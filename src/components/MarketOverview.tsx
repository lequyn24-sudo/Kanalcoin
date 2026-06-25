export default function MarketOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="soft-card p-4 flex items-center justify-between hover:-translate-y-1 transition-all duration-300 shadow-lg">
        <div>
          <p className="text-xs text-foreground/60 font-medium uppercase tracking-wider mb-1">Market Cap</p>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-display font-bold text-foreground">$2.15 T</p>
            <span className="text-xs font-bold text-green-400">+1.5%</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-hover border border-border-light flex items-center justify-center text-[#8AA0E5]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
          </svg>
        </div>
      </div>
      
      <div className="soft-card p-4 flex items-center justify-between hover:-translate-y-1 transition-all duration-300 shadow-lg">
        <div>
          <p className="text-xs text-foreground/60 font-medium uppercase tracking-wider mb-1">24h Vol</p>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-display font-bold text-foreground">$71.30 B</p>
            <span className="text-xs font-bold text-red-400">-0.8%</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-hover border border-border-light flex items-center justify-center text-[#8AA0E5]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
        </div>
      </div>
      
      <div className="soft-card p-4 flex items-center justify-between hover:-translate-y-1 transition-all duration-300 shadow-lg">
        <div>
          <p className="text-xs text-foreground/60 font-medium uppercase tracking-wider mb-1">BTC Dominance</p>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-display font-bold text-foreground">58.48%</p>
            <span className="text-xs font-bold text-green-400">+0.2%</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-hover border border-border-light flex items-center justify-center text-[#8AA0E5]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
