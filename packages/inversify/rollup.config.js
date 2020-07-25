import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const name = pkg.name.split('/')[1];
const opkg = require(`${name}/package.json`);

// customized
const input = require.resolve(name);
const moduleInput = require.resolve(`${name}/${opkg['module'] || opkg['jsnext:main']}`);
const external = [];
const plugins = [];
const globalName = name;
const globals = {};

export default [
  {
    input: moduleInput,
    external,
    plugins,
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
    input,
    plugins,
    output: [
      {
        file: `dist/${name}.cjs.js`,
        sourcemap: true,
        format: 'commonjs',
      },
      {
        file: `dist/${name}.cjs.min.js`,
        sourcemap: true,
        format: 'commonjs',
        plugins: [terser()],
      },
    ],
  },
];
