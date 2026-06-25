"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StakingRewardsEstimator() {
  const [stakedAmount, setStakedAmount] = useState(1000);
  const [tokenPrice, setTokenPrice] = useState(2.5);
  const [apy, setApy] = useState(12);
  const [durationMonths, setDurationMonths] = useState(12);
  const [compoundDaily, setCompoundDaily] = useState(true);

  const [results, setResults] = useState({
    dailyTokens: 0,
    monthlyTokens: 0,
    yearlyTokens: 0,
    totalEarnedTokens: 0,
    finalTotalTokens: 0,
    finalTotalValueUSD: 0
  });

  useEffect(() => {
    calculateRewards();
  }, [stakedAmount, tokenPrice, apy, durationMonths, compoundDaily]);

  const calculateRewards = () => {
    if (!stakedAmount || !tokenPrice || !apy || !durationMonths) return;

    const decimalApy = apy / 100;
    const durationYears = durationMonths / 12;
    
    let finalTotalTokens = 0;

    if (compoundDaily) {
      // Compound Interest: A = P(1 + r/n)^(nt)
      finalTotalTokens = stakedAmount * Math.pow((1 + decimalApy / 365), 365 * durationYears);
    } else {
      // Simple Interest: A = P(1 + rt)
      finalTotalTokens = stakedAmount * (1 + decimalApy * durationYears);
    }

    const totalEarnedTokens = finalTotalTokens - stakedAmount;
    
    // Estimates based on Simple Interest for daily/monthly to keep UI understandable
    const yearlyTokens = stakedAmount * decimalApy;
    const monthlyTokens = yearlyTokens / 12;
    const dailyTokens = yearlyTokens / 365;

    setResults({
      dailyTokens,
      monthlyTokens,
      yearlyTokens,
      totalEarnedTokens,
      finalTotalTokens,
      finalTotalValueUSD: finalTotalTokens * tokenPrice
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
            <h1 className="text-3xl font-display font-bold text-foreground">Staking Rewards Estimator</h1>
            <p className="text-text-muted text-sm mt-1">Estimate APY and returns from staking various Proof-of-Stake coins.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Inputs Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="soft-card p-6 rounded-2xl border border-border-light bg-surface/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Staked Amount */}
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Amount to Stake (Tokens)</label>
                  <input 
                    type="number" 
                    value={stakedAmount}
                    onChange={(e) => setStakedAmount(Number(e.target.value))}
                    className="w-full bg-surface-hover border border-border-strong rounded-xl py-3 px-4 text-foreground font-bold focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                {/* Token Price */}
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Token Price ($)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-foreground font-bold">$</span>
                    <input 
                      type="number" 
                      value={tokenPrice}
                      onChange={(e) => setTokenPrice(Number(e.target.value))}
                      className="w-full bg-surface-hover border border-border-strong rounded-xl py-3 pl-8 pr-4 text-foreground font-bold focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* APY */}
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Reward APY (%)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={apy}
                      onChange={(e) => setApy(Number(e.target.value))}
                      className="w-full bg-surface-hover border border-border-strong rounded-xl py-3 px-4 text-foreground font-bold focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <span className="absolute right-4 top-3 text-text-muted font-bold">%</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Duration (Months)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={durationMonths}
                      onChange={(e) => setDurationMonths(Number(e.target.value))}
                      className="w-full bg-surface-hover border border-border-strong rounded-xl py-3 px-4 text-foreground font-bold focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <span className="absolute right-4 top-3 text-text-muted text-sm">Months</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="60" 
                    value={durationMonths} 
                    onChange={(e) => setDurationMonths(Number(e.target.value))}
                    className="w-full mt-4 accent-orange-500"
                  />
                </div>

              </div>
              
              <div className="mt-8 pt-6 border-t border-border-strong flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="compound" 
                  checked={compoundDaily}
                  onChange={(e) => setCompoundDaily(e.target.checked)}
                  className="w-5 h-5 accent-orange-500 rounded bg-surface-hover border-border-strong"
                />
                <label htmlFor="compound" className="text-sm font-medium text-foreground cursor-pointer">
                  Compound Interest Daily (Re-stake rewards)
                </label>
              </div>

            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 soft-card p-6 rounded-2xl border border-orange-500/30 bg-gradient-to-b from-[#121A1D] to-[#1A262B] shadow-[0_0_50px_rgba(249,115,22,0.1)]">
              <h3 className="text-lg font-bold text-foreground mb-6 border-b border-border-strong pb-4">Estimated Returns</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-muted mb-1">Total Earned Rewards</p>
                  <p className="text-3xl font-display font-bold text-orange-400">
                    +{results.totalEarnedTokens.toFixed(2)}
                  </p>
                  <p className="text-sm font-medium text-orange-400/80 mt-1">
                    +${(results.totalEarnedTokens * tokenPrice).toFixed(2)}
                  </p>
                </div>

                <div className="h-px w-full bg-white/10"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-text-muted mb-1">Daily</p>
                    <p className="text-sm font-bold text-foreground">+{results.dailyTokens.toFixed(2)}</p>
                    <p className="text-xs text-foreground/50">${(results.dailyTokens * tokenPrice).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-1">Monthly</p>
                    <p className="text-sm font-bold text-foreground">+{results.monthlyTokens.toFixed(2)}</p>
                    <p className="text-xs text-foreground/50">${(results.monthlyTokens * tokenPrice).toFixed(2)}</p>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10"></div>

                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-sm text-orange-200 mb-2">Final Balance after {durationMonths} months:</p>
                  <p className="text-xl font-bold text-foreground mb-1">
                    {results.finalTotalTokens.toFixed(2)} Tokens
                  </p>
                  <p className="text-lg font-bold text-orange-400">
                    ≈ ${results.finalTotalValueUSD.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
