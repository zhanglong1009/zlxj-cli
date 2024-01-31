import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.js'],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify:true,
  format: ['esm'],
})