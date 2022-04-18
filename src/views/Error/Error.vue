<template>
  <div class="error">
    <span class="tip">肥肠抱歉，你要找的页面不见了</span>
    <div @click="backHome" class="back">返回主页</div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  @Component({
    name: 'Error',
  })
  export default class Error extends Vue {
    private backHome() {
      this.$router.replace('/main');
    }
  }
</script>

<style lang="scss" scoped>
  .error {
    width: 300px;
    position: fixed;
    top: 40%;
    left: calc(50% - 150px);
  }
  .tip {
    display: block;
    padding-bottom: 50px;
    font-size: 20px;
  }
  .back {
    width: 100px;
    margin-left: 100px;
    text-decoration: underline;
    &:hover {
      color: rgb(0, 152, 152);
    }
  }
</style>
