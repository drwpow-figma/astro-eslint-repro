import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,

  // this fails:
  ...tseslint.configs.recommendedTypeChecked,

  // this works, if above is commented, and this is used instead:
  // ...tseslint.configs.recommended,

  ...eslintPluginAstro.configs.recommended
);
