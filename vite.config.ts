import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["w9wjpv-5173.csb.app", "localhost", "127.0.0.1"],
  },
  plugins: [react()],
});
