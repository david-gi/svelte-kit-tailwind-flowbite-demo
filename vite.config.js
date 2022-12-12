import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        sveltekit()
    ],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
        globals: true,
        environment: 'jsdom'
    },
    resolve: {
        alias: {
            $src: path.resolve('./src'),
            $components: path.resolve('./src/lib/components'),
            $routes: path.resolve('./src/routes'),
            $types: path.resolve('./src/lib/types')
        }
    }
};

export default config;
