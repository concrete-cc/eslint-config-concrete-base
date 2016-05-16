module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-use-before-define": [2, {"functions": false, "classes": false}],
    "semi": [2, "never"],
    "new-cap": [2, {"newIsCap": true, "capIsNew": false, "properties": false}],
    "padded-blocks": 0,
    "arrow-body-style": 0,
    "no-underscore-dangle": [2, { "allowAfterThis": true, "allow": ["_id"] }],
    "no-param-reassign": ["error", { "props": false }]
  }
}
