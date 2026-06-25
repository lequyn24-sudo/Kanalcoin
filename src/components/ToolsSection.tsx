import Link from "next/link";

const mockTools = [
  {
    title: "Crypto Calculator",
    description: "Calculate crypto conversions, profits, and taxes instantly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm2.25-4.5h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm2.25-4.5h.008v.008H12.75v-.008Zm0 2.25h.008v.008H12.75v-.008Zm0 2.25h.008v.008H12.75v-.008Zm2.25-4.5h.008v.008H15v-.008Zm0 2.25h.008v.008H15v-.008Zm-9-11.25v1.5c0 .621.504 1.125 1.125 1.125h9c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-9c-.621 0-1.125.504-1.125 1.125Z" />
      </svg>
    ),
    href: "/tools"
  },
  {
    title: "Market Heatmap",
    description: "Visualize market movements across all sectors in real-time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25 2.25 15 9 9.75M21 7.5l-6.75 5.25L21 18M15 4.5l-6 15" />
      </svg>
    ),
    href: "/tools/market-heatmap"
  },
  {
    title: "Portfolio Tracker",
    description: "Sync your wallets and track your net worth securely.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </svg>
    ),
    href: "/tools/portfolio-tracker"
  }
];

export default function ToolsSection() {
  return (
    <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-4">
        <h2 className="text-2xl font-display font-bold text-[#8AA0E5] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8AA0E5] flex items-center justify-center text-white shadow-[0_0_15px_rgba(106,133,211,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          Pro Tools
        </h2>
        <Link href="/tools" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">All Tools &raquo;</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockTools.map((tool, idx) => (
          <Link key={idx} href={tool.href} className="group soft-card p-6 flex items-start gap-4 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8AA0E5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border-light flex items-center justify-center text-[#8AA0E5] flex-shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(106,133,211,0.2)]">
              {tool.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#8AA0E5] transition-colors">{tool.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed group-hover:text-text-muted transition-colors">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
