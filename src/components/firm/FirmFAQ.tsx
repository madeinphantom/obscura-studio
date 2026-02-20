"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is this, exactly?",
    answer: "Private AI infrastructure. We build systems that run on your hardware, connect to your existing operations, and work around the clock without you managing them. For leaders, that means one intelligence layer across every business, investment, and deadline in your life. For firms, it means replacing your most expensive manual workflows with systems that don't sleep, complain, or miss things.",
  },
  {
    question: "Who do you work with?",
    answer: "Portfolio operators, family offices, and principals running multiple entities who can't afford to have their attention scattered. And firms with serious document, research, or coordination workflows that have outgrown what a human team can handle at speed. If you're asking whether this is for you, look at your last week. If your time or your team's time is being consumed by work that should already be automated, it is.",
  },
  {
    question: "How is this different from AI tools I've already tried?",
    answer: "Tools require you. What we build runs without you. It lives inside your operation, connects to your systems, and delivers outputs directly to your phone. You don't prompt it. You don't check on it. You wake up and it's already done the work. That's the difference.",
  },
  {
    question: "How does pricing work?",
    answer: "We scope every engagement to the problem, not a pricing menu. Before we talk numbers, we want to understand what you're dealing with and what solving it is worth to your operation. You'll have a fixed number in writing within 48 hours of our first call — no ambiguity after that.",
  },
  {
    question: "How long does a build take?",
    answer: "One to three weeks. You'll have something running before most firms have finished scoping the problem.",
  },
  {
    question: "What happens to my data?",
    answer: "Nothing leaves your control. Your system runs on your hardware or a private instance you own. It does not touch third-party servers unless you explicitly choose otherwise.",
  },
  {
    question: "What happens after it's built?",
    answer: "We stay. Every deployment includes a 30-day tuning window where we refine and adjust. After that, most clients move to a monthly retainer so the system keeps improving as the technology advances.",
  },
  {
    question: "Why should I trust you with this?",
    answer: "Obscura is a small firm by design. You work directly with the founder — Prince Adza — not an account manager. We build the systems personally and stay involved throughout. If you want to speak to someone we've worked with before moving forward, I'll connect you.",
  }
];

export default function FirmFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 relative overflow-hidden text-white border-t border-white/5">
      <div className="max-w-[1000px] mx-auto space-y-16">
        
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tighter text-white font-fraunces font-normal italic">
            Clarity & Context.
          </h2>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, '0');

            return (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left hover:text-[#b7d1ea] transition-colors group"
                >
                  <div className="flex gap-6 items-center">
                    <span className="text-sm font-medium text-white/40 group-hover:text-[#b7d1ea]/60 transition-colors">
                      {number}
                    </span>
                    <h3 className="text-lg md:text-2xl font-light tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex-shrink-0 text-white/40 group-hover:text-[#b7d1ea]"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 md:pl-[3.25rem] pr-4 max-w-3xl">
                        <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
