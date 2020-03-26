require('babel-register')({
  presets: ['env']
})
const path = require('path')
const px2rem = require('postcss-px2rem')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const postcss = px2rem({ remUnit: 37.5 })

function resolve(dir) {
  return path.join(__dirname, dir)
}

let TYPE = require('yargs-parser')(process.argv.slice(2))

const API = TYPE['API']

let plugins = [
  new LodashModuleReplacementPlugin({ collections: true }),
  new webpack.DefinePlugin({
    'process.env.API': API,
    __DEV__: API === 'dev',
    __BROWSER__: TYPE.browser,
    __TEST__: TYPE.test
  })
]
if (TYPE.analyzer) plugins.push(new BundleAnalyzerPlugin())

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  runtimeCompiler: false,
  productionSourceMap: false,
  parallel: true,
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  configureWebpack: {
    resolve: {
      alias: {
        utils: resolve('src/utils'),
        api: resolve('src/api')
      }
    },
    plugins
  },
  pages: require('./page.config.js'),
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 重置vant主题色
          blue: '#2F74ED',
          'button-primary-background-color': '@blue',
          'button-primary-border-color': '@blue'
        }
      },
      postcss: {
        plugins: [postcss]
      }
    }
  }
}
