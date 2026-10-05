"use client";

import { BarChart3, ArrowRightLeft, PiggyBank } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Understand your spending",
      description: "Get beautiful, automated categorizations of your spending. No more guessing where your money went at the end of the month.",
      icon: <BarChart3 size={24} className="text-accent" />,
    },
    {
      title: "Seamless transfers",
      description: "Send money to friends, family, or other accounts in seconds. Zero fees, zero wait times, pure simplicity.",
      icon: <ArrowRightLeft size={24} className="text-accent" />,
    },
    {
      title: "Grow your savings",
      description: "Set personalized goals and let our smart algorithms save for you automatically. Watch your wealth grow on autopilot.",
      icon: <PiggyBank size={24} className="text-accent" />,
    }
  ];

  const boxAnim: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Everything you need. <br /> Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-muted">
            We stripped away the confusing jargon and cluttered interfaces of traditional banking to give you a tool that actually works for you.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={boxAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemAnim}
              className="p-8 rounded-2xl bg-surface border border-border hover:shadow-xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
