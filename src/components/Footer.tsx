"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold tracking-tight mb-4">ENVC</h3>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Entrepreneurship and VC Boğaziçi — the premier platform connecting
              Turkey's brightest technical minds with the capital and mentorship
              to build world-class companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "#vision" },
                { label: "Programs", href: "#programs" },
                { label: "Partners", href: "#partners" },
                { label: "Kariyer", href: "/careers" },
                { label: "Bülten", href: "/newsletter" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Manage Jobs", href: "https://sanity.io/manage" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Stay Informed
            </h4>
            <p className="text-sm text-white/60 mb-4">
              Join 800+ founders, investors, and students in our community
              newsletter. Get updates on events, deals &amp; opportunities.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 h-10 bg-white/5 border border-white/20 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors"
                required
              />
              <button
                type="submit"
                className="h-10 w-10 flex items-center justify-center border border-white/20 border-l-0 text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Entrepreneurship and VC Boğaziçi. All rights reserved.</p>
          <p>Boğaziçi University Student Community</p>
        </div>
      </div>
    </footer>
  );
}
