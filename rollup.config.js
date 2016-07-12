/**
 * use rollup to pack to different loading methods
 */
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
    entry: './src/main.js',
    // 代码压缩有问题，插件的问题
    plugins: [babel()],
    // moduleName: 'picker',
    targets: [
    { dest: 'dist/picker.umd.js', format: 'umd' ,moduleName:'picker'},
    // { dest: 'dist/picker.umd.min.js', format: 'umd' ,moduleName:'picker'},
    { dest: 'dist/picker.es.js', format: 'es' },
  ]
};
