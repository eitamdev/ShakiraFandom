import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ShakiraFandom/', // Remplace par le nom exact de ton repo
});
