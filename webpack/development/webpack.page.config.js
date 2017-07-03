const plugins = require('../webpack-config/plugins');
const vars = require('../vars');
const path = require('path');

module.exports=
    {
        entry: { page: path.resolve(vars.path.webpack.root, 'vars.js') },
        output: { path: vars.path.build.root, filename: 'useless.js'},
        module: require('../webpack-config/module'),
        resolve: require('../webpack-config/resolve'),
        plugins:
        [
            // plugins.CommonsChunk,
            // plugins.Provide,
            // plugins.DllReference,
            // plugins.Define
        ]
            .concat(plugins.HtmlWebpack)
    };