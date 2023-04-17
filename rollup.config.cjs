import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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
