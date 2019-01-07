/* 每个路由里的注释 webpackChunkName 和webpack打包配置关联 */

const CommonView = () => import(/* webpackChunkName: "common-view" */ '@/views/CommonView.vue')

const PageError = () => import(/* webpackChunkName: "page-error" */ '@/views/PageError.vue')

const Home = () => import(/* webpackChunkName: "home" */'@/views/Home.vue')
const About = () => import(/* webpackChunkName: "home" */'@/views/About.vue')

export const errorRoute = {
  path: '*', component: PageError
}

export const mainRoutes = [
  { path: '/home', component: Home,
    meta: {
      auth: 'home'
    }
  },
  { path: '/about', component: About,
    meta: {
      auth: 'about'
    }
  },
]

export const modules = {
  path: '/',
  component: CommonView,
  children: []
}
