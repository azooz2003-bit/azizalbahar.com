"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/lib/mock-data";

export default function ExperienceList() {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-2">Experience</h2>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </motion.div>
    </section>
  );
}
