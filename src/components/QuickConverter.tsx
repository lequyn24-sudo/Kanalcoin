"use client";

import React, { useState } from "react";

export default function QuickConverter() {
  const [amount, setAmount] = useState<string>("1");
  const [isBtcToUsd, setIsBtcToUsd] = useState<boolean>(true);
  
  // Mock BTC rate
  const btcRate = 64250.00;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const toggleDirection = () => {
    setIsBtcToUsd(!isBtcToUsd);
  };

  // Calculate output based on direction
  const numAmount = parseFloat(amount) || 0;
  const convertedValue = isBtcToUsd 
    ? (numAmount * btcRate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : (numAmount / btcRate).toLocaleString('en-US', { minimumFractionDigits: 6, maximumFractionDigits: 6 });

  return (
    <div className="soft-card p-5 flex flex-col flex-1 shadow-sm border border-border-light relative overflow-hidden group">
      {/* Background element */}
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#8AA0E5]/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#8AA0E5]/20 transition-colors duration-500"></div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-[#8AA0E5] font-display font-bold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Quick Convert
        </h2>
      </div>
      
      <div className="flex-1 flex flex-col justify-center gap-3 relative z-10">
        {/* Top Input */}
        <div className="flex items-center bg-surface-hover border border-border-strong rounded-xl p-3 focus-within:border-[#8AA0E5]/50 transition-colors">
          <input 
            type="number" 
            value={amount}
            onChange={handleAmountChange}
            placeholder="0"
            className="bg-transparent text-foreground text-xl font-bold w-full focus:outline-none" 
          />
          <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-lg border border-border-light shrink-0 shadow-sm">
            {isBtcToUsd ? (
              <>
                <div className="w-5 h-5 bg-[#F7931A] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-inner">B</div>
                <span className="text-sm font-bold text-foreground">BTC</span>
              </>
            ) : (
              <>
                <div className="w-5 h-5 bg-[#26A17B] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-inner">$</div>
                <span className="text-sm font-bold text-foreground">USD</span>
              </>
            )}
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-3 relative z-20">
          <button 
            onClick={toggleDirection}
            className="w-9 h-9 rounded-full bg-surface border border-border-strong flex items-center justify-center text-[#8AA0E5] hover:bg-surface-active hover:scale-110 hover:border-[#8AA0E5]/50 transition-all shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
          </button>
        </div>

        {/* Bottom Output */}
        <div className="flex items-center bg-surface-hover border border-border-strong rounded-xl p-3 opacity-90">
          <input 
            type="text" 
            readOnly 
            value={convertedValue} 
            className="bg-transparent text-foreground text-xl font-bold w-full focus:outline-none" 
          />
          <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-lg border border-border-light shrink-0 shadow-sm">
            {!isBtcToUsd ? (
              <>
                <div className="w-5 h-5 bg-[#F7931A] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-inner">B</div>
                <span className="text-sm font-bold text-foreground">BTC</span>
              </>
            ) : (
              <>
                <div className="w-5 h-5 bg-[#26A17B] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-inner">$</div>
                <span className="text-sm font-bold text-foreground">USD</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
