import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: "/mfmgram/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    proxy: {
      'https://cloud.appwrite.io/v1':"https://mfaizmohamad.github.io/mfmgram/"
    }
  },
})
