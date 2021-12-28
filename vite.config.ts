import { defineConfig } from 'vite'
import vueJsx from '@vue3-oop/plugin-vue-jsx'
import pkg from './package.json'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: command === 'build' ? undefined : [vueJsx()],
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@/', replacement: '/src/' },
        { find: 'lib-starter', replacement: '/src/' },
      ],
    },
    server: {
      open: '/',
    },
    build: {
      target: 'es2015',
      lib: {
        entry: 'src/index.ts',
        name: pkg.name,
        fileName: (format) => `${pkg.name}.${format}.js`,
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
