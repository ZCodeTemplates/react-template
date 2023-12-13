module.exports = {
  "*.ts": ["prettier --write", "eslint"],
  "*.tsx": ["prettier --write", "eslint"],
  "*.js": ["prettier --write", "eslint"],
  "*.html": ["eslint", "prettier --write"],
  "*.json": ["prettier --write"],
  "*.scss": ["stylelint", "prettier --write"],
}
