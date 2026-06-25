import Link from "next/link";

interface InsightCardProps {
  title: string;
  slug: string;
}

export default function InsightSection() {
  const insights: InsightCardProps[] = [
    { title: "What is Cryptocurrency?", slug: "what-is-cryptocurrency" },
    { title: "What is Ethereum?", slug: "what-is-ethereum" },
    { title: "What are Smart Contracts?", slug: "what-are-smart-contracts" },
    { title: "What are Altcoins?", slug: "what-are-altcoins" },
    { title: "What is Stablecoin?", slug: "what-is-stablecoin" },
    { title: "What is DeFi?", slug: "what-is-defi" },
  ];

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-2">
        <h2 className="text-2xl font-display font-bold">Insights & Education</h2>
        <Link href="/insight" className="text-sm text-primary-light hover:underline">View More Insights &raquo;</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {insights.map((item) => (
          <Link key={item.slug} href={`/insight/${item.slug}`} className="group block h-full">
            <div className="soft-card h-full p-4 flex items-center justify-center text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-surface-hover group-hover:border-[#8AA0E5]/50">
              <span className="text-sm font-bold text-text-muted group-hover:text-[#8AA0E5] transition-colors">
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
