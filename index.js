const rules = require('./rules');

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    mocha: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  rules: rules
};
