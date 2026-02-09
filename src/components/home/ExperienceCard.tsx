"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import type { Experience } from "@/lib/types";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="py-4 border-b border-divider last:border-b-0"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={experience.icon}
            alt={experience.company}
            width={32}
            height={32}
            className="rounded-lg"
            style={experience.icon.endsWith(".svg") ? { filter: "var(--icon-mono-filter)" } : undefined}
          />
          <div>
            <h3 className="text-sm font-semibold">{experience.company}</h3>
            <p className="text-sm text-text-secondary mt-0.5">
              {experience.role}
            </p>
          </div>
        </div>
        <span className="text-xs text-text-tertiary whitespace-nowrap">
          {experience.period}
        </span>
      </div>
      {experience.description && (
        <p className="text-xs text-text-secondary mt-1">
          {experience.description}
        </p>
      )}
    </motion.div>
  );
}
