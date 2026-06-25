"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ImpermanentLossCalculator() {
  const [initialPriceA, setInitialPriceA] = useState(100);
  const [futurePriceA, setFuturePriceA] = useState(150);
  const [initialPriceB, setInitialPriceB] = useState(100);
  const [futurePriceB, setFuturePriceB] = useState(100);
  const [poolWeightA, setPoolWeightA] = useState(50); // Assuming 50/50 pool for simplicity
  const [initialInvestment, setInitialInvestment] = useState(1000);

  const [results, setResults] = useState({
    impermanentLossPercentage: 0,
    lossInDollars: 0,
    valueIfHeld: 0,
    valueInPool: 0
  });

  useEffect(() => {
    calculateIL();
  }, [initialPriceA, futurePriceA, initialPriceB, futurePriceB, initialInvestment]);

  const calculateIL = () => {
    if (!initialPriceA || !futurePriceA || !initialPriceB || !futurePriceB || !initialInvestment) return;

    // Price ratio changes
    const priceRatioA = futurePriceA / initialPriceA;
    const priceRatioB = futurePriceB / initialPriceB;

    // For a standard 50/50 AMM pool:
    // IL = 2 * sqrt(PriceRatioA / PriceRatioB) / (1 + (PriceRatioA / PriceRatioB)) - 1
    // Actually, a simpler robust formula for 50/50 considering both moving:
    // V_held = (investment/2 * ratioA) + (investment/2 * ratioB)
    // V_pool = investment * sqrt(ratioA * ratioB)
    
    const valueIfHeld = (initialInvestment / 2) * priceRatioA + (initialInvestment / 2) * priceRatioB;
    const valueInPool = initialInvestment * Math.sqrt(priceRatioA * priceRatioB);
    
    const ilPercentage = (valueInPool / valueIfHeld) - 1;
    const lossInDollars = valueIfHeld - valueInPool;

    setResults({
      impermanentLossPercentage: Math.abs(ilPercentage * 100),
      lossInDollars: Math.max(0, lossInDollars),
      valueIfHeld: valueIfHeld,
      valueInPool: valueInPool
    });
  };

  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-border-strong pb-6">
          <Link href="/tools" className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-text-muted hover:text-white hover:bg-[#2A363B] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">Impermanent Loss Calculator</h1>
            <p className="text-text-muted text-sm mt-1">Calculate your potential risks when providing liquidity to AMMs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Inputs Section */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="soft-card p-6 rounded-2xl border border-border-light bg-surface/80">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm">1</span>
                Initial Investment
              </h3>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Total Value ($)</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-foreground font-bold">$</span>
                  <input 
                    type="number" 
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full bg-surface-hover border border-border-strong rounded-xl py-3 pl-8 pr-4 text-foreground font-bold focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Token A */}
              <div className="soft-card p-6 rounded-2xl border border-border-light bg-surface/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px]"></div>
                <h3 className="text-lg font-bold text-foreground mb-4 relative z-10">Token A</h3>
                
                <div className="space-y-4 relative z-10">
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1">Initial Price ($)</label>
                    <input 
                      type="number" 
                      value={initialPriceA}
                      onChange={(e) => setInitialPriceA(Number(e.target.value))}
                      className="w-full bg-surface-hover border border-border-strong rounded-lg py-2 px-4 text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1">Future Price ($)</label>
                    <input 
                      type="number" 
                      value={futurePriceA}
                      onChange={(e) => setFuturePriceA(Number(e.target.value))}
                      className="w-full bg-surface-hover border border-border-strong rounded-lg py-2 px-4 text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="pt-2 text-sm font-bold text-primary flex justify-between">
                    <span>Change:</span>
                    <span>{((futurePriceA - initialPriceA) / initialPriceA * 100).toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              {/* Token B */}
              <div className="soft-card p-6 rounded-2xl border border-border-light bg-surface/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px]"></div>
                <h3 className="text-lg font-bold text-foreground mb-4 relative z-10">Token B</h3>
                
                <div className="space-y-4 relative z-10">
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1">Initial Price ($)</label>
                    <input 
                      type="number" 
                      value={initialPriceB}
                      onChange={(e) => setInitialPriceB(Number(e.target.value))}
                      className="w-full bg-surface-hover border border-border-strong rounded-lg py-2 px-4 text-foreground focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1">Future Price ($)</label>
                    <input 
                      type="number" 
                      value={futurePriceB}
                      onChange={(e) => setFuturePriceB(Number(e.target.value))}
                      className="w-full bg-surface-hover border border-border-strong rounded-lg py-2 px-4 text-foreground focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div className="pt-2 text-sm font-bold text-purple-400 flex justify-between">
                    <span>Change:</span>
                    <span>{((futurePriceB - initialPriceB) / initialPriceB * 100).toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 soft-card p-6 rounded-2xl border border-primary/30 bg-gradient-to-b from-[#121A1D] to-[#1A262B] shadow-[0_0_50px_rgba(106,133,211,0.15)]">
              <h3 className="text-lg font-bold text-foreground mb-6 border-b border-border-strong pb-4">Calculation Results</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-muted mb-1">Impermanent Loss</p>
                  <p className="text-4xl font-display font-bold text-red-400">
                    {results.impermanentLossPercentage.toFixed(2)}%
                  </p>
                  <p className="text-sm font-medium text-red-400/80 mt-1">
                    -${results.lossInDollars.toFixed(2)}
                  </p>
                </div>

                <div className="h-px w-full bg-white/10"></div>

                <div>
                  <p className="text-sm text-text-muted mb-1">Value if held in wallet</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${results.valueIfHeld.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-text-muted mb-1">Value in Liquidity Pool</p>
                  <p className="text-2xl font-bold text-primary-light">
                    ${results.valueInPool.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-xs text-blue-200 leading-relaxed">
                  <strong>Note:</strong> Impermanent loss occurs when the price ratio of deposited tokens changes compared to when you deposited them. The larger the change, the larger the loss.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
