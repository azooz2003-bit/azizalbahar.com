"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import type { WritingEntry } from "@/lib/types";

interface ArticleCardProps {
  entry: WritingEntry;
  onClick: () => void;
}

export default function ArticleCard({ entry, onClick }: ArticleCardProps) {
  return (
    <motion.div className="w-full">
      <GlassCard
        hoverable
        onClick={onClick}
        className="p-5 cursor-pointer h-full"
      >
        <h3 className="text-sm font-semibold">{entry.title}</h3>
        <p className="text-xs text-text-secondary mt-2 leading-relaxed line-clamp-3">
          {entry.excerpt}
        </p>
        <p className="text-xs text-text-tertiary mt-3">{entry.date}</p>
      </GlassCard>
    </motion.div>
  );
}
