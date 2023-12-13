module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["testing", "feature", "fix", "refactor", "revert", "style"],
    ],
  },
}
