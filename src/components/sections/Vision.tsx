"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Vision() {
  return (
    <Section id="vision" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">
            Our Vision
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-8">
            Where academic
            <br />
            excellence fuels
            <br />
            <span className="text-white/50">entrepreneurial ambition.</span>
          </h2>
          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-white/60 max-w-lg">
            <p>
              Boğaziçi University has produced generations of world-class
              engineers, researchers, and business leaders. ENVC channels that
              legacy into the startup ecosystem.
            </p>
            <p>
              We believe the next wave of transformative companies will be built
              by founders who combine deep technical skill with bold vision.
              Our mission is to create the infrastructure — mentorship, capital
              access, and community — that turns that belief into reality.
            </p>
          </div>
        </motion.div>

        {/* Team photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden border border-white/10">
            <Image
              src="/images/envc-team.jpg"
              alt="ENVC Boğaziçi Ekibi"
              width={800}
              height={600}
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              priority
            />
          </div>
          {/* Caption */}
          <p className="mt-4 text-xs text-white/30 tracking-wide">
            ENVC Boğaziçi Ekibi
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
