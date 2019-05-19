module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
    ],
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        semi: [2, 'always'],
        quotes: [2, 'single'],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
