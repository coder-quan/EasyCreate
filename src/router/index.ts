/*
 * @Description:
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/MainPage/MainPage.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: About,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
});

export default router;
