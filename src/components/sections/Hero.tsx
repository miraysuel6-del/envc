"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-[15%] w-px h-40 bg-black/10 hidden lg:block" />
      <div className="absolute bottom-32 left-[10%] w-32 h-px bg-black/10 hidden lg:block" />
      <div className="absolute top-1/3 left-[8%] w-2 h-2 bg-black/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/4 right-[12%] w-3 h-3 border border-black/10 hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-secondary mb-6">
            Boğaziçi University
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            The Future of Venture
            <br />
            <span className="text-text-secondary">&amp; Innovation</span>
            <br />
            at Boğaziçi.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Connecting Turkey&apos;s top technical talent with visionary founders
          and capital. Where academic rigor meets startup speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="outline" href="#value">
            For Investors
          </Button>
          <Button variant="solid" href="#contact">
            Join Community
          </Button>
        </motion.div>

        {/* Bottom line accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-20 mx-auto w-16 h-px bg-black/20 origin-center"
        />
      </div>
    </section>
  );
}
