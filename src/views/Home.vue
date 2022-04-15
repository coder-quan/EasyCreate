<!--
 * @Description: 
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
-->
<template>
  <div class="home">
    <package-menu />
  </div>
</template>

<script lang="ts">
  // import HelloWorld from '@/components/HelloWorld.vue';
  import { Component, Vue } from 'vue-property-decorator';

  // 引入组件 即使没有使用组件也得书写 @Component。
  @Component({
    components: {
      // HelloWorld,
    },
  })
  export default class Home extends Vue {}
</script>
