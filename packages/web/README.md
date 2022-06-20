## Web

### 
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