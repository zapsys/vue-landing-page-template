import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import viteYaml from '@modyfi/vite-plugin-yaml'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteYaml(),
    createHtmlPlugin({
      minify: true,
      /**
       * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
       * @default src/main.ts
       */
      entry: 'src/main.js',
      /**
       * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
       * @default index.html
       */
      template: '/index.html',

      /**
       * Data that needs to be injected into the index.html ejs template
       */
      inject: {
        data: {
          SITE_TITLE: 'Landing Page Site Template',
          SITE_DESCRIPTION: 'A complete landing page site template for your projects.',
          SITE_KEYWORDS: 'landing page, template, vue, vite, tailwincss',
          SITE_URL: 'https://suaempresa.com.br',
          SITE_AUTHOR: 'Zap Websites',
          SITE_IMAGE: 'https://dummyjson.com/image/600x300?text=Seu%20banner',
          SITE_ICON: '/assets/favicon.ico',
          SITE_THEME_COLOR: 'rgba(0, 0, 0, 0.8)',
          FACEBOOK_URL: 'https://facebook.com/suaempresa',
          TWITTER_URL: 'https://x.com/suaempresa'
        },
        tags: [
          {
            injectTo: 'body-prepend',
            tag: 'div',
            attrs: {
              id: 'tag',
            },
          },
        ],
      },
    }),
  ],
})
