import { getItem, setItem } from '@/utils/storage'
import { navLang } from '@/utils/i18n'
import Cookies from 'js-cookie'
import fa from "element-ui/src/locale/lang/fa";

const app = {
  state: {
    sidebar: {
      opened: !+getItem('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    language: Cookies.get('language') || navLang(),  // 如果cookie没有语言则用浏览器首选语言
    switchDomainVisible: false,
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        setItem('sidebarStatus', 1)
      } else {
        setItem('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      setItem('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language, { expires: 99999 })
    },
    TOGGLE_SWITCH_DOMAIN: (state, flag) => {
      state.switchDomainVisible = flag
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    toggleSwitchDomain({ commit }, visible) {
      commit('TOGGLE_SWITCH_DOMAIN', visible)
    },
  }
}

export default app
