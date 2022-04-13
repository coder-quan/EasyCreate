<template>
  <div class="hello">
    <div>{{ computedVal }}</div>
    <div>
      {{ msg }}
    </div>
    <button @click="deal(1)">同意</button>
    <button @click="deal(2)">拒绝</button>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

  // 引入组件 即使没有使用组件也得书写 @Component。
  @Component
  export default class HelloWorld extends Vue {
    // Prop
    @Prop(String) private msg!: string;

    // data
    private cont: string = 'only you';

    // 计算属性监听
    get computedVal() {
      return this.cont + '能跟我去取西经';
    }

    //  Watch
    @Watch('cont')
    private onContChanged(val: any, oldVal: any) {
      console.log(val);
    }

    // 生命周期
    private created() {
      this.init();
    }

    // 方法
    private init() {
      console.log('HelloWorld');
    }

    // Emit子组件触发
    @Emit('getResult')
    private deal(val: number) {
      return val === 1 ? '同意' : '拒绝';
    }
  }
</script>
