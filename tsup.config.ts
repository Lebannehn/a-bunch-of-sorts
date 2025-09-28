import { defineConfig } from 'tsup';
import { execSync } from 'child_process';

export default defineConfig({
	entry: ['package/index.ts'],
	format: ['cjs', 'esm'],
	sourcemap: true,
	dts: true,
	clean: true,
	minify: false,
	target: 'es2016',
	onSuccess: () => {
		execSync('cp README.MD package.json LICENSE dist/');
	},
});
