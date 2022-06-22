## Web

### 一些简要的规范

1. 自定义的组件使用大驼峰PascalCase命名 如 GisMap
2. 第三方组件引入使用kebab-case 如 a-button
3. 组件内的变量、常量的定义使用小驼峰camelCase，单独定义的常量使用大驼峰
4. 函数定义也使用小驼峰camelCase 首个单词要具有动作描述如get，post，calculate，compute，但不能使用use开头
5. composition api 使用 useXXX 的形式命名 XXX 最好带有功能描述
6. pinia Store的命名使用 useStoreForXXX 的形式 XXX 最好使用模块或者功能大类的名称
### 图标

使用CSS图标，已安装的图标集 carbon

使用方式: 在标签上使用 i-carbon-*
```html
<div i-carbon-sun dark:i-carbon-moon />

<a
  i-carbon-cloud
  rel="noreferrer"
  href="https://icones.js.org/collection/carbon"
  target="_blank"
  title="查看所有的carbon图标"
/>
```

### composition APIs

项目集成了 [vueuse](https://vueuse.org/functions.html)

使用方式：直接使用对应的function即可
```js
// src/composables/dark.ts
export const toggleDark = useToggle(isDark)
```

### 路由

项目集成了 vite-plugin-pages，实现了pages目录下[文件即路由]

使用方式：在pages目录下创建文件
```
src > pages > login.vue
```

### 组件

项目集成了 antd，同时实现了组件的自动导入

使用方式：在组件和页面内直接引用
```html
<a-button type="primary">Primary Button</a-button>
```

### Store

项目集成了 pinia，同样配置了自动导入

使用方式：在store目录下创建状态管理机
```js
export const useStoreForDemo = defineStore('web', () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  return { increment, count }
})

```