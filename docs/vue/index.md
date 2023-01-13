## vue

```ts {1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

@[code{1-1} ts{1}](./demo.ts)

```md
一加一等于： {{ 1 + 1 }}
```

<span v-for="i in 3"> span: {{ i }} </span>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

@[code vue{1}](./demo.vue)

![图片](/images/hero.png)

