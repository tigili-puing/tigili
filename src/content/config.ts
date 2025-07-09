// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Tim Maunguli'),
    category: z.string(), 
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    youtubeId: z.string().optional(), 
  }),
});

export const collections = {
  'posts': postsCollection,
};