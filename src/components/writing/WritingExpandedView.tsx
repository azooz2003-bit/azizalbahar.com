"use client";

import { motion } from "framer-motion";
import { overlayVariants } from "@/lib/animations";
import type { WritingEntry } from "@/lib/types";

interface WritingExpandedViewProps {
  entry: WritingEntry;
  onClose: () => void;
}

export default function WritingExpandedView({
  entry,
  onClose,
}: WritingExpandedViewProps) {
  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 ${
        entry.category === "thought" ? "overflow-visible" : ""
      }`}
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: "var(--overlay-bg)" }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Content */}
      <motion.div
        className={`relative z-10 w-full max-w-lg ${
          entry.category === "thought"
            ? "thought-bubble thought-bubble--no-tail overflow-visible"
            : "glass-card max-h-[80vh] overflow-y-auto"
        } p-8`}
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-text-secondary transition-colors"
          style={{ background: "var(--close-bg)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--close-bg-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--close-bg)")}
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M2 2l8 8M10 2l-8 8" />
          </svg>
        </button>

        {entry.category === "article" && (
          <h2 className="text-lg font-semibold mb-3 pr-8">{entry.title}</h2>
        )}
        <p className="text-sm leading-relaxed text-text-primary pr-8">
          {entry.content}
        </p>
        <p className="text-xs text-text-tertiary mt-4">{entry.date}</p>
      </motion.div>
    </motion.div>
  );
}
