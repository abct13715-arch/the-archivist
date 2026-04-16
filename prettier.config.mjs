/** @type {import("prettier").Config} */
export default {
  arrowParens: 'avoid',
  bracketSpacing: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  printWidth: 80,
  useTabs: false,
  overrides: [
    {
      files: '*.yaml',
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
  // TODO: fix this import order later (https://gitlab.com/kiona/dev/energinet/energinet-horizon/-/merge_requests/197#note_3051608997)
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/registry/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
