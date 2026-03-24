"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface SubscriptionFormProps {
  dark?: boolean;
}

export default function SubscriptionForm({ dark = false }: SubscriptionFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const borderColor = dark ? "border-white/20" : "border-black/15";
  const inputBg = dark ? "bg-white/5" : "bg-white";
  const inputText = dark ? "text-white placeholder:text-white/30" : "text-black placeholder:text-black/30";
  const buttonHover = dark
    ? "text-white hover:bg-white hover:text-black"
    : "text-black hover:bg-black hover:text-white";

  if (submitted) {
    return (
      <p className={`text-sm ${dark ? "text-white/60" : "text-text-secondary"}`}>
        Abone olduğunuz için teşekkürler! ✓
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta adresiniz"
        className={`flex-1 h-11 ${inputBg} border ${borderColor} px-4 text-sm ${inputText} focus:outline-none focus:border-black/40 transition-colors`}
        required
      />
      <button
        type="submit"
        className={`h-11 w-11 flex items-center justify-center border ${borderColor} border-l-0 ${buttonHover} transition-colors`}
        aria-label="Abone ol"
      >
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
