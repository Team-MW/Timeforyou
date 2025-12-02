import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // Sert les images statiques directement depuis le dossier 4x voisin
  publicDir: "../4x",
});


