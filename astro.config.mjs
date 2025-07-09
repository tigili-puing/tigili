import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://blog.maunguli.com',

  vite: {
    plugins: [tailwindcss(
    )]
  },

  image: {
   // Daftarkan semua domain eksternal yang Anda percaya di sini
   domains: [
     "firebasestorage.googleapis.com", // Untuk gambar dari Firebase Storage
     "golang-p.web.app"                // Untuk gambar dari Cloud Run Anda
   ],
 },

  markdown: {
    components: {
      img: '~/components/MarkdownImage.astro',
    }
  },

  integrations: [sitemap()],
});