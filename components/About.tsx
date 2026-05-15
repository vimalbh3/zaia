"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "120+", label: "Brands" },
  { value: "8", label: "Years" },
  { value: "UAE", label: "Based" },
  { value: "Global", label: "Reach" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-36 bg-[#0D0D0D]">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-8">About</p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-[#F7F7F5] leading-[1.2]"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              We create digital presence that feels{" "}
              <span className="not-italic" style={{ fontFamily: "var(--font-inter)", fontWeight: 200 }}>
                inevitable.
              </span>
            </h2>

            {/* Decorative line */}
            <motion.div
              className="mt-10 w-16 h-px bg-[#B8B8B8]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Right: Description + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            <p className="text-[#B8B8B8] text-base leading-[1.8] mb-12 max-w-md">
              Founded in Dubai, Zaia is a luxury digital content agency working at the intersection of culture, craft, and commerce. We partner with brands that believe in the power of intentional presence.
            </p>

            <p className="text-[#B8B8B8] text-base leading-[1.8] mb-14 max-w-md">
              Our team of strategists, creatives, and technologists build ecosystems — not just campaigns — that elevate brands and sustain them over time.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <p
                    className="text-3xl md:text-4xl font-light text-[#F7F7F5] mb-1"
                    style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#B8B8B8] text-xs tracking-[0.3em] uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
