module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "extends": [
    "prettier",
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    // "quotes": 0
    "quotes": [
        "warn",
        "single"
    ],
    "no-console": "off",
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "no-useless-escape": "warn",
    "no-fallthrough": "off",
    "no-case-declarations": "off",
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "prettier/prettier": ["error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
        "semi": true
      }
    ],
  }
};