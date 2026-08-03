import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['Финтех', 'IT-сервисы', 'Социальные проекты']),
    heroImage: z.string().optional(),
    github: z.string().url().optional(),
    kpi: z.array(z.string()).default([]),
    diagram: z.string().optional(),
  }),
});

export const collections = { blog };
