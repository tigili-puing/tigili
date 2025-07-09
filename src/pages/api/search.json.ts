// src/pages/api/search.json.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const allPosts: CollectionEntry<'posts'>[] = await getCollection('posts');

  const searchablePosts = allPosts.map(({ slug, data }) => ({
    slug: slug,
    title: data.title,
    description: data.description,
  }));

  return new Response(JSON.stringify(searchablePosts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};