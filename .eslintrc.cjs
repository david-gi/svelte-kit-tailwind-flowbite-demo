module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier'
    ],
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: [
        '*.d.ts',
        '*.cjs',
        'vite.config.js',
        'svelte.config.js',
        'playwright.config.ts',
        '**/vendor'
    ],
    settings: {
        'svelte3/typescript': () => require('typescript')
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte']
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        semi: ['warn', 'never']
    },
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
            rules: {
                '@typescript-eslint/no-unused-expressions': 0
            }
        }
    ]
}
