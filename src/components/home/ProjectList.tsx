"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/mock-data";

export default function ProjectList() {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
