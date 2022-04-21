<template>
  <div class="main-view">
    <div class="edit">
      <el-tooltip class="item" effect="light" content="预览">
        <i class="el-icon-full-screen" @click="clickIcon('preview')"></i>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="撤销">
        <i class="el-icon-refresh-left" @click="clickIcon('cancel')"></i>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="删除画布">
        <i class="el-icon-delete" @click="clickIcon('empty')"></i>
      </el-tooltip>
    </div>
    <div class="preview">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Emit } from 'vue-property-decorator';

  type iconType = 'preview' | 'cancel' | 'empty';
  @Component({
    name: 'MainView',
  })
  export default class MainView extends Vue {
    // 根据点击的图标触发相应的事件
    @Emit('on-check')
    private clickIcon(type: iconType) {
      return type;
    }
  }
</script>

<style lang="scss" scoped>
  .main-view {
    width: 100vw;
    height: calc(100vh - var(--navbar-line-height) - 1px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    ::v-deep .edit {
      height: 26px;
      background-color: var(--color-background);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 10px;
      i {
        padding: 0 5px;
      }
      .el-icon-full-screen:hover,
      .el-icon-refresh-left:hover,
      .el-icon-delete:hover {
        color: blue;
      }
    }
    .preview {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      scrollbar-width: none; //火狐隐藏滚动条
      &::-webkit-scrollbar {
        //谷歌隐藏滚动条
        display: none;
      }
    }
  }
</style>
