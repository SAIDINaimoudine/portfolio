import { build } from 'esbuild'

build({
  entryPoints: ['src/App.jsx', 'src/server.jsx'],
  target: 'node14',
  format: 'esm',
  platform: 'node',
  outdir: 'dist',
})
