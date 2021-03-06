// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Tabbar, TabbarItem, PullRefresh, Stepper, Tab, Tabs, Cell, CellGroup } from 'vant'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import router from './router'



Vue.use(VueAwesomeSwiper)
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Tabbar).use(TabbarItem).use(PullRefresh).use(Stepper).use(Tab).use(Tabs).use(Cell).use(CellGroup)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
