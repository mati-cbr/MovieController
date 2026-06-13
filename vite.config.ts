import {defineConfig} from 'vite'
import {envOnlyMacros} from 'vite-env-only'
import {reactRouter} from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    reactRouter(),
    envOnlyMacros(),
    tailwindcss(),
    tsconfigPaths({
      ignoreConfigErrors: true,
    })
  ],
})
