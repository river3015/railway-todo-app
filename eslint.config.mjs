import globals from "globals";
import typescriptParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["node_modules/*"]},
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { parser: typescriptParser } },
  eslintConfigPrettier,
];
