/// <reference types="vitest/config" />

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			rollupTypes: true,
			tsconfigPath: './tsconfig.json',
			entryRoot: 'lib',
			outDir: 'dist'
		})
	],
	build: {
		copyPublicDir: false,
		lib: {
			entry: path.resolve(__dirname, 'lib/index.ts'),
			name: 'DualScrollSync',
			formats: ['es', 'cjs'],
			fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'clsx', 'styled-components'],
			output: { exports: 'named' }
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./lib/setupTests.ts'],
		include: ['lib/**/*.{test,spec}.{js,ts,jsx,tsx}'],
		coverage: {
			thresholds: { functions: 80, branches: 80, lines: 80, statements: 80 },
			include: ['lib/**/*.{js,jsx,ts,tsx}'],
			exclude: [
				'**/stories/**',
				'**/storybook-static/**',
				'**/dist/**',
				'**/node_modules/**',
				'**/*.d.ts',
				'**/*.config.*',
				'**/vite.config.*',
				'**/.storybook/**',
				'**/lib/**/index.{js,ts,jsx,tsx}',
				'**/lib/**/*.types.{js,ts,jsx,tsx}'
			],
			provider: 'v8',
			reporter: ['html', 'clover', 'json', 'text', 'text-summary']
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./lib', import.meta.url))
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [fileURLToPath(new URL('./lib', import.meta.url))]
			}
		}
	}
});
