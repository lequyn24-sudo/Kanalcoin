import React from 'react';
import ProPaywall from '@/components/ProPaywall';

export default function PortfolioTracker() {
  return (
    <ProPaywall 
      toolName="Crypto Portfolio Tracker"
      description="Connect multiple wallets, exchanges, and DeFi protocols to track your entire crypto net worth, PnL, and asset allocation in real-time."
      icon="📈"
      features={[
        "Real-time asset sync from 50+ exchanges",
        "EVM & Non-EVM wallet tracking",
        "Historical performance & PnL charts",
        "DeFi yield farming position tracker"
      ]}
    />
  );
}
