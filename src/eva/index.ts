import Vue from 'vue';

export function register() {
  // 加载组件
  const requireComponent = require.context('./components', true, /\.vue$/);
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    // 线上环境的componentConfig.default.name均为n，因此使用extendOptions的name
    const componentName = componentConfig.default.extendOptions.name;
    console.log(componentConfig, componentName);
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}
