import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import CoinTicker from "@/components/CoinTicker";
import MouseGlow from "@/components/MouseGlow";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KanalCoin News",
  description: "Futuristic Crypto Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      {/* Nền tổng của toàn bộ Dashboard (tương đương với phần viền Tím/Đen chữ L) */}
      <body className={`${exo2.variable} ${orbitron.variable} font-sans antialiased min-h-screen relative overflow-hidden bg-background text-foreground`}>
        {/* Lớp nền Ảnh (Mesh Gradient Image Background) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-all duration-700"
            style={{ backgroundImage: "var(--mesh-image)", filter: "var(--mesh-filter)" }}
          ></div>
          
          {/* Lớp mờ nhẹ để làm dịu background */}
          <div className="absolute inset-0 transition-colors duration-700" style={{ backgroundColor: "var(--mesh-overlay)" }}></div>

          {/* Lớp phủ đổi màu (Color Tint Layer) - Dùng để chuyển màu ảnh bằng CSS */}
          <div className="absolute inset-0 transition-colors duration-700 mix-blend-color" style={{ backgroundColor: "var(--mesh-tint)" }}></div>
        </div>

        {/* Dashboard Layout Container - Trôi nổi giữa màn hình */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full h-screen p-0 lg:p-4 xl:p-8">
          
          {/* Mobile Navigation (Header & Drawer) */}
          <MobileNavigation />

          <div className="floating-container flex flex-1 w-full h-full relative overflow-hidden lg:rounded-[2rem]">
            {/* Left Sidebar Fixed (Desktop) */}
            <Sidebar />

            {/* Right Section */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
              
              {/* Top Header Area */}
              <div className="hidden lg:block pt-6 pr-8">
                <CoinTicker />
              </div>
              <div className="block lg:hidden pt-4 px-4 w-full overflow-hidden">
                <CoinTicker />
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 relative overflow-hidden mt-2">
                {/* Scrollable Content */}
                <main className="absolute inset-0 overflow-y-auto px-4 sm:px-6 md:px-16 lg:px-32 py-6 lg:py-8 custom-scrollbar">
                  <div className="w-full relative z-10">
                    {children}
                  </div>
                </main>
              </div>
              
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
