<template>
  <div class="nav-bar-container">
    <div class="nav-bar" :style="{ '--color': theme, '--font-color': color }">
      <div class="left">
        <el-button size="mini" @click="addPage">
          新建
          <i class="el-icon-document"></i>
        </el-button>
        <el-button size="mini">
          选择模板
          <i class="el-icon-folder-add"></i>
        </el-button>
      </div>
      <div class="center">EasyCreate</div>
      <div class="right">
        <el-button size="mini" @click="download">
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
  import { Vue, Component, Watch, Emit } from 'vue-property-decorator';
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
      if (oldVal) {
        themeModule.ResetTheme(newVal);
      }
      themeModule.GetTheme();
      this.theme = themeModule.theme;
      themeModule.ResetColor(this.theme);
      this.color = themeModule.fontColor;
      this.backgroundColor = themeModule.theme;
    }

    @Emit('on-add')
    private addPage() {
      return true;
    }

    @Emit('download')
    private download() {
      return true;
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    display: flex;
    line-height: var(--navbar-line-height);
    width: 100%;
    background-color: var(--color);
    justify-content: center;
    align-items: center;
    color: var(--font-color);
    border-bottom: solid 1px black;
    .left,
    .center,
    .right {
      flex: 1;
    }
    ::v-deep .left,
    ::v-deep .right {
      line-height: var(--navbar-line-height);
      display: flex;
      span,
      .el-button span {
        margin-right: 6px;
        font-size: 16px;
      }
      .el-button {
        color: var(--font-color);
        background-color: var(--color);
        border: 0;
      }
      .el-button:hover {
        color: blue;
      }
      .el-button + .el-button {
        margin-left: -10px;
      }
    }
    .left {
      justify-content: flex-start;
    }
    ::v-deep .right {
      justify-content: flex-end;
      .el-color-picker {
        line-height: var(--navbar-line-height);
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
    .center {
      text-align: center;
      font: 30px fantasy;
    }
  }
  .main {
    display: flex;
  }
</style>
