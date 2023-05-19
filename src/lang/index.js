import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import ElementLocale from 'element-ui/lib/locale'
import enLocale from './en'
import zhLocale from './zh'
import { navLang } from '@/utils/i18n'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get('language') || navLang(),
  // set locale messages
  messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n