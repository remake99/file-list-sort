module.exports = {
  env: { node: true, },

  plugins: ["@typescript-eslint",],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: [
      "./tsconfig.json"
    ]
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  root: true,

  rules: {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "semi"  : ["error", "always"],
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],

    "key-spacing"    : ["error", { "align": "colon", "beforeColon": false, },],
    "keyword-spacing": ["error", { "after": true }],
    "semi-spacing"   : "error",
    "prefer-const"   : "off",
    "destructuring"  : "off",

    "no-trailing-spaces": "error",

    "no-case-declarations": "off",

    "no-multiple-empty-lines": ["error", { "max": 1 }],

    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],

    "no-multi-spaces": "off",
    "block-spacing"  : "error",
    "no-cond-assign" : "error",
    "space-unary-ops": "error",
    "space-infix-ops": "error",
    "space-in-parens": ["error", "never"],

    "@typescript-eslint/ban-types": "off",

    "@typescript-eslint/no-namespace"   : "off",
    "@typescript-eslint/no-unused-vars" : "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",

    "@typescript-eslint/no-empty-function"  : "off",
    "@typescript-eslint/no-inferrable-types": "off",

    "space-before-blocks"                   : "off",
    "@typescript-eslint/space-before-blocks": "error",

    "@typescript-eslint/type-annotation-spacing": "error",

    "brace-style": "off",

    "@typescript-eslint/brace-style": "warn",

    "comma-spacing": ["error", { "before": false, "after": true }],

    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-empty-interface"           : "off",
    "@typescript-eslint/no-this-alias"                : "off",

    "@typescript-eslint/prefer-includes": "warn",

    "no-constant-condition": "off",

    "object-curly-spacing"                   : "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    "eol-last": ["error", "always"],

    "no-extra-parens": "error",

    "lines-around-comment" : ["error", { "beforeBlockComment": true }],
    "arrow-spacing"        : ["error", { "before": true, "after": true }],
    "array-bracket-spacing": ["error", "never"],
    "no-unreachable"       : "warn",

  },
};
