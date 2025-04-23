import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: '', // 使用相对路径
  build: {
    minify: false, // 禁用所有压缩（JS/CSS/HTML）
    sourcemap: true, // 可选：生成 sourcemap
    // outDir: 'dist', // 打包输出目录
    // assetsDir: 'assets', // 静态资源目录
    // sourcemap: false, // 生产环境不生成 source map
    // emptyOutDir: true, // 打包前清空输出目录
    // rollupOptions: {
    //   output: {
    //     inlineDynamicImports: true, // 强制内联所有代码
    //     entryFileNames: 'index.js', // 单文件输出
    //   },
    // },
    // rollupOptions: {
    //   output: {
    //     format: 'iife', // 生成立即执行函数格式
    //     name: 'markdown', // 全局变量名（可选）
    //     inlineDynamicImports: true, // 所有代码合并到一个文件
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
