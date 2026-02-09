import { defineType, defineField } from "sanity";

export const thought = defineType({
  name: "thought",
  title: "Thought",
  type: "document",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "content", subtitle: "date" },
  },
});
