const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/theme.less'),
        path.resolve(__dirname, 'src/assets/styles/mixins.less')
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('styles', path.resolve('src/assets/styles'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
