// next.config.js
module.exports = {
    // Other configs you may have...
    webpack: function (config, { isServer, webpack }) {
        if (!isServer) {
            config.plugins.push(
                new webpack.IgnorePlugin({ resourceRegExp: /sequelize/ })
            );
        }
        return config;
    }
}