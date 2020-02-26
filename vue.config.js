const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/styles/theme.less')]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('styles', path.resolve('src/assets/styles'))
  }
}
