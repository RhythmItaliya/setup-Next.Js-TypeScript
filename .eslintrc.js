const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'next/core-web-vitals',
    'prettier'
  ],
  settings: {
    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        returns: 'return'
      }
    }
  },
  plugins: ['prettier', 'jsdoc', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'jsdoc/check-indentation': 'warn',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/check-line-alignment': [
      'warn',
      'always',
      {
        tags: [
          'param',
          'return',
          'property',
          'type',
          'default',
          'name',
          'description'
        ]
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': isDev ? 'off' : 'error', // Allow console in development mode
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn']
  },
  overrides: [
    {
      files: ['src/utils/log/logger.ts'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
