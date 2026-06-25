import React from 'react';
import Link from 'next/link';

interface ProPaywallProps {
  toolName: string;
  description: string;
  icon: string;
  features: string[];
}

export default function ProPaywall({ toolName, description, icon, features }: ProPaywallProps) {
  return (
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20 flex flex-col items-center justify-center min-h-[80vh]">
      
      <div className="w-full max-w-3xl relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-[100px] -z-10 rounded-full"></div>

        <div className="soft-card p-1 md:p-2 rounded-3xl border border-border-strong bg-gradient-to-br from-[#121A1D]/90 to-[#1A262B]/90 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          {/* Pro Badge */}
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              Pro Feature
            </span>
          </div>

          <div className="p-8 md:p-12 text-center">
            
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#1A262B] to-[#121A1D] border border-border-strong rounded-2xl flex items-center justify-center text-5xl mb-8 shadow-inner relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl group-hover:bg-primary/30 transition-all"></div>
              <span className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{icon}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {toolName}
            </h1>
            
            <p className="text-text-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-border-light">
                  <div className="mt-0.5 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white font-bold text-lg hover:brightness-110 shadow-[0_0_30px_rgba(106,133,211,0.4)] transition-all transform hover:-translate-y-1">
                Upgrade to Pro
              </Link>
              <Link href="/tools" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface-hover text-foreground font-bold text-lg hover:bg-white/10 border border-border-strong transition-all">
                Back to Tools
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
