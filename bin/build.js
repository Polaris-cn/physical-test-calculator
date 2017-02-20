/**
 * Created by 方剑成 on 2017/2/17.
 */

const rollupMakeBundles = require('rollup-make-bundles');
const flow = require('rollup-plugin-flow-no-whitespace');
const json = require('rollup-plugin-json');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const buble = require('rollup-plugin-buble');
const uglify = require('rollup-plugin-uglify');

const camelCase = require('camelcase');
const pkg = require('../package.json');

const root = require('path').join(__dirname, '..') + '/';

const banner =
  '/*!\n' +
  ` * ${pkg.name} v${pkg.version} \n` +
  ` * (c) ${new Date().getFullYear()} ${pkg.author}\n` +
  ` * Released under the ${pkg.license} License.\n` +
  ' */';

const moduleName = camelCase(pkg.name);

const baseConfig = {
  entry: root + 'src/index.js',
  plugins: [
    flow(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    json(),
    buble()
  ],
  banner,
  moduleName
};

rollupMakeBundles.easy(baseConfig, {
  dest: root + 'dist',
  name: pkg.name
})
  .then(message => console.log(message))
  .catch(err => console.log(err));