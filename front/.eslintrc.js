module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-extra-semi': 'off',
      },
    },
  ],
  rules: {
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    semi: [2, 'never'],
    'no-extra-semi': 'off',
  },
}
