const config = {
    root: true,
    env: {
        browser: true
    },
    extends: [
        "plugin:vue/essential",
        "airbnb-base"
    ],
    settings: {
        "import/resolver": {
            webpack: {
                config: "build/webpack.config.dev.js"
            }
        }
    },
    rules: {
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "comma-dangle": "off",
        "indent": ["error", 4],
        "no-unused-vars": 1,
        "no-console": "off",
    }
}
module.exports = config
