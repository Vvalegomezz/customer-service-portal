import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})

// importante :-)
//Este resolv nos dice que c/ vez que veas un @ en los import de la app, quiero que pienses que el path es src.
//de esta manera se simplifican mas las cosas. 
//tambien tenemos que modificar el archivo de tsconfig.json
//no olvidar de instalarlo desde pnpm i -D @types/node. si quieres mas info buscá en https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa 
