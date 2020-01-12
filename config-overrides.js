const path = require('path');
const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias
} = require("customize-cra")

module.exports = override(
    // 支持装饰器语法 mobx采用ES7装饰器语法
    addDecoratorsLegacy(),
    addWebpackAlias({
        "@src": path.resolve(__dirname, './src'),
        "@pages": path.resolve(__dirname, './src/pages'),
        "@utils": path.resolve(__dirname, './src/utils')
    }),
)
