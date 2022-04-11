const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        publicPath: "/Mobile-first-solution-using-React-without-boilerplate/",
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/, 
                use: ["style-loader","css-loader"] 
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader'
            }
        ]
    },
    devServer: {
        static: './'
    }
}