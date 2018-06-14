# eslint-config-booheefe
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
