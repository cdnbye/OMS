import { loginByUsername, signup } from '@/api/auth'
import { getToken, setToken, removeToken, getID, setID, removeID } from '@/utils/auth'

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
    }
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
    }
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
        console.log(userInfo)
        signup(userInfo).then(response => {
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
    //用户登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        commit('SET_ID', '')
        removeID()
        resolve()
      })
    },
    //设置用户权限
    setRole({ commit }) {
      return new Promise((resolve, reject) => {
        const data = {
          roles: ['admin']
        }
        commit('SET_ROLES', data.roles)
        resolve(data)
      })
    }

  }
}

export default user
