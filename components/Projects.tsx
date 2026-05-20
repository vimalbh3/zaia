"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    name: "Sabras Radio",
    subtitle: "Branding, Website & Social Media Strategy",
    year: "2024",
    category: "Branding · Social · Web",
    color: "#1A1A1A",
    accent: "#B8B8B8",
    number: "01",
  },
  {
    name: "Wed in Motion",
    subtitle: "Website Design Refresh & SEO",
    year: "2024",
    category: "Web · SEO",
    color: "#141414",
    accent: "#8B8B8B",
    number: "02",
  },
  {
    name: "placed.",
    subtitle: "Website Design & SEO",
    year: "2024",
    category: "Recruitment · Web · SEO",
    color: "#181818",
    accent: "#C8C8C8",
    number: "03",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-36 bg-[#0A0A0A] overflow-hidden">
      <div className="px-6 md:px-12 mb-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-4">Portfolio</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#F7F7F5]"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Selected Work
            </h2>
          </div>
          <span className="text-[#2A2A2A] text-sm tracking-widest hidden md:block">
            Drag to explore →
          </span>
        </motion.div>
      </div>

      {/* Horizontal scrollable track */}
      <motion.div
        ref={trackRef}
        className="flex gap-5 px-6 md:px-12 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        drag="x"
        dragConstraints={{ right: 0, left: -(projects.length * 380 - (typeof window !== "undefined" ? window.innerWidth : 1200) + 96) }}
        dragElastic={0.05}
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="relative flex-shrink-0 w-[320px] md:w-[380px] h-[460px] md:h-[520px] rounded-2xl overflow-hidden group"
            style={{ backgroundColor: project.color, border: "1px solid #1e1e1e" }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {/* Card visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[120px] md:text-[140px] font-light leading-none select-none"
                style={{ color: project.accent, opacity: 0.08, fontFamily: "var(--font-playfair)" }}
              >
                {project.number}
              </span>
            </div>

            {/* Geometric accent */}
            <div
              className="absolute top-8 right-8 w-16 h-16 border rounded-full opacity-10"
              style={{ borderColor: project.accent }}
            />
            <div
              className="absolute bottom-24 left-8 w-8 h-8 rounded-full opacity-5"
              style={{ backgroundColor: project.accent }}
            />

            {/* Default bottom info — fades out on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[#B8B8B8] text-xs tracking-widest uppercase mb-1">{project.category}</p>
                  <p className="text-[#F7F7F5] text-xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
                    {project.name}
                  </p>
                  <p className="text-[#B8B8B8] text-sm">{project.subtitle}</p>
                </div>
                <span className="text-[#2A2A2A] text-sm">{project.year}</span>
              </div>
            </div>

            {/* Hover overlay — slides up from bottom */}
            <div className="absolute inset-0 z-20 bg-[#F7F7F5] flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
              <div className="text-[#0A0A0A]">
                <p className="text-xs tracking-widest uppercase mb-3 text-[#6A6A6A]">{project.category} · {project.year}</p>
                <p
                  className="text-4xl mb-2 font-light leading-tight"
                  style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                >
                  {project.name}
                </p>
                <p className="text-sm text-[#4A4A4A] mb-8">{project.subtitle}</p>
                <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-medium border-t border-[#0A0A0A]/10 pt-6">
                  <span>View Case Study</span>
                  <span className="text-base">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
