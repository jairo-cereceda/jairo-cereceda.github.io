import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const playground = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/playground' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['es', 'en']),
  }),
});

export const collections = {
  playground,
};
