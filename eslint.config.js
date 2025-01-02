const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021, // Supports modern JavaScript
      sourceType: "script", // CommonJS module support
      globals: {
        // Enables Node.js globals
        process: true,
        __dirname: true,
        module: true,
        require: true,
        exports: true,

        // Enables Jest globals
        describe: true,
        test: true,
        it: true,
        expect: true,
        jest: true,
      },
    },
    rules: {
      // Add custom rules here if needed
    },
  },
];
