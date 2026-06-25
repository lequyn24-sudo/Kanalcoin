import Link from "next/link";
import { mockNews as globalMockNews } from "@/data/mockNews";

const displayNews = globalMockNews.slice(0, 5);

export default function LatestNewsSection() {
  return (
    <section className="animate-fade-in-up flex flex-col h-full" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-4">
        <h2 className="text-2xl font-display font-bold text-[#8AA0E5] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8AA0E5] flex items-center justify-center text-white shadow-[0_0_15px_rgba(106,133,211,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
          </div>
          Latest News
        </h2>
        <Link href="/news" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">All News &raquo;</Link>
      </div>

      <div className="soft-card overflow-hidden flex-1 flex flex-col">
        <div className="flex flex-col flex-1 h-full">
          {displayNews.map((news, idx) => (
            <Link key={news.id} href={`/news/${news.slug}`} className={`flex-1 group flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-white/[0.02] transition-colors ${idx !== displayNews.length - 1 ? 'border-b border-border-light' : ''}`}>
              <div className="flex items-start sm:items-center gap-4 mb-3 sm:mb-0">
                <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 relative shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-foreground group-hover:text-[#8AA0E5] transition-colors mb-1 line-clamp-1">{news.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-text-dim">
                    <span className="font-medium text-text-muted">KanalCoin</span>
                    <span>•</span>
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 ml-14 sm:ml-0">
                <span className="px-3 py-1 rounded bg-surface-hover text-xs font-semibold text-[#8AA0E5] border border-border-light whitespace-nowrap">
                  {news.category}
                </span>
                <div className="flex items-center gap-4 text-xs font-medium text-text-dim w-16 justify-end">
                  <div className="flex items-center gap-1.5" title="Views">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                    {(Math.random() * 10 + 1).toFixed(1)}k
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
