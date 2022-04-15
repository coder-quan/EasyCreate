<template>
  <div class="nav-bar-container">
    <div class="nav-bar" :style="{ '--color': theme, '--font-color': color }">
      <div class="left" :style="{}">EasyCreate</div>
      <div class="right">
        <el-button size="mini">
          导出页面
          <i class="el-icon-download"></i>
        </el-button>
        <span>主题颜色</span>
        <el-color-picker v-model="backgroundColor"></el-color-picker>
      </div>
    </div>
    <div class="main">
      <slot v-bind="{ theme: theme, color: color }"></slot>
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

    // 监听选择主题颜色，将选择的颜色保存到本地并计算出字体颜色
    @Watch('backgroundColor', { immediate: true })
    private changeColor(newVal: string, oldVal: string) {
      if (oldVal) themeModule.ResetTheme(newVal);
      themeModule.GetTheme();
      this.theme = themeModule.theme;
      themeModule.ResetColor(this.theme);
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
    border-bottom: solid 1px var(--color-background);
    .left,
    .right {
      flex: 1;
    }
    .left {
      text-align: left;
      padding-left: 40px;
      font: 30px fantasy;
    }
    ::v-deep .right {
      line-height: 56px;
      display: flex;
      justify-content: flex-end;
      span {
        margin-right: 6px;
        font-size: 16px;
      }
      .el-button {
        color: var(--font-color);
        background-color: var(--color);
        border: 0;
        border-bottom: solid 1px var(--color-background);
        .el-icon-download {
          font-size: 16px;
        }
      }
      .el-color-picker {
        line-height: 56px;
        padding-right: 30px;
        padding-top: 3px;
        width: 17px;
        height: 17px;
        .el-color-picker__trigger {
          width: 17px;
          height: 17px;
        }
      }
    }
  }
  .main {
    display: flex;
  }
</style>
