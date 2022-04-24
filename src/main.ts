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
import { register } from './eva';
import { toCssStyle } from './utils/style';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css';
import '@/assets/css/normalize.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;
register();
Vue.directive('demo', {
  bind(el, binding, vnode) {
    let style: string[] = Object.getOwnPropertyNames(binding.value.value);
    style.pop();
    style.forEach((item) => {
      el.style[item as any] = toCssStyle(
        item,
        binding.value.value[item],
        binding.value.unit[item]
      );
    });
  },
  update() {
    // console.log(1111111);
  },
  componentUpdated(el, binding, vnode) {
    // console.log(el, el.style);
    // console.log(111, binding, binding.value);
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
