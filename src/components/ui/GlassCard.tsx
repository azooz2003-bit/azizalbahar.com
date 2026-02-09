"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cardHover } from "@/lib/animations";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  layoutId?: string;
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  layoutId,
  hoverable = false,
  children,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={`glass-card ${className}`}
      whileHover={hoverable ? cardHover : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
