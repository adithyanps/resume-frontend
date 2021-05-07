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
    'no-loops'
  ],
  rules: {
    'no-loops/no-loops': 2, // 2 means throw an ERROR fix: suppress errors for missing 'import React' in files for nextjs
    "no-console": 1,
    "prettier/prettier": 2
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [],
        extensions: ['.js', '.jsx', '.json']
      }
    },
  },
};
