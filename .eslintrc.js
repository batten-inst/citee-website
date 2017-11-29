module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {},
};
