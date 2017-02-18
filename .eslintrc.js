module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  globals: {
    document: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': [1, 200, 2, { 'ignoreComments': true }],
    'radix': 0,
    'linebreak-style': 0,
    'comma-dangle': [2, 'never'],
    'no-unused-vars': [1, { 'vars': 'local', 'args': 'none' }],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true,
      'optionalDependencies': false,
      'peerDependencies': false
    }]
  }
}
