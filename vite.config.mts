import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // Les assets publics (favicon, etc.) viennent du dossier par défaut "public"
  // Les images de contenu sont désormais dans "src/images" et importées dans le code.
});



