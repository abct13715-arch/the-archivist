// https://docs.expo.dev/guides/using-eslint/
const {defineConfig} = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const unicorn = require('eslint-plugin-unicorn').default;
const prettier = require('eslint-config-prettier/flat');

module.exports = defineConfig([
  expoConfig,
  unicorn.configs['flat/recommended'],
  {
    ignores: ['dist/*'],

    rules: {
      // -------------------
      // Disabled rules
      // -------------------
      'no-console': 'off',
      'no-plusplus': 'off',
      'no-await-in-loop': 'off',
      'no-restricted-syntax': 'off',
      // -------------------
      // Expo fix
      // -------------------
      'react/react-in-jsx-scope': 'off',
      'unicorn/prefer-module': 'off',
      // -------------------
      // Client rules
      // -------------------
      'no-param-reassign': 'error',
      'consistent-return': 'error',
      'no-else-return': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            env: true,
            db: true,
            utils: true,
            params: true,
            searchParams: true,
            props: true,
            Props: true,
            otherProps: true,
            colorFromProps: true,
            ThemedTextProps: true,
            ThemedViewProps: true,
            ev: true,
            scrollRef: true,
          },
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  },
  prettier,
]);
