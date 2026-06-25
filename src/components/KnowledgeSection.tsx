import Link from "next/link";

export default function KnowledgeSection() {
  const categories = ["Crypto Fundamentals", "Technology & Ecosystem", "Mining & Consensus"];

  return (
    <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-4">
        <h2 className="text-2xl font-display font-bold text-[#8AA0E5] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8AA0E5] flex items-center justify-center text-white shadow-[0_0_15px_rgba(106,133,211,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          Crypto Knowledge
        </h2>
        <Link href="/knowledge" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">Start Learning &raquo;</Link>
      </div>

      <div className="text-sm text-text-muted max-w-xl mb-8">
        Master the fundamentals of cryptocurrency, trading, and blockchain technology with our comprehensive guides.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, idx) => (
          <Link key={idx} href="/knowledge" className="soft-card p-4 text-center hover:border-[#8AA0E5]/50 transition-colors">
            <span className="text-sm font-medium text-foreground">{category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
