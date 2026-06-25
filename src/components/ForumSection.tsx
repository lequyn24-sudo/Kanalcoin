import Link from "next/link";

const mockThreads = [
  {
    id: 1,
    title: "What is the next big narrative after AI coins?",
    author: "CryptoWhale99",
    replies: 142,
    views: "12.4k",
    tag: "Discussion",
    time: "2h ago",
    avatarColor: "bg-purple-500"
  },
  {
    id: 2,
    title: "Solana Congestion Issues - Is the fix working?",
    author: "SolanaDev",
    replies: 89,
    views: "5.1k",
    tag: "Solana",
    time: "4h ago",
    avatarColor: "bg-blue-500"
  },
  {
    id: 3,
    title: "Bitcoin Halving Impact: Institutional Perspective",
    author: "MacroAnalyst",
    replies: 256,
    views: "24.8k",
    tag: "Bitcoin",
    time: "6h ago",
    avatarColor: "bg-orange-500"
  },
  {
    id: 4,
    title: "Airdrop Farming Guide for Q3 2024",
    author: "AirdropHunter",
    replies: 45,
    views: "8.9k",
    tag: "Guides",
    time: "12h ago",
    avatarColor: "bg-green-500"
  },
  {
    id: 5,
    title: "Best hardware wallet for 2024?",
    author: "SecureHodler",
    replies: 120,
    views: "15.2k",
    tag: "Wallets",
    time: "15h ago",
    avatarColor: "bg-purple-600"
  }
];

export default function ForumSection() {
  return (
    <section className="animate-fade-in-up flex flex-col h-full" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-6 border-b border-border-strong pb-4">
        <h2 className="text-2xl font-display font-bold text-[#8AA0E5] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8AA0E5] flex items-center justify-center text-white shadow-[0_0_15px_rgba(106,133,211,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </div>
          Community Forum
        </h2>
        <Link href="/forum" className="text-sm font-semibold text-[#8AA0E5] hover:text-foreground transition-colors">Enter Forum &raquo;</Link>
      </div>

      <div className="soft-card overflow-hidden flex-1 flex flex-col">
        <div className="flex flex-col flex-1 h-full">
          {mockThreads.map((thread, idx) => (
            <Link key={thread.id} href={`/forum/solana`} className={`flex-1 group flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-white/[0.02] transition-colors ${idx !== mockThreads.length - 1 ? 'border-b border-border-light' : ''}`}>
              <div className="flex items-start sm:items-center gap-4 mb-3 sm:mb-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-foreground font-bold shadow-inner ${thread.avatarColor}`}>
                  {thread.author.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-foreground group-hover:text-[#8AA0E5] transition-colors mb-1 line-clamp-1">{thread.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-text-dim">
                    <span className="font-medium text-text-muted">{thread.author}</span>
                    <span>•</span>
                    <span>{thread.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 ml-14 sm:ml-0">
                <span className="px-3 py-1 rounded bg-surface-hover text-xs font-semibold text-[#8AA0E5] border border-border-light whitespace-nowrap">
                  {thread.tag}
                </span>
                <div className="flex items-center gap-4 text-xs font-medium text-text-dim w-32 justify-end">
                  <div className="flex items-center gap-1.5" title="Replies">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" /></svg>
                    {thread.replies}
                  </div>
                  <div className="flex items-center gap-1.5" title="Views">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                    {thread.views}
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
