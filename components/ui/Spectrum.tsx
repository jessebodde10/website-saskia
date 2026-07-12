"use client";

import { motion, useReducedMotion } from "framer-motion";
import { generations } from "@/lib/generations";

type SpectrumProps = {
  className?: string;
  /** Toon labels (naam + jaartallen) onder de balk */
  labels?: boolean;
};

// Het generatiespectrum: gedempte tinten van babyboomer tot Alpha,
// die als een tijdlijn van links naar rechts invullen.
export default function Spectrum({
  className = "",
  labels = true,
}: SpectrumProps) {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <div className="flex items-baseline justify-between">
        <span className="label-mono">Het generatiespectrum</span>
        <span className="label-mono">1946 &rarr; nu</span>
      </div>

      <div className="mt-3 flex h-2.5 overflow-hidden rounded-full">
        {generations.map((g, i) => (
          <motion.span
            key={g.key}
            aria-hidden
            className={`flex-1 ${g.tint}`}
            initial={{ opacity: reduce ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: reduce ? 0 : i * 0.09,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      {labels && (
        <div className="mt-3 grid grid-cols-5">
          {generations.map((g) => (
            <div key={g.key} className="pr-2">
              <div className="font-display text-sm font-semibold text-ink">
                {g.short}
              </div>
              <div className="label-mono mt-0.5">{g.jarenShort}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
