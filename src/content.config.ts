import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    color: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = { projects };
