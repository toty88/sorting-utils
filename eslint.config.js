// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        sourceType: "module",
        ecmaVersion: "latest",
        parser: tseslint.parser,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: [
      "**/dist/**",
      "**/*.config.js",
      "**/*.config.ts",
      "**/.vscode/**",
      "**/coverage/**",
      "**/.husky/**",
      "**/*.json/**",
      ".gitignore",
      ".prettireignore",
      "commitlint.config.ts",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-redundant-type-constituents": "off",
    },
  },
);
