module.exports = {
  presets: ['@vue/app'],
  plugins: [
    '@babel/transform-runtime',
    'lodash',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
}
