"use client";

import { motion } from "framer-motion";

export type WritingCategory = "all" | "thought" | "article";

interface CategoryTabsProps {
  active: WritingCategory;
  onChange: (category: WritingCategory) => void;
}

const tabs: { key: WritingCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "thought", label: "Thoughts" },
  { key: "article", label: "Articles" },
];

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-1 p-1 rounded-full w-fit" style={{ background: "var(--subtle-bg)" }}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors"
        >
          {active === tab.key && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 rounded-full shadow-sm"
              style={{ background: "var(--tab-active-bg)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span
            className={`relative z-10 ${
              active === tab.key ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
