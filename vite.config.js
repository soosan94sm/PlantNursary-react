import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

console.log("Vite is running")

export default defineConfig({
  server: {
    proxy: {
      '/API': {
        target: 'http://localhost:3000', // Backend URL
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  },
  plugins: [react(), tailwindcss()],
})
