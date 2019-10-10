// 基础 Base

// 操作系统 OS
const centos = require('./OS/centos/index')

/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  // 操作系统 OS
  '/OS/centos/': centos
}