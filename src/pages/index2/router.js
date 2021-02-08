import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from './Test'
import Indexconp2 from './Indexconp2'
Vue.use(VueRouter)

const routes = [
  {
    path:'/index2',
    component: Test,
    children:[
      {
        path: 'indexconp',
        component: Indexconp2
      }
    ]
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})
export default router


