"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import CategoryTabs from "@/components/writing/CategoryTabs";
import type { WritingCategory } from "@/components/writing/CategoryTabs";
import WritingGrid from "@/components/writing/WritingGrid";
import WritingExpandedView from "@/components/writing/WritingExpandedView";
import { useWritings } from "@/hooks/useWritings";
import type { WritingEntry } from "@/lib/types";

export default function WritingPage() {
  const { writings, loading, error } = useWritings();
  const [category, setCategory] = useState<WritingCategory>("all");
  const [selected, setSelected] = useState<WritingEntry | null>(null);

  const filtered = useMemo(
    () =>
      category === "all"
        ? writings
        : writings.filter((w) => w.category === category),
    [category, writings]
  );

  return (
    <>
      <div className="sticky top-0 z-40 bg-surface pt-8 pb-4">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Writing</h1>
        <CategoryTabs active={category} onChange={setCategory} />
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none translate-y-full" style={{ background: "linear-gradient(to bottom, var(--surface) 0%, var(--surface-fade-60) 40%, var(--surface-fade-20) 70%, transparent 100%)" }} />
      </div>

      <PageTransition>
        <div className="pt-12 pb-12">
          <WritingGrid entries={filtered} onSelect={setSelected} showCategory={category === "all"} />
        </div>
      </PageTransition>

      <AnimatePresence>
        {selected && (
          <WritingExpandedView
            entry={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
