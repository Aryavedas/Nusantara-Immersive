import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // === PATCH UNTUK MENGATASI ERROR REACT-ICONS/GI ===
  optimizeDeps: {
    // Meminta Vite untuk tidak mem-pre-bundle react-icons
    // Ini memaksa React untuk membaca file ikon secara langsung 
    // dan menyelesaikan masalah named export yang hilang.
    exclude: [
      'react-icons', 
      'react-icons/fa', 
      'react-icons/gi',
      // Tambahkan library ikon lain jika Anda menggunakannya
    ],
  },
})
