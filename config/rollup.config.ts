import { DEFAULT_EXTENSIONS } from '@babel/core';
import html from 'rollup-plugin-generate-html-template';
import typescriptEngine from 'typescript';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-cpy';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

export default {
    input: 'src/index.tsx',
    output: {
        sourcemap: false,
        file: 'dist/bundle.js',
        format: 'iife',
        inlineDynamicImports: true
    },
    plugins: [
        commonjs(),
        json(),
        resolve({ browser: true }),
        html({
            template: 'public/index.html',
            target: 'dist/index.html'
        }),
        typescript({
            typescript: typescriptEngine,
            sourceMap: false
        }),
        injectProcessEnv({
            NODE_ENV: 'development'
        }),
        copy({
            files: ['public/*.json'],
            dest: 'dist'
        }),
        babel({
            babelrc: false,
            extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
            babelHelpers: 'runtime',
            exclude: [/node_modules/, /dist/],
            plugins: [
                '@babel/plugin-transform-runtime',
                'babel-plugin-styled-components',
                ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
            ],
            presets: [
                '@babel/preset-react',
                '@babel/preset-flow',
                '@babel/preset-env',
                ['@babel/preset-typescript', { allowDeclareFields: true }]
            ]
        }),
    ]
};