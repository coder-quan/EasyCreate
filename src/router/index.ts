/*
 * @Description:
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainPage from '../views/MainPage/MainPage.vue';
import Error from '../views/Error/Error.vue';
import PreviewPage from '../views/PreviewPage/PreviewPage.vue';
import Introduce from '../views/Introduce/Introduce.vue';
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
    path: '/preview',
    name: 'preview',
    component: PreviewPage,
    beforeEnter(to, from, next) {
      document.title = '预览';
      next();
    },
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: Introduce,
    beforeEnter(to, from, next) {
      document.title = '介绍';
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
  routes,
});

export default router;
