module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': ['off'],
    "@typescript-eslint/no-unused-vars": ['warn', { 'argsIgnorePattern': '^_' }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
