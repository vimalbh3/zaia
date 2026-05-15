"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const brandsRow1 = [
  "Emaar", "Chalhoub", "Marriott", "Rolls-Royce", "Louis Vuitton", "Four Seasons",
  "Emaar", "Chalhoub", "Marriott", "Rolls-Royce", "Louis Vuitton", "Four Seasons",
];

const brandsRow2 = [
  "LVMH", "Rolex", "Sotheby's", "Bulgari", "Chanel", "Net-A-Porter",
  "LVMH", "Rolex", "Sotheby's", "Bulgari", "Chanel", "Net-A-Porter",
];

export default function Brands() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-[#0D0D0D] overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-4">Clientele</p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F7F7F5]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Selected Brands
          </h2>
        </motion.div>
      </div>

      <div className="space-y-6 marquee-container">
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden">
          <div className="animate-marquee flex gap-0 whitespace-nowrap">
            {brandsRow1.map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[#F7F7F5] text-lg md:text-xl tracking-[0.15em] uppercase font-light opacity-30 hover:opacity-80 transition-opacity duration-300 px-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {brand}
                <span className="mx-8 w-px h-4 bg-[#2A2A2A] inline-block" />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="animate-marquee-reverse flex gap-0 whitespace-nowrap">
            {brandsRow2.map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[#F7F7F5] text-lg md:text-xl tracking-[0.15em] uppercase font-light opacity-20 hover:opacity-80 transition-opacity duration-300 px-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {brand}
                <span className="mx-8 w-px h-4 bg-[#2A2A2A] inline-block" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
