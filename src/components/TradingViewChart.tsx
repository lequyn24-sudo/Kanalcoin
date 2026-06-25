"use client";

import { useEffect, useRef, memo } from 'react';

function TradingViewChart({ symbol = "BINANCE:BTCUSD" }: { symbol?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ngăn chặn render lại nhiều lần trong React Strict Mode
    if (container.current && container.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${symbol}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "#0A1128",
          "gridColor": "#132040",
          "hide_top_toolbar": false,
          "hide_legend": false,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, [symbol]);

  return (
    <div className="w-full h-full min-h-[500px]" ref={container}>
    </div>
  );
}

export default memo(TradingViewChart);
