"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import SubscriptionForm from "@/components/newsletter/SubscriptionForm";

export default function NewsletterCTA() {
  return (
    <Section id="newsletter" dark>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">
          ENVC Weekly
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Haftalık bültenimize
          <br />
          abone olun.
        </h2>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8">
          Startup ekosistemi, yatırım trendleri ve topluluk haberleri —
          her hafta doğrudan gelen kutunuza.
        </p>
        <div className="flex justify-center">
          <SubscriptionForm dark />
        </div>
      </motion.div>
    </Section>
  );
}
