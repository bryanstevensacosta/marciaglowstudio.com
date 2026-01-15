module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', () => 'tsc --noEmit'],
  '*.{json,css,md}': ['prettier --write'],
}
