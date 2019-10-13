const navConf = require('../../config/navConf')
const sidebarConf = require('../../sidebarConf/index')

module.exports = {
  title: '落秋\'s Blog',
  description: '落秋的博客',
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  head: [
    ['link', { rel:'icon', href: '/logo.png'}],
    ['link', { rel:'manifest', href: '/manifest.json'}]
  ],
  themeConfig: {
    repo: 'k-liaojiale/k-vuepress-blog', // 在导航栏中自动生成一个 GitHub 链接
    nav: navConf,
    sidebar: sidebarConf,
    lastUpdated: '上次更新'
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  }
}