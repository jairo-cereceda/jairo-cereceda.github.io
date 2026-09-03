// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Importa el loader

const playground = defineCollection({
  // 2. Usa loader en lugar de type: 'content'
  loader: glob({ pattern: '**/*.mdx', base: './src/content/playground' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  playground,
};
