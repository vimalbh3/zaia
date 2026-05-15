"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Content Production",
    description: "Premium video, photography, and editorial content crafted for brands that refuse to be ordinary. Every frame is intentional.",
    tags: ["Video", "Photography", "Editorial"],
  },
  {
    number: "02",
    title: "Social Strategy",
    description: "Data-informed strategies that build communities, not just followers. We turn platforms into stages for your brand's narrative.",
    tags: ["Strategy", "Community", "Analytics"],
  },
  {
    number: "03",
    title: "Paid Media",
    description: "Performance campaigns engineered for efficiency and elegance. We allocate your budget where it generates the highest return.",
    tags: ["Paid Social", "Search", "Programmatic"],
  },
  {
    number: "04",
    title: "Branding",
    description: "Identity systems built for longevity. From visual language to brand voice, we create marks that stand for something lasting.",
    tags: ["Identity", "Visual Systems", "Brand Voice"],
  },
  {
    number: "05",
    title: "Creative Direction",
    description: "End-to-end creative leadership for campaigns, launches, and transformations. Guiding vision into execution with precision.",
    tags: ["Campaigns", "Art Direction", "Concepts"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-36 bg-[#0A0A0A]">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-4">Capabilities</p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F7F7F5]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            What We Do
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="relative border-t border-[#1E1E1E] py-8 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
                {/* Number */}
                <span className="text-[#2A2A2A] text-sm tracking-widest md:w-24 flex-shrink-0 group-hover:text-[#B8B8B8] transition-colors duration-300">
                  {service.number}
                </span>

                {/* Title */}
                <div className="md:flex-1">
                  <h3
                    className="text-2xl md:text-3xl font-light text-[#F7F7F5] mb-0 group-hover:text-[#F7F7F5] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {service.title}
                  </h3>

                  <motion.div
                    initial={false}
                    animate={{ height: hovered === i ? "auto" : 0, opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="text-[#B8B8B8] text-sm leading-relaxed mt-4 max-w-xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest uppercase text-[#B8B8B8] border border-[#2A2A2A] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Arrow */}
                <div className="md:w-24 flex-shrink-0 flex md:justify-end">
                  <motion.span
                    className="text-[#2A2A2A] text-lg"
                    animate={{ x: hovered === i ? 8 : 0, opacity: hovered === i ? 1 : 0.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>

              {/* Bottom border hover effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-[#B8B8B8]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ width: "100%" }}
              />
            </motion.div>
          ))}
          <div className="border-t border-[#1E1E1E]" />
        </div>
      </div>
    </section>
  );
}
