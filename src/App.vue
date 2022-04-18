<!--
 * @Description: 
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
-->
<template>
  <div id="app">
    <div id="nav" v-if="isMobile">暂不支持移动端，请使用电脑访问</div>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    name: 'App',
  })
  export default class App extends Vue {
    get isMobile() {
      let result = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return !!result;
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100vw;
    height: 100vh;
  }

  #nav {
    width: 240px;
    font-weight: bold;
    color: #2c3e50;
    position: fixed;
    top: 50%;
    left: calc(50% - 120px);
  }
</style>
