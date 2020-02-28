import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
// import Home from '../views/user/Home.vue'
import Admin from '../views/admin/Admin.vue'
import User from '../views/admin/UserManagement.vue'
import Blog from '../views/admin/BlogManagement.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/register',component:Register},
  {path:'/login',components:
  {
    default:Login,
    'register':Register
  }},
  // {path:'/home',component:Home},
  {path:'/admin',redirect:'/user'},
  {path:'/admin',component:Admin,children:[
    {path:'/user',component:User},
    {path:'/blog',component:Blog}
  ]}
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  // to将要访问的路径
  // from代表从哪个路径跳转来
  // next是个函数表示放行
  if(to.path==='/login'||to.path==='/home')return next()
  // 获取token
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr)return next('/login')
  next()
})
export default router
