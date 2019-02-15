import { loginByUsername, signup } from '@/api/auth'
import { getToken, setToken, removeToken, getID, setID, removeID } from '@/utils/auth'
import Cookies from 'js-cookie'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    id: getID(),
    name: '',
    avatar: '',
    roles: [],
    setting: {
      articlePlatform: []
    },
    userDomain: [],
    currentDomain: (Cookies.get('userDomain') ? JSON.parse(Cookies.get('userDomain')) : {}) || {}
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERDOMAIN: (state, userDomain) => {
      state.userDomain = userDomain
    },
    SET_CURRENTDOMAIN: (state, currentDomain) => {
      Cookies.set('userDomain', currentDomain, { expires: 99999 })
      state.currentDomain = currentDomain
    },
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.email.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.passwd).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(response.data.token)
          commit('SET_ID', data.id)
          setID(response.data.id)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //用户注册
    signup({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        signup(userInfo).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.usertoken)
          setToken(response.data.usertoken)
          commit('SET_ID', data.id)
          setID(response.data.id)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //用户登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        commit('SET_ID', '')
        removeID()
        commit('SET_USERDOMAIN', [])
        commit('SET_CURRENTDOMAIN', {})
        resolve()
      })
    },
    //设置用户权限
    setRole({ commit }, auth) {
      return new Promise((resolve, reject) => {
        const data = {
          roles: [auth]
        }
        commit('SET_ROLES', data.roles)
        resolve(data)
      })
    },
    //设置用户域名
    setDomain({ commit }, userDomain) {
      return new Promise((resolve, reject) => {
        commit('SET_USERDOMAIN', userDomain)
        resolve(userDomain)
      })
    },
    //设置用户当前域名
    setCurrentDomain({ commit }, currentDomain) {
      return new Promise((resolve, reject) => {
        commit('SET_CURRENTDOMAIN', currentDomain)
        resolve(currentDomain)
      })
    }

  }
}

export default user
