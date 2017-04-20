module.exports = {
  env: {
    es6: true,
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'no-undef': ['error', { typeof: true }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        useTabs: false,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
  globals: {
    console: true,
    document: true,
    window: true,
    module: true,
  },
}
