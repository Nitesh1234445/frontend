import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; //if we want to avoid to import react n every file so we import this react plugin if we not import this our main.jsx will give error
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
