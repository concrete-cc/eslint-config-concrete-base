module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-use-before-define": [2, {"functions": false, "classes": false}],
    "semi": [2, "never"],
    "max-len": [2, 140, 2],
    "new-cap": [2, {"newIsCap": true, "capIsNew": false, "properties": false}],
    "padded-blocks": 0,
    "no-param-reassign": ["error", { "props": false }],
  }
}

