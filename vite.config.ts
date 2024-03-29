import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kenjutsu/',
  plugins: [vue()],
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/global.scss";
          @import "@/styles/themes/standard.scss";
        `
      }
    }
  },
})
