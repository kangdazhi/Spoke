module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error",
    "prefer-const": "error",
    "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": true }],
    "no-var": "error",
    "no-throw-literal": "error",
    // Light console usage is useful but remove debug logs before merging to master.
    "no-console": "off",
    "lines-between-class-members": 2,
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "function", "next": "function" },
      { "blankLine": "always", "prev": "function", "next": "class" },
      { "blankLine": "always", "prev": "class", "next": "function" },
      { "blankLine": "always", "prev": "class", "next": "export" },
      { "blankLine": "always", "prev": "export", "next": "function" },
      { "blankLine": "always", "prev": "export", "next": "class" },
      { "blankLine": "always", "prev": "export", "next": "export" },
      { "blankLine": "always", "prev": "import", "next": "function" },
      { "blankLine": "always", "prev": "import", "next": "class" },
    ]
  },
  extends: ["prettier", "plugin:react/recommended", "eslint:recommended"]
};
