module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb/base'],
  rules: {
    'no-console': 2,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
  },
};
