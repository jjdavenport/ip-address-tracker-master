import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/ip-address-tracker-master/",
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    include: ["react-leaflet", "leaflet"],
  },
});
