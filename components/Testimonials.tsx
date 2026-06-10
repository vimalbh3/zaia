"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { type TouchEvent } from "react";

const testimonials = [
  {
    quote: "Zaia transformed how our brand communicates online. The depth of strategic thinking combined with flawless execution made the difference.",
    name: "Sarah Al-Maktoum",
    company: "Emaar Properties",
    role: "Head of Brand",
  },
  {
    quote: "Working with Zaia is unlike any agency relationship we've had. They think long-term, and their work reflects that rare combination of craft and intelligence.",
    name: "James Whitfield",
    company: "Chalhoub Group",
    role: "Chief Marketing Officer",
  },
  {
    quote: "The campaigns they built for us consistently outperformed our expectations — both in aesthetics and measurable impact. Exceptional team.",
    name: "Nora Hassan",
    company: "Noon",
    role: "VP Marketing",
  },
  {
    quote: "From brand identity to digital activation, Zaia delivered a cohesive vision that our entire organization rallied behind. Truly rare partners.",
    name: "Alexandre Dubois",
    company: "LVMH Middle East",
    role: "Regional Director",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    if (!paused) {
      startInterval();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const goTo = (index: number) => {
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) startInterval();
  };

  // Touch swipe support
  const touchStartX = useRef<number>(0);
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      const next = diff > 0
        ? (current + 1) % testimonials.length
        : (current - 1 + testimonials.length) % testimonials.length;
      goTo(next);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-[#0A0A0A]">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p>
          <h2
            className="text-3xl md:text-4xl font-light text-[#F7F7F5] max-w-lg leading-[1.3]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Trusted by brands that value presence.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          <div className="relative min-h-[280px] md:min-h-[240px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                {/* Large quotation mark */}
                <div
                  className="text-[120px] leading-none text-[#1A1A1A] select-none absolute -top-8 -left-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;
                </div>

                <blockquote className="relative z-10 pt-10">
                  <p
                    className="text-xl md:text-2xl lg:text-3xl font-light text-[#F7F7F5] leading-[1.5] mb-8 max-w-3xl"
                    style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                  >
                    {testimonials[current].quote}
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-8 h-px bg-[#B8B8B8]" />
                    <div>
                      <cite className="not-italic text-[#F7F7F5] text-sm font-medium tracking-wider">
                        {testimonials[current].name}
                      </cite>
                      <p className="text-[#B8B8B8] text-xs tracking-widest uppercase mt-0.5">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center gap-4 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-px bg-[#F7F7F5]"
                    : "w-2 h-px bg-[#2A2A2A] hover:bg-[#B8B8B8]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
