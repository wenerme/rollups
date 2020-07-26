import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { camelCase, startCase } from 'lodash';

const pkg = require('./package.json');

const name = pkg.name.split('/')[1];
const opkg = require(`${name}/package.json`);

// customized
const input = require.resolve('lodash/index.js');
const moduleInput = require.resolve('lodash/index.js');
const plugins = [nodeResolve({ browser: true }), commonjs()];
const globalName = '_';
const external = [...Object.keys(opkg.peerDependencies || {})];
const globals = { lodash: '_' };
const conf = { external, plugins, inlineDynamicImports: true };

console.info(`Rollup ${name}/${globalName}`);

export default [
  {
    ...conf,
    input: moduleInput,
    output: [
      {
        file: `dist/${name}.umd.js`,
        sourcemap: true,
        name: globalName,
        globals,
        format: 'umd',
      },
      {
        file: `dist/${name}.umd.min.js`,
        sourcemap: true,
        name: globalName,
        globals,
        format: 'umd',
        plugins: [terser()],
      },
      {
        file: `dist/${name}.esm.js`,
        sourcemap: true,
        format: 'esm',
      },
      {
        file: `dist/${name}.esm.min.js`,
        sourcemap: true,
        format: 'esm',
        plugins: [terser()],
      },
      {
        file: `dist/${name}.system.js`,
        sourcemap: true,
        format: 'system',
      },
      {
        file: `dist/${name}.system.min.js`,
        sourcemap: true,
        format: 'system',
        plugins: [terser()],
      },
    ],
  },
  {
    ...conf,
    input,
    output: [
      {
        file: `dist/${name}.cjs.js`,
        sourcemap: true,
        format: 'commonjs',
        exports: 'auto',
      },
      {
        file: `dist/${name}.cjs.min.js`,
        sourcemap: true,
        format: 'commonjs',
        exports: 'auto',
        plugins: [terser()],
      },
    ],
  },
  /// lodash/fp - https://cdn.jsdelivr.net/npm/lodash@4.17.19/fp.js
  /// will use lodash.min - skip non min
  {
    ...conf,
    input: './fp.js',
    output: [
      {
        file: `dist/${name}-fp.umd.js`,
        sourcemap: true,
        name: globalName,
        globals,
        format: 'umd',
      },
      {
        file: `dist/${name}-fp.umd.min.js`,
        sourcemap: true,
        name: globalName,
        globals,
        format: 'umd',
        plugins: [terser()],
      },
      {
        file: `dist/${name}-fp.esm.js`,
        sourcemap: true,
        format: 'esm',
      },
      {
        file: `dist/${name}-fp.esm.min.js`,
        sourcemap: true,
        format: 'esm',
        plugins: [terser()],
      },
      {
        file: `dist/${name}-fp.system.js`,
        sourcemap: true,
        format: 'system',
      },
      {
        file: `dist/${name}-fp.system.min.js`,
        sourcemap: true,
        format: 'system',
        plugins: [terser()],
      },
    ],
  },
  {
    ...conf,
    input: './fp.js',
    external: ['lodash'],
    output: [
      {
        file: `dist/${name}-fp.cjs.js`,
        sourcemap: true,
        format: 'commonjs',
        exports: 'auto',
      },
      {
        file: `dist/${name}-fp.cjs.min.js`,
        sourcemap: true,
        format: 'commonjs',
        exports: 'auto',
        plugins: [terser()],
      },
    ],
  },
];
