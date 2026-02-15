"use client";

import PageTransition from "@/components/layout/PageTransition";
import VideoGrid from "@/components/singing/VideoGrid";
import { useVideos } from "@/hooks/useVideos";

export default function SingingPage() {
  const { videos, loading, error } = useVideos();

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Singing</h1>
          <p className="text-text-secondary text-base">
            A collection of my performances
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-text-secondary text-sm">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-text-secondary text-sm">Failed to load videos</p>
          </div>
        ) : (
          <VideoGrid videos={videos} />
        )}
      </div>
    </PageTransition>
  );
}
