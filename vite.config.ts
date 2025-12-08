import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // obrigatório para deploy no Hostinger
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
