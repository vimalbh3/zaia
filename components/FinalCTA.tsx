"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0D0D0D] overflow-hidden py-24"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.025]"
          style={{
            background: "radial-gradient(circle, #F7F7F5 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <motion.p
          className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Let's create together
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#F7F7F5] leading-[1.05] mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          Your brand deserves
          <br />
          <span style={{ fontFamily: "var(--font-inter)", fontStyle: "normal", fontWeight: 200 }}>
            permanence.
          </span>
        </motion.h2>

        <motion.p
          className="text-[#B8B8B8] text-lg md:text-xl font-light mb-14 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          Let&apos;s build something that lasts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@zaia.ae"
            className="inline-flex items-center gap-3 bg-[#F7F7F5] text-[#0A0A0A] px-10 py-5 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-[#B8B8B8] transition-colors duration-300"
          >
            Begin Your Journey
          </a>
          <span className="text-[#2A2A2A] text-sm tracking-widest">hello@zaia.ae</span>
        </motion.div>

        {/* Decorative dividers */}
        <motion.div
          className="mt-20 flex items-center gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-24 h-px bg-[#1E1E1E]" />
          <span className="text-[#2A2A2A] text-xs tracking-widest">Dubai, UAE</span>
          <div className="w-24 h-px bg-[#1E1E1E]" />
        </motion.div>
      </div>
    </section>
  );
}
