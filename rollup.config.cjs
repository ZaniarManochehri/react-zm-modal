import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        },
        {
            file: 'dist/index.d.ts',
            format: 'es',
            sourcemap: true
        },
        {
            name: 'your-library-name',
            file: 'dist/index.umd.js',
            format: 'umd',
            globals: {
                react: 'React'
            },
            exports: 'named',
            sourcemap: true
        },
        {
            name: 'your-library-name',
            file: 'dist/index.umd.min.js',
            format: 'umd',
            globals: {
                react: 'React'
            },
            exports: 'named',
            plugins: [terser()],
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: true
        }),
        sass({
            insert: true,
        }),
    ],
    declaration: true,
    external: ['react', 'react-dom'],
    peerDependencies: {
        react: '^16.0.0 || ^17.0.0',
    },
};
