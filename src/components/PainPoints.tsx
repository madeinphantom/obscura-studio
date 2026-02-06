import React from "react";
import { Copy, Database, Code2 } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function PainPoints() {
  const points = [
    {
      icon: <Copy className="w-8 h-8 text-[#b7d1ea]" />,
      title: "Drowning in Manual Work",
      description: "You know AI could help but don't know where to start. We audit your workflow and build automations that save you hours every week."
    },
    {
      icon: <Database className="w-8 h-8 text-[#b7d1ea]" />,
      title: "Data Chaos",
      description: "Documents, spreadsheets, and files scattered everywhere. We organize and connect your data so AI can actually work with it."
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#b7d1ea]" />,
      title: "No Technical Team",
      description: "You don't need to hire a developer. We build, deploy, and maintain custom tools tailored to your business."
    }
  ];

  return (
    <section id="pain-points" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            AI is everywhere. But who&apos;s actually helping you use it?
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            You&apos;ve seen the headlines. You know AI can save you hours, cut costs, and transform how you work. But between running your business and living your life, you don&apos;t have time to figure out which tools to use, how to connect them, or how to make them actually work for you.
            <br /><br />
            <span className="text-[#b7d1ea]">That&apos;s where we come in.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {points.map((point, index) => (
            <GlassCard key={index} className="flex flex-col items-start space-y-4 p-8 group h-full hover:bg-white/[0.02] transition-colors duration-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#b7d1ea]/30 transition-colors duration-300">
                {/* @ts-expect-error - Lucide icons pass props but TS is strict about ReactElement */}
                {React.cloneElement(point.icon as React.ReactElement, { className: "w-8 h-8 text-[#b7d1ea] group-hover:scale-110 transition-transform duration-300" })}
              </div>
              <h3 className="text-xl font-semibold text-white tracking-wide">{point.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {point.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
