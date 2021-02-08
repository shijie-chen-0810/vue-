import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from './Test'
import Indexconp from './Indexconp'
Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component: Test,
    children:[
      {
        path: 'indexconp',
        component: Indexconp
      }
    ]
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})
export default router


