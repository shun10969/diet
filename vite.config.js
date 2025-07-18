import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // ここをプロジェクトの src ディレクトリを絶対パスで指定します
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
