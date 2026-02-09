"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  className = "",
  active = false,
}: AnimatedLinkProps) {
  return (
    <Link href={href} className={`relative inline-block ${className}`}>
      <span
        className={`transition-colors duration-200 ${
          active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
        }`}
      >
        {children}
      </span>
      {active && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-text-primary rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
