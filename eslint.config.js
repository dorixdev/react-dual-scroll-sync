// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vitestPlugin from '@vitest/eslint-plugin';

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config(
	[
		globalIgnores(['dist', 'storybook-static']),
		{
			files: ['**/*.{ts,tsx}'],
			plugins: {
				import: importPlugin,
				'simple-import-sort': simpleImportSort
			},
			extends: [
				js.configs.recommended,
				tseslint.configs.recommended,
				reactHooks.configs['recommended-latest'],
				reactRefresh.configs.vite
			],
			languageOptions: {
				ecmaVersion: 2020,
				globals: globals.browser
			},
			rules: {
				'import/extensions': 'off',
				'import/first': 'error',
				'import/newline-after-import': 'error',
				'import/no-duplicates': 'error',
				'simple-import-sort/exports': 'error',
				'simple-import-sort/imports': 'error',
				'@typescript-eslint/consistent-type-imports': 'error'
			}
		},
		{
			files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
			plugins: { vitest: vitestPlugin },
			...vitestPlugin.configs.recommended,
			languageOptions: {
				globals: {
					...vitestPlugin.environments.env.globals
				}
			},
			settings: { vitest: { typecheck: true } },
			rules: { 'vitest/expect-expect': 'error' }
		}
	],
	storybook.configs['flat/recommended']
);
