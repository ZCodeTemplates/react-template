import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: "eslint ./src/**/*.{ts,tsx,json,js,jsx}" },
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
})
