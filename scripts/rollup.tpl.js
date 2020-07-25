import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { camelCase, startCase } from 'lodash';

const pkg = require('./package.json');

const name = pkg.name.split('/')[1];
const opkg = require(`${name}/package.json`);

// customized
const input = require.resolve(name);
const moduleInput = require.resolve(`${name}/${opkg['module'] || opkg['jsnext:main'] || opkg['main']}`);
const plugins = [nodeResolve({ browser: true }), commonjs()];
const globalName = startCase(camelCase(name)).replace(/\W/g, '');
const external = [...Object.keys(opkg.peerDependencies || {})];
const globals = {};
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
];
