import { defineType, defineField } from "sanity";

export const video = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "e.g. 'Dear Evan Hansen - For Forever'",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubeId",
      title: "YouTube Video ID",
      type: "string",
      description: "The ID from the YouTube URL (e.g., 'dQw4w9WgXcQ' from youtube.com/watch?v=dQw4w9WgXcQ)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Optional description or context for the performance",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description: "Performance or upload date",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "date" },
  },
});
