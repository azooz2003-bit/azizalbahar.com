"use client";

import PageTransition from "@/components/layout/PageTransition";
import Intro from "@/components/home/Intro";
import ProjectList from "@/components/home/ProjectList";
import ExperienceList from "@/components/home/ExperienceList";

export default function Home() {
  return (
    <PageTransition>
      <Intro />
      <ProjectList />
      <ExperienceList />
    </PageTransition>
  );
}
