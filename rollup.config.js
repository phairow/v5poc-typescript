import { terser } from 'rollup-plugin-terser';

export default {
  input: 'dist/esm5/index.js',
  output: [
    {
      name: 'PubNub',
      file: 'dist/web/PubNub.js',
      format: 'umd',
      sourcemap: true,
    },
    {
      name: 'PubNub',
      file: 'dist/web/PubNub.min.js',
      format: 'umd',
      plugins: [terser()],
      sourcemap: true,
    }
  ]
};