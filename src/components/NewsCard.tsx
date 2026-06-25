import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
}

export default function NewsCard({ title, excerpt, imageUrl, date, category, slug }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="block group h-full">
      <div className="soft-card overflow-hidden h-full flex flex-col transition-all duration-300 relative group/card hover:shadow-[0_10px_40px_rgba(106,133,211,0.12)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] group-hover:bg-surface-hover">
        {/* Lớp quét ánh sáng (Sweep hover) */}
        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover/card:translate-x-[50%] transition-transform duration-1000 z-10 pointer-events-none skew-x-[-20deg]"></div>
        
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[32px]">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          {/* Thay đổi bg-primary thành tech-badge */}
          <div className="absolute top-4 left-4 tech-badge text-white/90 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full backdrop-blur-md z-20">
            {category}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="text-xs font-medium text-text-muted mb-3">{date}</div>
          <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary-light transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-text-dim line-clamp-3 mt-auto font-medium">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
