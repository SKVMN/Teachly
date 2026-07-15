import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'apps/frontend/**',
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/.svelte-kit/**'
    ]
  },
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['apps/backend/**/*.{js,ts}', 'packages/shared/**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      'no-undef': 'off'
    }
  },
  prettier
);
