import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button,Form,FormItem,Input,Message,Table,Radio,Tooltip,Menu,MenuItem,Dialog,TableColumn,Tag,Loading} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/color-green.css'
import './assets/css/global.css'
import axios from 'axios'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(Radio)
Vue.use(Tooltip)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Loading)
Vue.prototype.$message=Message

Vue.config.productionTip = false
// 每个vue组件都可以通过this直接访问$http发起请求
// 把axios挂载到vue的原型对象上
Vue.prototype.$http = axios
// 配置请求根路径
axios.defaults.baseURL='http://localhost:8083/api/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
