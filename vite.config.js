import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const basePath =
  process.env.DEPLOY_ENV === 'github' ? '/B13-A06/' : '/';
export default defineConfig({
     base: basePath,
  plugins: [react(), tailwindcss(),
],
})





