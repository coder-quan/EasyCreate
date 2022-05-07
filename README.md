[toc]

# 启动项目

- 安装依赖 npm install
- 本地开发 启动项目 npm run serve

# 在线预览地址

- [https://coder-quan.github.io/easy-create/#/main](https://coder-quan.github.io/easy-create/#/main)

# 目录详解

src 目录下

- assets 图片和 css 文件
- eva 公共资源，此目录下的 vue 文件会全局注册
  - components 页面的构成组件`头部 侧边菜单栏 等都在这里`
  - data 存放一些集中处理的数据
  - interface 用于限制变量类型的接口
- router 默认路由
- store vuex 仓库
- utils 公共的方法
- views 主要是画布及其相关组件
- APP.vue 主入口文件

# 代码提交的信息编写规范

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动等等 one

例子:
style: 头部信息的样式修改

# 写死的数据

\src\eva\data\Menu 组件菜单数据

# 自定义组件放在存放处

全局公共组件存放地址：\src\eva\components
其他组件存放地址： \src\views
