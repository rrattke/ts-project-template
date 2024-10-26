import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

let stylisticRules = stylistic.configs['recommended-flat']['rules']
stylisticRules = Object.keys(stylisticRules).reduce((rules, ruleName) => {
   const rule = stylisticRules[ruleName]
   rules[ruleName] = rule instanceof Array
      ? ['warn', ...rule.slice(1)]
      : 'warn'
   return rules
}, {})

export default [
   stylistic.configs['recommended-flat'],
   ...tseslint.configs.recommended,
   {
      rules: {
         'no-unused-labels': 'warn',
         'prefer-const': 'warn',
         'no-unused-private-class-members': 'warn',
         '@typescript-eslint/no-unused-vars': 'warn',
         '@typescript-eslint/no-explicit-any': 'off',
         '@typescript-eslint/no-unsafe-function-type': 'off',
         ...stylisticRules,
         '@stylistic/max-len': ['warn', { code: 132 }],
         '@stylistic/indent': ['warn', 3],
         '@stylistic/arrow-parens': ['warn', 'always'],
      },
      ignores: ['dist/**/*'],
   },
   {
      files: ['**/*.spec.ts'],
      rules: {
         '@typescript-eslint/no-unused-expressions': 'off',
      },
   },
]
