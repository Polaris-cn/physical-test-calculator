/**
 * Created by 方剑成 on 2017/2/17.
 */

const rollup = require('rollup');
const flow = require('rollup-plugin-flow-no-whitespace');
const json = require('rollup-plugin-json');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const buble = require('rollup-plugin-buble');
const uglify = require('rollup-plugin-uglify');

const camelCase = require('camelcase');
const clone = require('js.clone');
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

const bundles = {
  commonjs: {
    dest: root + `dist/${pkg.name}.common.js`,
    format: 'cjs'
  },
  production: {
    dest: root + `dist/${pkg.name}.min.js`,
    format: 'umd',
    plugins: [
      uglify({
        output: {
          comments (node, comment) {
            return comment.type == "comment2" && /^!/i.test(comment.value);
          }
        }
      })
    ]
  },
  development: {
    dest: root + `dist/${pkg.name}.js`,
    format: 'umd'
  }
};

Object.keys(bundles).forEach(bundle => {
  let config = clone(baseConfig);
  let bundleConfig = bundles[bundle];
  Object.keys(bundleConfig).forEach(key => {
    if (Array.isArray(bundleConfig[key])) {
      if (!config[key]) config[key] = bundleConfig[key];
      else config[key].push(...bundleConfig[key]);
    } else {
      config[key] = bundleConfig[key];
    }
  });
  rollup.rollup(config)
    .then(bundle => bundle.write(config))
    .catch(err => console.log(err));
});