import pageConfig from './src/config/page'
const glob = require('glob')

const TYPE = require('yargs-parser')(process.argv.slice(2))
let pages = {}
try {
  // 获得入口js文件，** 匹配0个或者多个文件夹
  if (TYPE.module) {
    let paths = [
      `./src/pages/index/**/index.js`,
      './src/pages/result/**/index.js'
    ]
    if (TYPE.module !== 'index')
      paths.push(`./src/pages/${TYPE.module}/**/index.js`)
    pages = getEntry(paths)
  } else {
    pages = getEntry([`./src/pages/**/index.js`])
  }
} catch (err) {
  pages = {}
  console.log('读取目录出错！')
  throw err
}
function getEntry(globPath) {
  let entries = {}
  if (typeof globPath !== 'object') {
    globPath = [globPath]
  }
  globPath.forEach(itemPath => {
    glob.sync(itemPath).forEach(function(entry) {
      const namePath = entry.match(/pages\/(\S*)\/index.js/)[1]
      const nameArr = namePath.split('/')
      const name = nameArr.join('')
      const page = getTitle(nameArr)
      entries[name] = {
        entry: entry,
        filename: `${namePath}.html`,
        title: page ? page.title : '',
        chunks: ['chunk-vendors', 'chunk-common', name],
        template: 'public/index.html'
      }
    })
  })
  return entries
}
function getTitle(nameArr) {
  let page = Object.assign({}, pageConfig)
  nameArr.forEach(name => {
    page = page[name]
  })
  return page
}
module.exports = pages
