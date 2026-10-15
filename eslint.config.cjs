// ESLint flat config.
//
// Scope, stated honestly: lint covers the server functions (api/), the
// shared library (lib/), the tooling (tools/, scripts/), and the tutor
// shim. The browser app sources (the root .jsx/.js modules and content/)
// are NOT linted yet: they share state through window globals by design,
// so a standard config reports the architecture rather than bugs. Linting
// them properly means migrating the app to modules first; that is a
// documented gap in the README, not a silent exclusion.

'use strict';

const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', 'content/**'],
  },
  {
    ...js.configs.recommended,
    files: ['api/**/*.js', 'lib/**/*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },
  {
    ...js.configs.recommended,
    files: ['tools/**/*.cjs', 'scripts/**/*.cjs', 'eslint.config.cjs'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
  },
  {
    ...js.configs.recommended,
    files: ['tutor-api.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'script',
      globals: { ...globals.browser },
    },
  },
];
