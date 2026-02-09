"use client";

import { motion } from "framer-motion";
import type { WritingEntry } from "@/lib/types";

interface ThoughtBubbleProps {
  entry: WritingEntry;
  onClick: () => void;
}

export default function ThoughtBubble({ entry, onClick }: ThoughtBubbleProps) {
  return (
    <motion.button
      onClick={onClick}
      className="thought-bubble relative p-6 mb-6 w-full text-left cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <p className="text-base font-medium leading-relaxed">
        {entry.excerpt}
      </p>
      <p className="text-xs text-text-tertiary mt-3">{entry.date}</p>
    </motion.button>
  );
}
