import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import pluginJest from "eslint-plugin-jest";


export default defineConfig([
	{ files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], },
	{
		files: ['**/*.spec.js', '**/*.test.js'],
		plugins: { jest: pluginJest },
		languageOptions: {
			globals: pluginJest.environments.globals.globals,
		},
		rules: {
			'jest/no-disabled-tests': 'warn',
			'jest/no-focused-tests': 'error',
			'jest/no-identical-title': 'error',
			'jest/prefer-to-have-length': 'warn',
			'jest/valid-expect': 'error',
		},
	},
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs", } },
	{ files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
	{ files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
	{ files: ["**/*.md"], plugins: { markdown }, language: "markdown/commonmark", extends: ["markdown/recommended"] },
	{ files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
