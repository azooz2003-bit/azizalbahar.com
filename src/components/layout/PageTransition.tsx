"use client";

import { motion } from "framer-motion";
import { pageTransition, gentleSpring } from "@/lib/animations";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={gentleSpring}
    >
      {children}
    </motion.div>
  );
}
