import Link from "next/link";

const mockEvents = [
  {
    date: "Jun 24",
    month: "2026",
    title: "Kanalcoin Mainnet Launch",
    type: "Network Launch",
    description: "The highly anticipated launch of Kanalcoin's Layer 1 blockchain mainnet, introducing new features.",
    status: "Upcoming",
    slug: "kanalcoin-mainnet-launch"
  },
  {
    date: "Jun 27",
    month: "2026",
    title: "SEC ETF Decision Deadline",
    type: "Regulatory",
    description: "Final deadline for the SEC to approve or deny the latest spot Ethereum ETF applications.",
    status: "Warning",
    slug: "sec-etf-decision-deadline"
  },
  {
    date: "Jul 15",
    month: "2026",
    title: "Global Crypto Summit 2026",
    type: "Conference",
    description: "The largest annual gathering of industry leaders, developers, and investors in Dubai.",
    status: "Upcoming",
    slug: "global-crypto-summit-2026"
  }
];

export default function CalendarSection() {
  return (
    <section className="animate-fade-in-up flex flex-col h-full" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-4">
        <h2 className="text-2xl font-display font-bold text-[#8AA0E5] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8AA0E5] flex items-center justify-center text-white shadow-[0_0_15px_rgba(106,133,211,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008Zm-2.25-4.5h.008v.008H9.75v-.008Zm0 2.25h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008Zm4.5-4.5h.008v.008H14.25v-.008Zm0 2.25h.008v.008H14.25V15Zm0 2.25h.008v.008H14.25v-.008Z" />
            </svg>
          </div>
          Events Calendar
        </h2>
        <Link href="/calendar" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">Full Calendar &raquo;</Link>
      </div>

      <div className="soft-card p-6 md:p-8 flex-1">
        <div className="relative border-l border-border-strong ml-4 md:ml-6 space-y-8">
          {mockEvents.map((event, idx) => (
            <Link href={`/news/${event.slug}`} key={idx} className="relative pl-8 group block cursor-pointer">
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-[#8AA0E5] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(138,160,229,0.8)] group-hover:scale-150 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <div className="flex flex-col min-w-[100px]">
                  <span className="text-lg font-bold text-foreground group-hover:text-[#8AA0E5] transition-colors">{event.date}</span>
                  <span className="text-xs text-text-dim font-medium tracking-widest uppercase">{event.month}</span>
                </div>
                
                <div className="flex-1 bg-surface-hover/50 p-5 rounded-2xl border border-border-light group-hover:bg-surface-hover group-hover:border-[#6A85D3]/20 transition-all duration-300 w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-[16px] font-bold text-foreground">{event.title}</h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider ${
                      event.status === 'Warning' ? 'bg-[#FF4A4A]/20 text-[#FF4A4A]' : 'bg-[#6A85D3]/20 text-[#8AA0E5]'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{event.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
