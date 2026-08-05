import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages sirve ficheros estáticos, así que una ruta profunda como
// /assesment/team/1 no existe en disco y devuelve el 404 del servidor. Al
// duplicar index.html como 404.html, Pages entrega la SPA y react-router
// resuelve la ruta en el navegador.
function spaFallback (): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle () {
      const dist = resolve(__dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), spaFallback()],
  preview: {
    port: 8080,
    strictPort: true,
   },
   server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
   },
})
