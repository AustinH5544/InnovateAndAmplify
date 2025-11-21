import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    base: '/',          // site is at https://innovateandamplify.com
    build: {
        outDir: '../docs', // build into repo root /docs
        emptyOutDir: true, // clear docs before each build
    },
})
