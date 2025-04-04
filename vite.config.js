import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: [
    "**/*.glb", 
    "**/*.hdr", 
    "**/*.glsl", 
    "**/*.mp4", 
    "**/*.jpg",
    "**/*.pdf"
  ],
  build: {
    assetsInlineLimit: 1024,
  },
  server: {
    port: 3003,
    host: ['0.0.0.0', 'www.ziyingqi.com'],
    allowedHosts: ['www.ziyingqi.com'],
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remixCloudflareDevProxy({
      getLoadContext: () => ({
        cloudflare: {
          env: {
            SESSION_SECRET: process.env.SESSION_SECRET || 'dev-secret'
          }
        }
      }),
      platformProxy: {
        crypto: () => ({
          subtle: crypto.subtle,
          randomUUID: crypto.randomUUID?.bind(crypto),
          getRandomValues: crypto.getRandomValues?.bind(crypto),
        })
      }
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ],
});
