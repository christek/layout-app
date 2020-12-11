const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        },
        {
            test: /\.s*css$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules:true,
                },
              },
              // { loader: 'postcss-loader', options: { sourceMap: true, plugins: [require('autoprefixer')] } },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: ['/'],
                  },
                },
              },
            ],
          },]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
