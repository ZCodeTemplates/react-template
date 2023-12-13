module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-css-order",
  ],
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "^./(.*)(?<!.css)$",
    "^(.*?).(css|scss|sass|less)",
  ],
  semi: false,
  trailingComma: "es5",
  printWidth: 80,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  jsxSingleQuote: true,
  cssDeclarationSorterOrder: "smacss",
  cssDeclarationSorterKeepOverrides: false,
  endOfLine: "auto",
}
