import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon-192.png", "icon-512.png"],
      manifest: {
        name: "Quiz Game",
        short_name: "Quiz",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#121212",
        theme_color: "#121212",
        icons: [
          { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      },

      devOptions: {
        enabled: false
      }
    })
  ],

  server: {
    host: true,
    allowedHosts: "all"
  },

  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: true
  }
});