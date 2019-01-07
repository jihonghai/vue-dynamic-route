import concat from 'lodash/concat'

import * as types from '../mutation-types'
import router from '@/router'
import auth from '@/auth'
import { modules, mainRoutes, errorRoute } from '@/router/modules'
import { compare } from '@/utils'

/**
 * 找出 / 跳转的路径
 *
 * @param {Array} routes
 *
 * @return {String} 根目录跳转地址
 */
function findMainRoute (routes) {
  return routes[0].path
}

/**
 * 根据当前用户的权限，过滤出具有权限的路由
 *
 * @param {Array} mainRoutes 所有页面的路由（除错误页面，如404等）
 * @param {Array} permissions 权限码集合
 *
 * @return {RouteConfig[]} 当前用户拥有权限的路由
 */
function filterRoutes (mainRoutes, permissions) {
  let routes = []
  for (let route of mainRoutes) {
    if (compare(route.meta.auth, permissions)) {
      routes.push(route)
    }
  }

  return routes
}

/**
 * 初始化路由
 *
 * @param {Array} permissions 权限码集合
 * @param {RouteConfig[]} modules 路由配置项
 * @param {RouteConfig} errorRoute 错误页面路由配置项
 */
function initRouter (permissions, modules, errorRoute) {
  let routes = filterRoutes(mainRoutes, permissions)
  modules.children = concat(modules.children, routes)

  // 增加根路径的跳转页面
  modules.children.push({ path: '/', redirect: findMainRoute(routes) })

  router.addRoutes([
    modules,
    errorRoute
  ])
}

/**
 * 设置用户权限, 动态加载菜单
 */
function setRolesAndInitRouter (permissions) {
  auth.setRoles(permissions)

  initRouter(permissions, modules, errorRoute)
}

export const loginByToken = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit(types.SET_LOGIN_USER, {
      username: 'ceshi',
      loginName: 'ceshi',
      token: `${new Date().getTime()}`,
      userId: '111'
    })

    // 用户菜单权限集合
    /*
    let permissions = [
      'home',
      'about'
    ]
    */
    let permissions = [
      'home'
    ]

    setRolesAndInitRouter(permissions)

    resolve()
  })
}
