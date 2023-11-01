import antfu from '@antfu/eslint-config'

export default () => antfu(
  {
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    rules: {
      'no-console': 'warn',
    },
    settings: {
      'import/ignore': [
        'typescript',
      ],
    },
  },
)
