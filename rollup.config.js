import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const packageJSON = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: { file: packageJSON.main, format: 'cjs' },

    plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
  },
];
