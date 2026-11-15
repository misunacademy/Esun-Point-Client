"use client";

import React from "react";

interface WorkflowCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowColor?: string;
  accentColor?: string;
}

export default function WorkflowCard({
  icon,
  title,
  description,
  glowColor = "hsl(217 91% 60%)",
  accentColor = "hsl(217 91% 60%)",
}: WorkflowCardProps) {
  return (
    <div
      className="group relative h-full rounded-2xl bg-surface border py-7 px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep overflow-hidden cursor-default"
      style={{
        borderColor: `color-mix(in srgb, ${accentColor} 20%, transparent)`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl-2xl opacity-60"
        style={{ borderColor: `color-mix(in srgb, ${accentColor} 60%, transparent)` }}
      />
      <div
        className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr-2xl opacity-60"
        style={{ borderColor: `color-mix(in srgb, ${accentColor} 60%, transparent)` }}
      />

      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to right, transparent, ${glowColor} 50%, transparent)` }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${glowColor} 12%, transparent) 0%, transparent 70%)` }}
      />

      <div className="relative z-10 mb-4 transition-all duration-300 group-hover:scale-110 w-fit">
        <span className="[&_svg]:w-10 [&_svg]:h-10 sm:[&_svg]:w-12 sm:[&_svg]:h-12">{icon}</span>
      </div>

      <h3 className="relative z-10 text-base font-bold mt-1 mb-2 leading-snug text-white/90 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
        {description}
      </p>
    </div>
  );
}
