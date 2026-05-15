"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const articles = [
  {
    category: "Brand Strategy",
    title: "Why Luxury Brands Are Rethinking Their Digital Presence in 2024",
    date: "Nov 2024",
    readTime: "5 min read",
    excerpt: "The rules of digital luxury have changed. Here's what the leading brands are doing differently.",
  },
  {
    category: "Content",
    title: "The Architecture of Memorable Content: A Framework for UAE Brands",
    date: "Oct 2024",
    readTime: "7 min read",
    excerpt: "Content that resonates isn't accidental. We break down the structural principles behind campaigns that last.",
  },
  {
    category: "Insights",
    title: "Social Media in the Gulf: Beyond Engagement Metrics",
    date: "Sep 2024",
    readTime: "6 min read",
    excerpt: "What does success look like on social media for premium brands? Hint: it's not follower counts.",
  },
];

export default function Insights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="insights" ref={sectionRef} className="py-24 md:py-36 bg-[#0A0A0A]">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div>
            <p className="text-[#B8B8B8] text-xs tracking-[0.4em] uppercase mb-4">Journal</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#F7F7F5]"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Insights
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-[#B8B8B8] text-xs tracking-widest uppercase border-b border-[#2A2A2A] pb-1 hover:border-[#B8B8B8] hover:text-[#F7F7F5] transition-colors duration-300"
          >
            All Articles →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group border-t border-[#1E1E1E] pt-8 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }}
            >
              <span className="text-xs tracking-widest uppercase text-[#B8B8B8] mb-4 block">
                {article.category}
              </span>

              <h3
                className="text-lg md:text-xl font-light text-[#F7F7F5] mb-4 leading-[1.4] group-hover:text-[#B8B8B8] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {article.title}
              </h3>

              <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6 opacity-70">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[#2A2A2A] text-xs tracking-wider">{article.date}</span>
                <span className="text-[#2A2A2A] text-xs">{article.readTime}</span>
              </div>

              {/* Hover line */}
              <motion.div
                className="h-px bg-[#B8B8B8] mt-6"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
