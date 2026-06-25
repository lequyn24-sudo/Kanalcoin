"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm text-text-dim hover:text-foreground transition-all font-bold mb-4 bg-surface-hover hover:bg-surface-active px-4 py-2 rounded-full border border-border-light w-fit shadow-md group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      Go Back
    </button>
  );
}
