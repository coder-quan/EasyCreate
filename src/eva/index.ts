import Vue from 'vue';

export function register() {
  // 加载组件
  const requireComponent = require.context('./components', true, /\.vue$/);
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = componentConfig.default.name;
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}
