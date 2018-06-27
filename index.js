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
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  rules: rules
};
