// eslint-disable-next-line @typescript-eslint/no-var-requires
const featureFolderImports = require("./rules/feature-folder-imports")

module.exports = {
  rules: {
    "feature-folder-imports": featureFolderImports,
  },
}
