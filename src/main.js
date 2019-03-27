import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import '@/styles/index.scss' // global css

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import i18n from './lang' // Internationalization
import './icons' // icon
import './permission' // permission control

import { Alert, Popover, Select, Option, Loading, Pagination, Slider, 
  Card, Table, TableColumn, Radio, RadioGroup, RadioButton, DatePicker, Tooltip, Button, Form, FormItem, Input, Dialog, Dropdown, DropdownItem, DropdownMenu, 
  Message, Row, Col, Menu, MenuItem, MenuItemGroup, Scrollbar, Breadcrumb, BreadcrumbItem, Submenu, InputNumber, MessageBox } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Alert)
Vue.use(Popover)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)
Vue.use(Pagination)
Vue.use(Slider)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(DatePicker)
Vue.use(Tooltip)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Scrollbar)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Submenu)
Vue.use(InputNumber)

Vue.use({
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox

Vue.filter('positive', (value) => {
   return value < 0 ? 0 : value
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
