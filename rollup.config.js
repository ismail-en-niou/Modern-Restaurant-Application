import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js', // Path to your main JavaScript file
  output: {
    file: 'dist/bundle.js', // Output file
    format: 'cjs', // Output format (CommonJS in this case)
  },
  plugins: [
    resolve(), // Allows Rollup to find modules in node_modules
    commonjs(), // Converts CommonJS modules to ES6
    babel({ babelHelpers: 'bundled' }) // Transpiles ES6+ code
  ]
};
