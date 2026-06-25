import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border-strong px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.webp" 
            alt="KanalCoin Logo" 
            width={160} 
            height={80} 
            className="h-10 w-auto group-hover:brightness-125 transition-all"
            priority
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium hover:text-primary-light transition-colors">Home</Link>
        <Link href="/news" className="text-sm font-medium hover:text-primary-light transition-colors">News</Link>
        <Link href="/markets" className="text-sm font-medium hover:text-primary-light transition-colors">Markets</Link>
        <Link href="/ico" className="text-sm font-medium hover:text-primary-light transition-colors">ICO/IDO</Link>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="hidden md:block glass px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
