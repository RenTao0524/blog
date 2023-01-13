import { defineUserConfig, defaultTheme } from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { dockerSidebar } from '../docker/dockerSidebar'
import { tocPlugin } from '@vuepress/plugin-toc'
import { yamlSidebar } from '../yaml/yamlSidebar'
import { jenkinsSidebar } from '../jenkins/jenkinsSidebar'

const sidebar = {
  ...dockerSidebar,
  ...yamlSidebar,
  ...jenkinsSidebar
}

export default defineUserConfig({
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/blog/images/favicon.ico' }]],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    repo: 'https://github.com/RenTao0524/blog',
    navbar: [
      {
        text: '首页',
        link: '/',
      }
    ],
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
    sidebar
  }),
  plugins: [
    docsearchPlugin({
      apiKey: '',
      appId: '',
      indexName: ''
    }),
    tocPlugin()
  ]
});
