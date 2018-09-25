import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import '@/styles/index.scss' // global css

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import i18n from './lang' // Internationalization
import './icons' // icon
import './permission' // permission control

import { Button, Form, FormItem, Input, Dialog, Dropdown, DropdownItem, DropdownMenu, Message, Row, Menu, MenuItem, Scrollbar, Breadcrumb, BreadcrumbItem } from 'element-ui'

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
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Scrollbar)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

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
