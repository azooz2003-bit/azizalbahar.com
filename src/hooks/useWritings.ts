import { useEffect, useState } from "react";
import { sanity } from "@/lib/sanity";
import { writingsQuery } from "@/lib/sanity-queries";
import type { WritingEntry } from "@/lib/types";

export function useWritings() {
  const [writings, setWritings] = useState<WritingEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    sanity
      .fetch<WritingEntry[]>(writingsQuery)
      .then(setWritings)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { writings, loading, error };
}
