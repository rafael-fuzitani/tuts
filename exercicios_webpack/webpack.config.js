const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js', //ponto de entrada
    output: { //saida do arquivo javascript
        path: __dirname  + '/public', //__dirname é a pasta atual
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{//trasuz coisas para o browser
            test: /.js?$/, //vai carregar arquivos .js
            loader: 'babel-loader', //qual loader vai ser utilizado
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}