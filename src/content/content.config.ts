import { defineCollection, z } from "astro:content";

// Коллекция для блога
const blog = defineCollection({
  type: "content",
  loader: "fs", // обязательно указываем loader
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional()
  })
});

// Коллекция для проектов
const projects = defineCollection({
  type: "content",
  loader: "fs",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
    technologies: z.array(z.string()).optional(),
    featured: z.boolean().optional()
  })
});

// Коллекция для страниц (например, About)
const pages = defineCollection({
  type: "content",
  loader: "fs",
  schema: z.object({
    title: z.string(),
    order: z.number().optional()
  })
});

export const collections = { blog, projects, pages };
