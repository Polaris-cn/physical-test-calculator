import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import babelrc from 'babelrc-rollup';
import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package.json');

const camelCase = require('camelcase');

export default {
  entry: 'src/calculator.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    json(),
    babel(babelrc())
  ],
  format: 'umd',
  moduleId: camelCase(pkg.name),
  moduleName: camelCase(pkg.name),
  dest: 'dist/' + pkg.name + '.js'
};