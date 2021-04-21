import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Sigin from './components/Sigin.vue'
import Documentation from './components/Documentation.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/Login', component: Login },
  { path: '/Home', component: Home },
  { path: '/Sigin', component: Sigin},
  { path: '/Documentation', component: Documentation},
  { path: '/', component: Home }

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
