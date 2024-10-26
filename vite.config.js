import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'

export default defineConfig({
   build: {
      lib: {
         entry: [
            'src/index.ts',
         ],
         name: 'ts-project-template',
         formats: ['es', 'cjs'],
         fileName: (format, entryName) => `${format}/${entryName}.js`,
      },
      outDir: 'lib',
      sourcemap: true,
   },
   test: {
      include: ['src/**/*.spec.ts'],
      exclude: ['src/**/*.test.ts'],
      coverage: {
         reporter: ['text'],
         include: ['src/**/*.ts'],
         exclude: [
            'src/**/index.ts',
            'src/**/*.d.ts',
            'src/**/*.spec.ts',
            'src/**/*.test.ts',
         ],
      },
   },
   plugins: [
      dts({ outDir: 'lib/types' }),
      checker({ typescript: true }),
   ],
})
