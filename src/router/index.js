import Vue from 'vue'
import Router from 'vue-router'
import Pagination from '../components/pagination.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pagination',
      component: Pagination,
    }
  ]
})
