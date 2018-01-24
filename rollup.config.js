import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
    input: 'main.js',
    output: {
        file: 'index.min.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel(),
        uglify()
    ]
}