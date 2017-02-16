import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import babelrc from 'babelrc-rollup';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const pkg = require('./package.json');

export default {
  entry: 'index.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    json(),
    babel(babelrc()),
    uglify()
  ],
  format: 'umd',
  moduleId: pkg.name,
  moduleName: pkg.name,
  dest: 'dist/' + pkg.name + '.min.js'
};