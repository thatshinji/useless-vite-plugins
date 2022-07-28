# useless-vite-plugins
## 没什么卵用的vite插件集合
这里提供了一些并没有什么卵用的vite插件，但是希望有一天有用

所有插件都在plugins文件夹
### author-tag
该插件可以在你的html页面中插入作者相关的注释内容

```ts
import AuthorTag from "./author-tag";
export default defineConfig({
  plugins: [AuthorTag({author: "shinji", date: new Date(), custom: `Hello Shinji`})]
})
```

### img-comp
该插件可以将图片module自动转换为React组件

```ts
import ImgComp from "./img-comp"
export default defineConfig({
  plugins: [ImgComp()]
})
```
demo
```tsx
import Shinji from '../../assets/shinji.jpg'
const Image = () => (
  <Shinji />
)
export default Image
```
TODO:
- [ ] 支持多种图片格式
- [ ] 支持组件属性
- [ ] 同时支持url方式以及组件方式
- [ ] ...
