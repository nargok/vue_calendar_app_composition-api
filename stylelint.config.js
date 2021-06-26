module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-recommended-scss'],
  rules: {
    'selector-preudo-element-no-unknown': [
      true,
      {
        ignorePreudoElements: ['v-deep'],
      },
    ],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};
