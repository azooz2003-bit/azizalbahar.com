"use client";

import { motion } from "framer-motion";
import type { Video } from "@/lib/types";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -4 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="glass-card overflow-hidden group"
    >
      {/* YouTube Embed */}
      <div className="aspect-video w-full bg-black/20">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-text-primary mb-1">
          {video.title}
        </h3>
        {video.description && (
          <p className="text-sm text-text-secondary line-clamp-2">
            {video.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
