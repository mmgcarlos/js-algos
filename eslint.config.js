const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
      env: {
        node: true, // Enables Node.js global variables and scoping
        jest: true, // Enables Jest global variables
      }
    }
];
