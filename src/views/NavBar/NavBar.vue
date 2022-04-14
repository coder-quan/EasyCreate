<template>
  <div class="nav-bar" :style="{ '--color': theme, '--font-color': color }">
    <div class="left" :style="{}">EasyCreate</div>
    <div class="center"></div>
    <div class="right">
      <span>主题颜色</span>
      <el-color-picker v-model="backgroundColor"></el-color-picker>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator';
  import { themeModule } from '@/store/modules/theme';

  @Component({
    name: 'NavBar',
  })
  export default class NavBar extends Vue {
    private theme: string = '';
    private backgroundColor: string = '';
    private color: string = '';

    @Watch('backgroundColor', { immediate: true })
    private changeColor(newVal: string, oldVal: string) {
      if (oldVal) themeModule.ResetTheme(newVal);
      themeModule.GetTheme();
      this.theme = themeModule.theme;
      this.color = themeModule.fontColor;
      this.backgroundColor = themeModule.theme;
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    display: flex;
    height: 56px;
    width: 100%;
    background-color: var(--color);
    justify-content: center;
    align-items: center;
    color: var(--font-color);
    .left,
    .center,
    .right {
      flex: 1;
    }
    .left {
      text-align: left;
      padding-left: 30px;
      font: 30px fantasy;
    }
    ::v-deep .right {
      color: white;
      display: flex;
      justify-content: flex-end;
      span {
        margin-right: 6px;
      }
      .el-color-picker {
        padding-right: 30px;
        width: 17px;
        height: 17px;
        .el-color-picker__trigger {
          width: 17px;
          height: 17px;
        }
      }
    }
  }
</style>
