export default {
  '*.{js,jsx,ts,tsx}': ['prettier --write'],
  'package.json': ['prettier --write'],
  // '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  // '*.{scss,less,style,html}': ['stylelint --fix', 'prettier --write'],
  '*.vue': ['prettier --write'],
  '*.{scss,less,style,html}': ['prettier --write'],
  '*.md': ['prettier --write'],
};
