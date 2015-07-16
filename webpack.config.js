module.exports = {
    entry: './js/app.js',
    output: {
        path: './js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};