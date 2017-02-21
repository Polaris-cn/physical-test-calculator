/**
 * Created by 方剑成 on 2017/2/17.
 */

const rollupMakeBundles = require('rollup-make-bundles');

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
  presetPlugins: true,
  banner,
  moduleName
};

rollupMakeBundles.easy(baseConfig, {
  dest: root + 'dist',
  name: pkg.name
});