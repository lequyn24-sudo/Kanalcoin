"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login
    setTimeout(() => {
      // In a real app, we would set a token/cookie here.
      // We will simulate routing back to the previous page or home.
      router.push('/');
    }, 1500);
  };

  const handleConnectWallet = () => {
    setIsSubmitting(true);
    // Simulate wallet connection
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 soft-card p-6 md:p-12 rounded-[32px] border border-border-light bg-surface/80 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-light/20 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00FFAA]/10 to-transparent rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

        {/* Left Column: Visual/Message */}
        <div className="flex flex-col justify-center relative z-10 hidden md:flex border-r border-border-light pr-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-[#8AA0E5] font-bold text-xs mb-6 w-max">
            <span className="w-2 h-2 rounded-full bg-[#8AA0E5] animate-pulse"></span>
            Join the Revolution
          </div>
          <h1 className="text-4xl font-display font-black text-foreground mb-4 leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-[#8AA0E5]">Kanalcoin</span>
          </h1>
          <p className="text-text-muted text-sm mb-8 leading-relaxed">
            Sign in to unlock personalized crypto tools, portfolio tracking, and seamless article publishing on our Web3 network.
          </p>
          
          <div className="flex items-center gap-4 text-sm font-medium text-text-dim">
            <div className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center">🔒</div>
            End-to-End Encryption
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col justify-center relative z-10 w-full max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2 md:hidden">Welcome Back</h2>
          <p className="text-text-muted text-sm mb-6 md:hidden">Sign in to unlock personalized features.</p>
          
          <button 
            onClick={handleConnectWallet}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 bg-surface-hover border border-border-strong hover:border-[#F6851B]/50 hover:bg-[#F6851B]/5 py-3.5 rounded-xl font-bold text-sm text-foreground transition-all mb-6 group disabled:opacity-50"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Connect Web3 Wallet
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-border-light flex-1"></div>
            <span className="text-xs text-text-dim font-medium uppercase tracking-wider">or sign in with email</span>
            <div className="h-px bg-border-light flex-1"></div>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Password</label>
                <Link href="#" className="text-xs text-primary-light hover:underline font-medium">Forgot?</Link>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/5 dark:bg-black/40 border border-border-strong rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 rounded-xl font-bold bg-gradient-to-r from-[#8AA0E5] to-[#344A83] text-white border border-white/20 shadow-[0_4px_20px_rgba(106,133,211,0.3)] hover:shadow-[0_0_25px_rgba(106,133,211,0.5)] transition-all disabled:opacity-70 flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-text-muted mt-6">
            Don't have an account? <Link href="#" className="text-primary-light font-bold hover:underline">Register now</Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}
