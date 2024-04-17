// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks','import'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    rules: {
        semi: [1, "always"],
        "@typescript-eslint/no-unused-vars": "warn",
        "import/no-unused-modules": "warn"
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  