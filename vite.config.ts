import { defineConfig } from 'vite'
import pkg from './package.json'
import dtsPlugin from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

const nameScope = pkg.name.split('/')
const name = nameScope.length > 1 ? nameScope[1] : nameScope[0]

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [dtsPlugin({ outputDir: 'types' }), tsconfigPaths()],
    build: {
      target: 'es2015',
      lib: {
        entry: 'src/index.ts',
        name: name,
        fileName: name,
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: [],
      },
      sourcemap: true,
      minify: false,
    },
  }
})
