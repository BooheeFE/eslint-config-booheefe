const rules = require('./rules');

module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true
  },

  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: rules
};
