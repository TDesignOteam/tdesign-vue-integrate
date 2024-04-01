import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    // https://eslint.style/rules
    overrides: {
      'style/brace-style': ['error', '1tbs'],
      // 'style/nonblock-statement-body-position': ['off', 'below'],
    },
  },

  formatters: {
    html: true,
  },
  ignores: ['tsconfig.json', 'packages/shared/_common'],
  rules: {
    // https://eslint.org/docs/latest/rules/curly
    curly: ['error', 'all'],
  },
});
