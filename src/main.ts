/*
 * @Description:
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import { toCssStyle } from './utils/style';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css';
import { register } from '@/eva/index';
Vue.use(ElementUI);
Vue.config.productionTip = false;
register();

Vue.directive('style', {
  bind(el, binding) {
    let style: string[] = Object.getOwnPropertyNames(binding.value.style.value);
    style.pop();
    if (style.length) {
      style.forEach((item) => {
        el.style[item as any] = toCssStyle(
          item,
          binding.value.style.value[item],
          binding.value.style.unit[item]
        );
      });
    }
  },
  update(el, binding) {
    let style: string[] = Object.getOwnPropertyNames(binding.value.style.value);
    style.pop();
    if (style.length) {
      style.forEach((item) => {
        el.style[item as any] = toCssStyle(
          item,
          binding.value.style.value[item],
          binding.value.style.unit[item]
        );
      });
    }
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
