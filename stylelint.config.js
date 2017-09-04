module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  defaultSeverity: 'warning',
  ignoreFiles: ['node_modules/**'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['local']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'extend',
          'mixin',
          'function',
          'return',
          'warn',
          'if',
          'else',
          'for',
          'content'
        ]
      }
    ],
    'max-nesting-depth': 3,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute']
      }
    ]
  }
};
