"use client";

import { useEffect, useRef, memo } from 'react';

function TradingViewTechAnalysis({ symbol = "BINANCE:BTCUSD" }: { symbol?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ngăn chặn render lại nhiều lần trong React Strict Mode
    if (container.current && container.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "interval": "1m",
          "width": "100%",
          "isTransparent": false,
          "height": "100%",
          "symbol": "${symbol}",
          "showIntervalTabs": true,
          "displayMode": "single",
          "locale": "en",
          "colorTheme": "dark",
          "backgroundColor": "#0A1128"
        }`;
      container.current.appendChild(script);
    }
  }, [symbol]);

  return (
    <div className="w-full h-full min-h-[400px]" ref={container}>
    </div>
  );
}

export default memo(TradingViewTechAnalysis);
