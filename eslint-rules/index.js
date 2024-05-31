const path = require("path")

function extractFeatureName(filePath) {
  // Normalize the path to use forward slashes for compatibility with regex
  const normalizedPath = filePath.replace(/\\/g, "/")

  // Regex to extract the feature name immediately following the 'features/' segment
  const featureRegex = /\/features\/([^/]+)(\/|$)/
  const match = normalizedPath.match(featureRegex)

  // Return the feature name if found, otherwise return null
  return match ? match[1] : null
}

function getFullImportPath(importPath, context) {
  if (importPath.startsWith(".")) {
    // Check if it's a relative path
    const filePath = context.getFilename()
    const fileDir = path.dirname(filePath)
    const fullImportPath = path.resolve(fileDir, importPath)
    return fullImportPath
  }
  return importPath
}

module.exports = {
  rules: {
    "restrict-imports": {
      meta: {
        type: "problem",
        description:
          "Enforce direct file imports within the same feature and index.js imports across different features",
        category: "Best Practices",
        recommended: true,
        schema: [], // This rule does not accept any options
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            const initialImportPath = node.source.value // The path of the imported module
            const importPath = getFullImportPath(initialImportPath, context)
            const filePath = context.filename // The absolute path of the file containing the import statement

            const fileFeatureName = extractFeatureName(filePath)
            const importFeatureName = extractFeatureName(importPath)

            const isImportFromIndexFile =
              importPath.endsWith("index") ||
              importPath.endsWith(importFeatureName)

            const isOutsideOfFeatureFolder = !fileFeatureName
            const isImportFromFeatureIndex =
              importFeatureName && isImportFromIndexFile

            const isImportWithinTheSameFeature =
              fileFeatureName === importFeatureName

            if (
              isOutsideOfFeatureFolder &&
              !isImportFromFeatureIndex &&
              importFeatureName
            ) {
              context.report({
                node,
                message:
                  "Avoid importing from the 'index.js' within the same feature. Directly import the specific modules to prevent circular dependencies and maintain modularity.",
              })
              return
            }

            if (isImportWithinTheSameFeature && isImportFromIndexFile) {
              context.report({
                node,
                message:
                  "Avoid importing from the 'index.js' within the same feature. Directly import the specific modules to prevent circular dependencies and maintain modularity.",
              })
              return
            }

            if (!isImportWithinTheSameFeature && !isImportFromIndexFile) {
              context.report({
                node,
                message:
                  "Import from external features should exclusively use the feature's 'index.js'",
              })
            }
          },
        }
      },
    },
  },
}

/*
isInFeatureFolder





 */
