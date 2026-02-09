"use client";

import { motion } from "framer-motion";

interface IconButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function IconButton({ href, label, children }: IconButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-text-secondary hover:text-text-primary transition-colors"
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--subtle-bg-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
