import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/useSensors.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify:true,
  format: ['esm'],
})