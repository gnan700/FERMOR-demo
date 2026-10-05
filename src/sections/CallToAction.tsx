"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          className="bg-accent rounded-3xl p-8 sm:p-10 md:p-16 text-center text-white overflow-hidden relative shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-white/5 rounded-[100%] blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready for financial clarity?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join thousands of people who have already upgraded their financial life with Fermor. Takes exactly 2 minutes to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-accent hover:bg-gray-100 h-12 px-8 text-base shadow-lg transition-transform hover:-translate-y-1">
                Create free account
              </Button>
              <Button className="bg-transparent text-white border-white/20 hover:bg-white/10 h-12 px-8 text-base">
                Talk to support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
