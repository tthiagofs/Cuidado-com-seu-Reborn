import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Cuidado-com-seu-Reborn/', // 🔥 esse é o nome do seu repositório
  plugins: [react()],
})
