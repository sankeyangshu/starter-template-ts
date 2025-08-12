import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  platform: 'neutral',
  shims: true,
  onSuccess() {
    console.info('🙏 Build succeeded!');
  },
});
