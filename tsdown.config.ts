import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/cli.ts'],
  format: 'esm',
  fixedExtension: false,
  platform: 'node',
  target: 'node22.22',
  outDir: 'dist',
  clean: true,
  dts: false,
});
