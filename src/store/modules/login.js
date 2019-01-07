import merge from 'lodash/merge'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import { SESSION_DURATION } from '@/constants'

const state = {
  loginName: '',
  username: '',
  token: '',
  userId: ''
}

const getters = {
  isLogin (state) {
    return !!(state.loginName && state.token && state.username)
  }
}

const mutations = {
  [types.SET_LOGIN_USER] (state, user) {
    merge(state, user)

    Cookies.set('token', user.token, { expires: SESSION_DURATION })
  },
  [types.LOGOUT] (state) {
    state.username = ''
    state.loginName = ''
    state.userId = ''
    Cookies.remove('token')
  }
}

export default {
  state,
  getters,
  mutations
}
