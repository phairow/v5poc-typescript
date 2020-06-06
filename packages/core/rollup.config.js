import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'core',
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
        name: 'core',
        dir: 'dist/esm',
        format: 'es',
      }
    ],
    plugins: [
      typescript()
    ],
  },
];