module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base'
  ],
  rules: {
    '@typescript-eslint/semi': ['error'],
    "import/extensions": [ "off" ],
    "import/no-extraneous-dependencies": [ "off" ],
  }
}