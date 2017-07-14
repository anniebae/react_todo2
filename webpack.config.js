var webpack = require("webpack");
var path = require("path");


// module.exports = {
//   entry: {
//     app: "./src/components/App"
//   },
//   output: {
//     filename: "build/bundle.js",
//     sourceMapFilename: "build/bundle.map"
//   },
//   devtool: "#source-map",
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//     ]
//   }
// }


module.exports = {
    entry: {
        app: "./src/components/App"
    },
        output: {
        filename: "build/bundle.js",
        sourceMapFilename: "build/bundle.map"
    },
    devtool: "#source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
}