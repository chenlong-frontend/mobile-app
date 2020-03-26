# 流程app

## 安装依赖

```
yarn install
```

### 运行 npm

```
yarn dev
```

开发过程中运行整个项目会导致内存溢出，建议按模块运行，如

```
-yarn dev:browser --module=模块名
// 如果没有yarn则需执行如下指令
-vue-cli-service serve --API=dev --browser  --module=模块名
或则
npm run increase-memory-limit 即可 然后 npm run dev (开发还是建议按模块编译)
```

### 打包

```
npm run build
```

## 说明

- 本项目为多页应用，无法使用 Vuex、Vue-router，页面跳转需要加上.html 后缀
- 页面公共资源文件或插件，在 common.js 引用即可。
- 使用 normalize.css 重置样式。
- 使用 axios 请求库，可以自定义拦截逻辑。
- 添加了 fastclick 解决移动端 300ms 点击延迟。
- 添加 postcss-px2rem 自动将 px 转换为 rem 适配移动端。
- 添加页面请在 pages 文件夹下新建目录，在里面放置 index.js 和 Index.vue（建议复制 template 文件夹修改名字进行开发）。

## 命名规范

- 文件夹命名小写开头 驼峰
- vue 组件命名小写开头 驼峰
- js 组件名称小写开头 驼峰

## 文件结构规范

- 组件模块: 公共组件(commponent/组件) 业务组件(commponent/业务模块/组件)
- 业务 pages 结构：模块>业务，最多三成目录结构,如果超过三成业务深度，上级模块+业务名称驼峰命名

## 刷新机制
- 场景: 修改用户信息头像

## 表单验证

- 使用 utils 下的 validator.js 进行表单验证，实例如下：

```js
import Validator from '@/utils/validator.js'
// 关于规则定义详见 https://github.com/yiminghe/async-validator
const descriptor = {
  name: [
    { required: true, message: '姓名不得为空' },
    {
      validator: (rule, value) => value === 'test',
      message: '姓名必须为test'
    },
    {
      asyncValidator: (rule, value) => {
        return new Promise((resolve, reject) => {
          if (value === 'test') {
            reject('姓名错误')
          } else {
            resolve()
          }
        })
      }
    }
  ]
}
const validator = new Validator(descriptor)
validator.validate({ name: 'test' }, (value, error) => {
  if (error) return
  // 执行提交
  console.log(value)
})
```
