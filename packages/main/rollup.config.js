import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
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
        plugins: [
          terser()
        ],
        sourcemap: true,
      }
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.build.json",
        tsconfigOverride: {
          target: "esm"
        }
      })
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'PubNub',
        dir: 'dist/cjs',
        format: 'cjs',
      }
    ],
    plugins: [
      typescript()
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'PubNub',
        dir: 'dist/esm',
        format: 'es',
      }
    ],
    plugins: [
      typescript()
    ],
  },
];