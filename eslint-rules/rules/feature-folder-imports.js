const path = require("node:path")

const FEATURE_AND_GROUPS_REGEX_PATTERN = /\/features(?:\/\([^)]+\))*\/([^/]+)/

function extractFeatureName(filePath, regex) {
  const normalizedPath = filePath.replace(/\\/g, "/")
  const match = normalizedPath.match(regex)

  return match ? match[1] : null
}

function getFullImportPath(node, context) {
  const importPath = node.source.value
  const isRelativePath = importPath.startsWith(".")

  if (isRelativePath) {
    const filePath = context.filename
    const fileDir = path.dirname(filePath)
    return path.resolve(fileDir, importPath)
  }

  return importPath
}

function checkIfImportIsFromIndexFile(importPath, importPathFeatureName) {
  return importPath.endsWith("index") || importPath.endsWith(importPathFeatureName)
}

module.exports = {
  meta: {
    type: "problem",
    description: "Enforce direct file imports within the same feature and index.js imports from outside the feature",
    category: "Best Practices",
    recommended: true,
    schema: [
      {
        type: "object",
        properties: {
          featureRegex: {
            type: "object",
          },
        },
      },
    ],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const { options = [] } = context
        const { featureRegex = FEATURE_AND_GROUPS_REGEX_PATTERN } = options.at(0) || {}

        const importPath = getFullImportPath(node, context)
        const filePath = context.filename

        const fileFeatureName = extractFeatureName(filePath, featureRegex)
        const importFeatureName = extractFeatureName(importPath, featureRegex)

        const isImportFromIndexFile = checkIfImportIsFromIndexFile(importPath, importFeatureName)

        const isOutsideOfFeatureFolder = !fileFeatureName
        const isImportFromFeatureIndex = importFeatureName && isImportFromIndexFile

        const isImportWithinTheSameFeature = fileFeatureName === importFeatureName

        if (!importFeatureName) {
          return
        }

        if (isOutsideOfFeatureFolder && !isImportFromFeatureIndex) {
          context.report({
            node,
            message: "Ensure imports from features are made exclusively through their respective 'index.js' files.",
          })
        } else if (isImportWithinTheSameFeature && isImportFromIndexFile) {
          context.report({
            node,
            message:
              "Avoid importing from the 'index.js' within the same feature. Directly import the specific modules to prevent circular dependencies and maintain modularity.",
          })
        } else if (!isImportWithinTheSameFeature && !isImportFromIndexFile) {
          context.report({
            node,
            message: "Import from external features should exclusively use the feature's 'index.js'",
          })
        }
      },
    }
  },
}
