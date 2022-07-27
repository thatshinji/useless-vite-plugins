# useless-vite-plugins
### 没用的vite插件集合
这里提供了一些并没有什么卵用的vite插件

##### author-tag
该插件可以在你的html页面中插入作者相关的注释内容
```ts
export default defineConfig({
  plugins: [AuthorTag({author: "shinji", date: new Date(), custom: `Hello Shinji`})]
}``)
```

