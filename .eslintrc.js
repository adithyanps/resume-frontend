module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './components'],
          ['features', './features'],
          ['yoredux', './yoredux'],
          ['utils', './utils'],
          ['i18n', './i18n'],
          ['assets', './assets'],
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    },
  },
};
