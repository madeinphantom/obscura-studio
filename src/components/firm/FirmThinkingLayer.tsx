import React from "react";
import { Lightbulb, GitFork, ShieldAlert, Brain, Scan } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function FirmThinkingLayer() {
  const frameworks = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "First Principles",
      description: "Strip to fundamentals. Rebuild from truth, not assumption."
    },
    {
      icon: <GitFork className="w-6 h-6" />,
      title: "Second-Order Effects",
      description: "What happens after what happens? We map the chain reactions others miss."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Inversion",
      description: "What would make this fail? We stress-test every thesis before you act on it."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Psychological Models",
      description: "What biases are at play? What's driving behaviour? We surface the human layer."
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Pattern Recognition",
      description: "What does this look like across similar situations, markets, and outcomes?"
    }
  ];

  return (
    <section id="thinking-layer" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            The Thinking Layer.
          </h2>
          <p className="text-lg text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Most AI just retrieves data. We build systems that reason with it.<br />
            Using <span className="text-[#b7d1ea]">mental models</span>, not just prompts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {frameworks.map((framework, index) => (
            <GlassCard key={index} className="flex flex-col items-start p-6 group h-full hover:bg-white/[0.02] transition-colors duration-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#b7d1ea]/30 transition-colors duration-300 mb-4">
                {React.cloneElement(framework.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-[#b7d1ea] group-hover:scale-110 transition-transform duration-300" })}
              </div>
              <h3 className="text-base font-semibold text-white tracking-wide mb-2">{framework.title}</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {framework.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
