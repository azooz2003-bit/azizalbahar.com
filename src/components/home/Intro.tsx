"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Intro() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="py-12"
    >
      <motion.h1
        variants={staggerItem}
        className="text-3xl font-semibold tracking-tight"
      >
        Aziz Albahar
      </motion.h1>
      <motion.p
        variants={staggerItem}
        className="mt-1 text-text-secondary text-lg"
      >
        iOS / macOS Engineer
      </motion.p>
      <motion.p
        variants={staggerItem}
        className="mt-4 text-text-secondary leading-relaxed max-w-lg"
      >
        I build native Apple platform apps. Also interested in backend
        engineering and API design.
      </motion.p>
      <motion.div
        variants={staggerItem}
        className="mt-3 flex items-center gap-2 text-sm text-text-tertiary"
      >
        <Image
          src="/images/companies/Georgia-Tech-Yellow-Jackets-Logo.png"
          alt="Georgia Tech"
          width={32}
          height={22}
        />
        <span>Georgia Tech &apos;25 &middot; B.S. Computer Science</span>
      </motion.div>
    </motion.section>
  );
}
