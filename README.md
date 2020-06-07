# zhaoxi_project

## 1.Src项目目录介绍
1. asset              静态的资源文件
2. components         组件
3. router             路由配置
4. views              界面UI
5. main.js            项目入口文件
6. package.json       项目依赖的包文件
7. App.vue            项目主界面


## 2.Vue中知识点
1. 组件间传值 props属性
```
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```
父组件使用子组件的时候，通过msg属性传过来
```
  <HelloWorld msg="Welcome to Your Vue.js App"/>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
