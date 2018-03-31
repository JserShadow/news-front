import Vue from 'vue'
import Router from 'vue-router'
import Pagination from '../components/pagination.vue';
import Detail from '../components/detail.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pagination',
      component: Pagination,
    },
    {
      path: '/detail/:class/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
