const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021, // Supports modern JavaScript
      sourceType: "script", // CommonJS module support
    },
    env: {
      node: true, // Enables Node.js globals
      jest: true, // Enables Jest globals
    },
    rules: {
      // Add custom rules here if needed
    },
  },
];
