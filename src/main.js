import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import i18n from './lang' // Internationalization
import './icons' // icon
import './permission' // permission control

import { Button, Form, FormItem, Input, Dialog, Dropdown, DropdownItem, DropdownMenu, Message, Row } from 'element-ui'

import VueFlagList from 'vue-flag-list'
import 'vue-flag-list/dist/vue-flag-list.min.css'

Vue.use(VueFlagList)
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)

Vue.use({
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.$message = Message

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
