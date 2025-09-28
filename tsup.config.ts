import { defineConfig } from 'tsup';
import { execSync } from 'child_process';

export default defineConfig({
	entry: ['package/index.ts'],
	format: ['cjs', 'esm'],
	sourcemap: true,
	dts: true,
	clean: true,
	minify: true,
	target: 'es2016',
	outDir: './dist/package',
	onSuccess: () => {
		execSync('cp README.MD package.json LICENSE dist/');
	},
});
