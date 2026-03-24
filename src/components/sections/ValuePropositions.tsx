"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";
import { Briefcase, Lightbulb, GraduationCap } from "lucide-react";

const tabs = [
  {
    key: "vcs",
    label: "For VCs",
    icon: Briefcase,
    items: [
      {
        title: "Curated Deal Flow",
        description:
          "Access a pipeline of pre-vetted startups founded by Boğaziçi's strongest technical talent — filtered for quality, not volume.",
      },
      {
        title: "Scout Top Engineering Talent",
        description:
          "Connect directly with graduates from one of Turkey's leading STEM universities, many with international research and industry experience.",
      },
      {
        title: "University Partnership",
        description:
          "Leverage institutional access for on-campus events, research collaborations, and exclusive networking with faculty and alumni founders.",
      },
    ],
  },
  {
    key: "founders",
    label: "For Founders",
    icon: Lightbulb,
    items: [
      {
        title: "Alumni Mentorship",
        description:
          "Get hands-on guidance from Boğaziçi alumni who have built and scaled companies — from first customer to Series A and beyond.",
      },
      {
        title: "Peer Networking",
        description:
          "Join a tight-knit community of ambitious builders. Trade insights, form teams, and find co-founders who share your drive.",
      },
      {
        title: "Early-Stage Visibility",
        description:
          "Showcase your startup at our Demo Days and get direct exposure to active angel investors and VC partners.",
      },
    ],
  },
  {
    key: "talents",
    label: "For Talents",
    icon: GraduationCap,
    items: [
      {
        title: "VC & Startup Internships",
        description:
          "Gain real-world experience at venture capital firms and high-growth startups through our curated placement program.",
      },
      {
        title: "Workshops & Skill Building",
        description:
          "Attend expert-led sessions on financial modeling, product thinking, cap tables, and the venture ecosystem.",
      },
      {
        title: "Career Pathways",
        description:
          "Whether you want to join a startup, launch your own, or enter venture capital — we help you chart the path.",
      },
    ],
  },
];

export default function ValuePropositions() {
  const [activeTab, setActiveTab] = useState("vcs");
  const activeData = tabs.find((t) => t.key === activeTab)!;

  return (
    <Section id="value" muted>
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-secondary mb-4">
          What We Offer
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Built for every player
          <br />
          in the ecosystem.
        </h2>
      </div>

      {/* Tab strip */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex border border-black/15">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 sm:px-8 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-black text-white"
                    : "bg-transparent text-text-secondary hover:bg-black/5"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {activeData.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1"
            >
              <div className="w-8 h-8 border border-black/15 flex items-center justify-center mb-5">
                <span className="text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
