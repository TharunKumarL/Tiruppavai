import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace `your-repo-name` with the name of your GitHub repository
export default defineConfig({
  base: '/Tiruppavai', // This is necessary for GitHub Pages
  plugins: [react()],
});
