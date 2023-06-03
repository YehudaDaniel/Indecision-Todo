const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: { //output of the transpiled code
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ //rules for babel-loader
            loader: 'babel-loader',
            test: /\.js$/, //regex to match all js files
            exclude: /node_modules/ //exclude node_modules folder
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};