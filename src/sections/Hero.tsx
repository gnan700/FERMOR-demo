"use client";

import { Button } from "@/components/Button";
import { ArrowRight, TrendingUp, Shield, Activity } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const boxAnim: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-background pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        
        <motion.div 
          className="flex-1 text-center lg:text-left z-10 w-full"
          variants={boxAnim}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemAnim} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Meet the new standard for your money
          </motion.div>
          <motion.h1 variants={itemAnim} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Finance, <br className="hidden lg:block" /> finally <span className="text-accent">clear.</span>
          </motion.h1>
          <motion.p variants={itemAnim} className="text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Understand your money at a glance. Make smarter decisions without a finance degree. Fermor gives you the clarity you need to grow your wealth seamlessly.
          </motion.p>
          <motion.div variants={itemAnim} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="primary" className="w-full sm:w-auto h-12 px-8 text-base group">
              Open free account
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-base">
              See how it works
            </Button>
          </motion.div>
          <motion.div variants={itemAnim} className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-muted">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-accent" /> Bank-level security
            </div>
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-accent" /> No hidden fees
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full max-w-xl lg:max-w-none relative mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>
          
          <div className="bg-surface rounded-2xl border border-border shadow-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm font-medium text-muted mb-1">Total Balance</p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">$124,500.00</h3>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold border border-green-100">
                <TrendingUp size={16} /> +12.5%
              </div>
            </div>

            <div className="h-48 w-full border-b border-dashed border-border mb-8 relative flex items-end">
              <div className="w-full flex items-end justify-between gap-3 h-full pb-1">
                {[40, 30, 60, 50, 80, 70, 100].map((height, i) => (
                  <motion.div 
                    key={i} 
                    className="w-full bg-accent/10 rounded-t-md hover:bg-accent/20 transition-colors relative group"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 + (i * 0.1) }}
                  >
                    {i === 6 && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs py-1.5 px-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                        This Month
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-4">Recent Activity</p>
              <div className="space-y-4">
                {[
                  { name: 'Apple Store', date: 'Today, 2:45 PM', amount: '-$99.00', positive: false },
                  { name: 'Salary Deposit', date: 'Yesterday', amount: '+$4,200.00', positive: true },
                  { name: 'Whole Foods', date: 'Aug 18', amount: '-$124.50', positive: false }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between"
                       style={{ borderBottom: i !== 2 ? '1px solid var(--color-border)' : 'none', paddingBottom: i !== 2 ? '1rem' : '0' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center font-semibold text-foreground">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted mt-0.5">{item.date}</p>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold ${item.positive ? 'text-green-600' : 'text-foreground'}`}>
                      {item.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="absolute -right-6 -bottom-6 bg-foreground text-white p-4 rounded-xl shadow-xl hidden lg:flex items-center gap-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <p className="text-xs text-white/70 font-medium">Savings Goal</p>
              <p className="text-sm font-bold mt-0.5">On track for 2026</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
