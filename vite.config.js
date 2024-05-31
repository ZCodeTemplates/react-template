// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite"
// eslint-disable-next-line import/no-extraneous-dependencies
import checker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,json}"' } }),
  ],
})
