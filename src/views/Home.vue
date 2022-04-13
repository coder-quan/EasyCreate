<!--
 * @Description: 
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
-->
<template>
  <div class="home">
    <HelloWorld :msg="msg" @getResult="sonSays" />
    <button @click="changeMsg">改变</button>
  </div>
</template>

<script lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import { Component, Vue, Watch, Emit } from 'vue-property-decorator';

  // 引入组件 即使没有使用组件也得书写 @Component。
  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {
    // data
    private msg: string =
      '不论贫穷富有，不论健康疾病，你是否愿意嫁给这位先生？';

    //  Watch
    @Watch('msg')
    private onMsgChanged(val: any, oldVal: any) {
      console.log(val);
    }

    // 生命周期
    private created() {
      this.init();
    }

    // 方法
    private init(): void {
      console.log('Home');
    }

    private changeMsg(): void {
      this.msg = '456';
    }

    private sonSays(val: number): void {
      console.log('sonSays:' + val);
    }
  }
</script>
