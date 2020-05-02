module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "no-param-reassign": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: ['.js', '.jsx'] }
    ],
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": [
      "error",
      { "allow": ["tron"] }
    ],
    "no-unused-vars": [
      "error",
      { "argsIgnorePattern": "props" }
    ]
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
};
