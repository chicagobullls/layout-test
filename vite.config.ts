import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      styles: path.resolve(__dirname, '/src/assets/styles'),
      mocks: path.resolve(__dirname, '/src/assets/mocks'),
    },
  },
  base: '/layout-test/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/media.scss" as *;`,
      },
    },
  },
})
