import { Project, Experience, WritingEntry, SocialLink } from "./types";

export const projects: Project[] = [
  {
    id: "tweety",
    name: "Tweety",
    description:
      "Command your X account with your voice. Available on the App Store.",
    icon: "/images/projects/Tweety/Tweety (Final).png",
    iconDark: "/images/projects/Tweety/Tweety Dark (Final).png",
    links: {
      github: "https://github.com/azooz2003-bit/Tweety-iOS",
      appStore: "https://apps.apple.com/us/app/tweety-voice-assistant/id6756834979",
    },
  },
  {
    id: "guess-e",
    name: "GUESS-E",
    description:
      "Like Pictionary, with AI. Available on the App Store.",
    icon: "/images/projects/GUESS-EIcon.svg",
    links: {
      appStore: "https://apps.apple.com/app/guess-e/id6449874870",
    },
  },
  {
    id: "letsbusk",
    name: "LetsBusk",
    description:
      "An app connecting local street artists with enthusiasts. Built at HackPrinceton.",
    icon: "/images/projects/BuskIcon.svg",
    links: {
      github: "https://github.com/AzizAlbaworkers/LetsBusk",
    },
  },
  {
    id: "edusafe",
    name: "eduSafe",
    description:
      "A lite app displaying a heatmap of school intruders. Built at HackHarvard.",
    icon: "/images/projects/eduSafeIcon.svg",
    links: {
      github: "https://github.com/AzizAlbaworkers/eduSafe",
    },
  },
  {
    id: "gtlink",
    name: "GT Link",
    description:
      "A collaboration app for Georgia Tech students pursuing technical side-projects.",
    icon: "/images/projects/GTLinkIcon.svg",
    links: {
      github: "https://github.com/AzizAlbaworkers/GT-Link",
    },
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Apple",
    role: "iOS / macOS Engineer",
    period: "2025 — Present",
    description: "Radar team.",
    icon: "/images/companies/apple.svg",
  },
  {
    id: "exp-2",
    company: "Goodnotes",
    role: "iOS Engineer",
    period: "2024",
    description: "Contributed to the Goodnotes Classroom launch.",
    icon: "/images/companies/goodnotes.png",
  },
  {
    id: "exp-3",
    company: "GT iOS Club",
    role: "VP & Project Lead",
    period: "2021 — 2025",
    description: "Founded the Swift & SwiftUI bootcamp and led development of 5 apps alongside designers.",
    icon: "/images/companies/gt-ios-club.png",
  },
];

export const writings: WritingEntry[] = [
  {
    id: "thought-1",
    excerpt: "The best way to learn is to ship something real.",
    content:
      "The best way to learn is to ship something real. Every project I've built taught me more than any course. The constraint of a deadline, real users, and working with others forces you to actually understand what you're doing.",
    category: "thought",
    date: "2025-01-15",
  },
  {
    id: "thought-2",
    excerpt: "Good software feels obvious in retrospect.",
    content:
      "Good software feels obvious in retrospect. The hardest part of building something isn't the code — it's deciding what to leave out. Every feature you don't add is a gift to your users.",
    category: "thought",
    date: "2025-02-01",
  },
  {
    id: "article-1",
    title: "Building GUESS-E: Multiplayer AI on iOS",
    excerpt:
      "How I used Multipeer Connectivity and OpenAI to build a party game.",
    content:
      "GUESS-E started as a simple idea: what if Pictionary had an AI judge? I used Apple's Multipeer Connectivity framework for local multiplayer and the OpenAI API for image recognition. The biggest challenge was keeping latency low enough for real-time gameplay. Here's how I approached it...",
    category: "article",
    date: "2024-12-10",
  },
  {
    id: "article-2",
    title: "Lessons from hackathons",
    excerpt:
      "What I learned from HackPrinceton, HackHarvard, HackGT, and ShellHacks.",
    content:
      "After four hackathons, the biggest lesson isn't technical — it's about scope. You have 36 hours. The teams that win aren't the ones with the most features; they're the ones with the clearest story. A polished demo of one feature beats a buggy prototype of ten.",
    category: "article",
    date: "2024-11-20",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/azooz2003-bit",
    label: "GitHub",
  },
  {
    platform: "x",
    url: "https://x.com/al_bahar_la",
    label: "X",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/azizalbahar",
    label: "LinkedIn",
  },
];
