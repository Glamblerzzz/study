import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Scroll from '@/views/scrollAnimation/ScrollAnimation';
// 引入子路由
import Son from './router/son';
// 子路由的视图
import frame from '@/frame/frame.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/news',
      component: frame,
      children: Son
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }
  ]
});
