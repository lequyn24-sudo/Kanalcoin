import React from 'react';
import ProPaywall from '@/components/ProPaywall';

export default function TaxGenerator() {
  return (
    <ProPaywall 
      toolName="Crypto Tax Generator"
      description="Automatically calculate your capital gains, losses, and income. Generate ready-to-file tax reports based on your complete transaction history."
      icon="📑"
      features={[
        "FIFO, LIFO, and HIFO calculation methods",
        "Export to TurboTax, TaxAct, and CPA formats",
        "Identify tax-loss harvesting opportunities",
        "Supports 10,000+ DeFi and NFT transactions"
      ]}
    />
  );
}
