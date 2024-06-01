module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier", // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-refresh", "import", "jsx-a11y", "best-practices"],
  rules: {
    "best-practices/feature-folder-imports": ["error"],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "import/prefer-default-export": "off",
    "import/order": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-props-no-spreading": "off",
  },
}
