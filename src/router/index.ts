/*
 * @Description:
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainPage from '../views/MainPage/MainPage.vue';
import Error from '../views/Error/Error.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage,
    beforeEnter(to, from, next) {
      document.title = '主页';
      next();
    },
  },
  {
    path: '*',
    component: Error,
    beforeEnter(to, from, next) {
      document.title = '出错啦';
      next();
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
});

export default router;
