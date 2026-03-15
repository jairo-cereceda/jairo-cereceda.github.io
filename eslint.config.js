import astro from 'eslint-plugin-astro';

export default [
  ...astro.configs.recommended,
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.astro', '**/*.d.ts'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
