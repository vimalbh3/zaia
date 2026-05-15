"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 2.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #B8B8B8 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #F7F7F5 0%, transparent 70%)",
            bottom: "15%",
            right: "5%",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div
        className="relative z-10 px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto w-full"
        style={{ y, opacity }}
      >
        {/* Pre-heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-10"
          >
            Dubai — UAE &nbsp;·&nbsp; Est. 2016
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-[#F7F7F5] mb-8 max-w-5xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Digital Content
            <br />
            <span className="italic" style={{ fontFamily: "var(--font-playfair)" }}>
              Agency
            </span>{" "}
            in UAE
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#B8B8B8] text-lg md:text-xl font-light max-w-lg mb-14 leading-relaxed"
          >
            We don&apos;t chase attention.
            <br />
            We build brand presence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#F7F7F5] text-[#0A0A0A] px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-[#B8B8B8] transition-colors duration-300"
            >
              Begin Journey
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 border border-[#2A2A2A] text-[#F7F7F5] px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:border-[#B8B8B8] transition-colors duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 flex items-end justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#2A2A2A]" />
            <span className="text-[#B8B8B8] text-xs tracking-widest uppercase">Scroll</span>
          </div>
          <span className="text-[#2A2A2A] text-xs tracking-widest">© 2024</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
