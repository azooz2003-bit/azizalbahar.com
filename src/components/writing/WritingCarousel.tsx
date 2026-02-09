"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ThoughtBubble from "./ThoughtBubble";
import ArticleCard from "./ArticleCard";
import type { WritingEntry } from "@/lib/types";

interface WritingCarouselProps {
  entries: WritingEntry[];
  onSelect: (entry: WritingEntry) => void;
}

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

export default function WritingCarousel({
  entries,
  onSelect,
}: WritingCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {isDesktop && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Scroll left"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 3L5 7l4 4" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Scroll right"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l4 4-4 4" />
            </svg>
          </button>
        </>
      )}

      <motion.div
        key={entries.map((e) => e.id).join(",")}
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-6 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {entries.map((entry) => (
          <motion.div key={entry.id} variants={itemVariants}>
            {entry.category === "thought" ? (
              <ThoughtBubble
                entry={entry}
                onClick={() => onSelect(entry)}
              />
            ) : (
              <ArticleCard
                entry={entry}
                onClick={() => onSelect(entry)}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
