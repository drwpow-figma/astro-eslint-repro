# eslint-plugin-astro Issue Repro

```sh
pnpm i
pnpm run lint
```

You’ll see the following error:

```
Oops! Something went wrong! :(

ESLint: 9.14.0

Error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires type information, but don't have parserOptions set to generate type information for this file. See https://typescript-eslint.io/getting-started/typed-linting for enabling linting with type information.
Parser: astro-eslint-parser
Note: detected a parser other than @typescript-eslint/parser. Make sure the parser is configured to forward "parserOptions.project" to @typescript-eslint/parser.
Occurred while linting /astro-eslint-repro/src/components/Card.astro
    at throwError (/astro-eslint-repro/node_modules/.pnpm/@typescript-eslint+utils@8.13.0_eslint@9.14.0_typescript@5.6.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:38:11)
    at getParserServices (/astro-eslint-repro/node_modules/.pnpm/@typescript-eslint+utils@8.13.0_eslint@9.14.0_typescript@5.6.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:27:9)
    at create (/astro-eslint-repro/node_modules/.pnpm/@typescript-eslint+eslint-plugin@8.13.0_@typescript-eslint+parser@8.13.0_eslint@9.14.0_typescript@5.6.3/node_modules/@typescript-eslint/eslint-plugin/dist/rules/await-thenable.js:49:55)
    at Object.create (/astro-eslint-repro/node_modules/.pnpm/@typescript-eslint+utils@8.13.0_eslint@9.14.0_typescript@5.6.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js:31:20)
    at createRuleListeners (/astro-eslint-repro/node_modules/.pnpm/eslint@9.14.0/node_modules/eslint/lib/linter/linter.js:943:21)
    at /astro-eslint-repro/node_modules/.pnpm/eslint@9.14.0/node_modules/eslint/lib/linter/linter.js:1068:84
    at Array.forEach (<anonymous>)
    at runRules (/astro-eslint-repro/node_modules/.pnpm/eslint@9.14.0/node_modules/eslint/lib/linter/linter.js:999:34)
    at #flatVerifyWithoutProcessors (/astro-eslint-repro/node_modules/.pnpm/eslint@9.14.0/node_modules/eslint/lib/linter/linter.js:1911:31)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/astro-eslint-repro/node_modules/.pnpm/eslint@9.14.0/node_modules/eslint/lib/linter/linter.js:1992:49)
```
