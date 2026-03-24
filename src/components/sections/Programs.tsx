"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { Calendar, Users, Mic } from "lucide-react";

const programs = [
  {
    tag: "Flagship",
    title: "Demo Days",
    description:
      "Bi-annual showcase where student and alumni founders pitch to a curated audience of VCs, angels, and corporate partners. High-stakes, high-visibility.",
    icon: Calendar,
  },
  {
    tag: "Recurring",
    title: "Office Hours",
    description:
      "Weekly one-on-one sessions with experienced investors and operators. Bring your toughest product, fundraising, or growth questions.",
    icon: Users,
  },
  {
    tag: "Monthly",
    title: "Tech Talks",
    description:
      "Deep-dive sessions on emerging technologies, market trends, and founder stories — featuring speakers from Turkey's and Europe's tech ecosystem.",
    icon: Mic,
  },
];

export default function Programs() {
  return (
    <Section id="programs">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-secondary mb-4">
          Programs &amp; Events
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Learn, build, connect.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program, i) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Card
              tag={program.tag}
              title={program.title}
              description={program.description}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
