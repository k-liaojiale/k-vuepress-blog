const pluginConf = require('../../config/pluginConf')
const navConf = require('../../config/navConf')
const sidebarConf = require('../../config/sidebarConf/index')

module.exports = {
  title: '落秋\'s Blog',
  description: '落秋的博客',
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  head: [
    ['link', { rel:'apple-touch-icon', href: '/apple-touch-icon.png'}],
    ['link', { rel:'icon', href: '/favicon-32x32.png'}],
    ['meta', { name:'theme-color', content: '#ffffff'}],
    ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
    ['link', { rel:'manifest', href: '/manifest.json'}]
  ],
  themeConfig: {
    repo: 'k-liaojiale/k-vuepress-blog', // 在导航栏中自动生成一个 GitHub 链接
    nav: navConf,
    sidebar: sidebarConf,
    lastUpdated: '上次更新'
  },
  plugins: pluginConf
}