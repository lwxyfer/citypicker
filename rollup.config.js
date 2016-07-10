/**
 * use rollup to pack to different loading methods
 */
import babel from 'rollup-plugin-babel';
export default {
    entry: './app/main.js',
    format: 'iife',
    plugins: [babel()],
    moduleName: 'picker',
    dest: './dist/bundle.js'
};
