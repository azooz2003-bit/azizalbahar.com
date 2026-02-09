"use client";

import { motion } from "framer-motion";
import ThoughtBubble from "./ThoughtBubble";
import ArticleCard from "./ArticleCard";
import type { WritingEntry } from "@/lib/types";

interface WritingGridProps {
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
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

export default function WritingGrid({
  entries,
  onSelect,
}: WritingGridProps) {
  return (
    <motion.div
      key={entries.map((e) => e.id).join(",")}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-4"
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
  );
}
