const plugins = require('../webpack-config/plugins');

const output = require('../webpack-config/output');
output.publicPath = '/';

module.exports=
    {
        entry: require('../webpack-config/entry'),
        output: output,
        module: require('../webpack-config/module'),
        resolve: require('../webpack-config/resolve'),
        plugins:
        [
            plugins.CommonsChunk,
            plugins.Provide,
            plugins.DllReference,
            plugins.Define.development,
            plugins.HotModuleReplacement
        ],
        devServer: require('../webpack-config/devServer'),
    };