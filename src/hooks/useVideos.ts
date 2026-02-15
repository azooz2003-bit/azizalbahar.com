import { useEffect, useState } from "react";
import { sanity } from "@/lib/sanity";
import { videosQuery } from "@/lib/sanity-queries";
import type { Video } from "@/lib/types";

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    sanity
      .fetch<Video[]>(videosQuery)
      .then(setVideos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { videos, loading, error };
}
