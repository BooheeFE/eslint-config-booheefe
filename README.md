# eslint-config-booheefe

[![npm](https://img.shields.io/npm/v/eslint-config-booheefe.svg)](https://www.npmjs.com/package/eslint-config-booheefe)
[![npm](https://img.shields.io/npm/dt/eslint-config-booheefe.svg)](https://www.npmjs.com/package/eslint-config-booheefe)
[![GitHub license](https://img.shields.io/github/license/BooheeFE/eslint-config-booheefe.svg)](https://github.com/BooheeFE/eslint-config-booheefe/blob/master/LICENSE)

This package provides BooheeFE's base JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6.

First, install this package
```sh
yarn add --dev eslint-config-booheefe eslint

or

npm install --save-dev eslint-config-booheefe eslint
```
Then add following contents to your .eslintrc file
```
{
  "extends": "booheefe"
}
```

## License
MIT
