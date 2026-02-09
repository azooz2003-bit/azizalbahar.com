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
    id: "canvasplus",
    name: "CanvasPlus",
    description:
      "A macOS & iOS client for Canvas LMS with on-device AI and improved student workflows.",
    icon: "/images/projects/CanvasPlus/CanvasPlus-iOS-Default-1024x1024@1x.png",
    iconDark: "/images/projects/CanvasPlus/CanvasPlus-iOS-Dark-1024x1024@1x.png",
    links: {
      github: "https://github.com/azooz2003-bit/CanvasPlusPlayground",
    },
  },
  {
    id: "guess-e",
    name: "GUESS-E",
    description:
      "Like Pictionary, with AI. Available on the App Store.",
    icon: "/images/projects/GUESS-EIcon.svg",
    links: {
      appStore: "https://apps.apple.com/us/app/guess-e-ai-pictionary/id6450125557",
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

export const writings: WritingEntry[] = [];

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
