module.exports = {
  "extends": "vue",
  "env": {
    "node": true,
    "browser": true,
    "jquery": true,
    "amd": false,
    "es6": true
  },
  "globals": {},
  "rules": {
    "max-len": [1, 200, 2, { "ignoreComments": true }],
    "radix": 0,
    "linebreak-style": 0,
    "comma-dangle": [2, "never"],
    "no-unused-vars": [1, { "vars": "local", "args": "none" }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": false,
      "peerDependencies": false
    }]
  }
};
