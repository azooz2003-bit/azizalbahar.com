"use client";

import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import type { Video } from "@/lib/types";

interface VideoGridProps {
  videos: Video[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary text-sm">No videos yet</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </motion.div>
  );
}
