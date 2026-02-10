"use client";

import { motion } from "framer-motion";
import type { WritingEntry } from "@/lib/types";

interface ThoughtBubbleProps {
  entry: WritingEntry;
  onClick: () => void;
  showCategory?: boolean;
}

export default function ThoughtBubble({ entry, onClick, showCategory }: ThoughtBubbleProps) {
  return (
    <motion.button
      onClick={onClick}
      className="thought-bubble relative p-6 mb-14 w-full text-left cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {showCategory && (
        <p className="text-[10px] uppercase tracking-wider text-text-tertiary mb-2">Thought</p>
      )}
      <p className="text-base font-medium leading-relaxed">
        {entry.excerpt}
      </p>
      <p className="text-xs text-text-tertiary mt-3">{entry.date}</p>
    </motion.button>
  );
}
