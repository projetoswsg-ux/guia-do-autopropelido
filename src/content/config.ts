import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string().optional(),
    category: z.string().default('Geral'),
    author: z.string().default('Redação'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { noticias };
