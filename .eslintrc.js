module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": [
      "error",
      "never"
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSibling": false,
      }
    ],
    "no-plusplus": 'off',
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.ts', '.tsx'],
      }
    }
  }
};
