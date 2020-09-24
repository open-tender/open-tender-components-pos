const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'OpenTenderPOS',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|eot|woff|woff2)$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'prop-types': 'prop-types',
    'react-feather': 'react-feather',
    'react-transition-group': 'react-transition-group',
    'react-spinners': 'react-spinners',
    '@emotion/core': '@emotion/core',
    '@emotion/styled': '@emotion/styled',
    'emotion-theming': 'emotion-theming',
    '@open-tender/js': '@open-tender/js',
    '@open-tender/redux': '@open-tender/redux',
  },
}
