import process from 'node:process'
import { default as pluginTs } from '@typescript-eslint/eslint-plugin'
import { default as parserTs } from '@typescript-eslint/parser'


export default [
    {
        plugins: {
            "@typescript-eslint": pluginTs,
        },
    },
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                sourceType: 'module',
                project: 'tsconfig.json',
                tsconfigRootDir: process.cwd()
            }
        },
        rules: {
            ...pluginTs.configs['eslint-recommended'].overrides[0].rules,
            ...pluginTs.configs.strict.rules
        }
    }
]
