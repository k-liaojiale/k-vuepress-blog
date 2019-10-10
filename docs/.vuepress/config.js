const navConf = require('../../config/navConf')
const sidebarConf = require('../../sidebarConf/index')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  themeConfig: {
    repo: 'k-liaojiale/k-vuepress-blog', // 在导航栏中自动生成一个 GitHub 链接
    nav: navConf,
    sidebar: sidebarConf,
    lastUpdated: '上次更新'
  }
}