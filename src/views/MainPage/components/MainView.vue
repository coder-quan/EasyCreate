<template>
  <div class="main-view">
    <div class="edit">
      <i
        class="el-icon-full-screen"
        data-title="预览"
        @click="clickIcon('preview')"
      ></i>
      <i
        class="el-icon-refresh-left"
        data-title="撤销"
        @click="clickIcon('cancel')"
      ></i>
      <i
        class="el-icon-delete"
        data-title="清空画布"
        @click="clickIcon('empty')"
      ></i>
    </div>
    <div class="view"></div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  type iconType = 'preview' | 'cancel' | 'empty';
  @Component({
    name: 'MainView',
  })
  export default class MainView extends Vue {
    // 根据点击的图标触发相应的事件
    private clickIcon(type: iconType) {
      if (type === 'preview') this.preview();
      else if (type === 'cancel') this.cancel();
      else this.empty();
    }

    // 预览页面
    private preview() {
      console.log(1111);
    }

    // 取消操作
    private cancel() {
      console.log(2222);
    }

    // 删除页面
    private empty() {
      console.log(3333);
    }
  }
</script>

<style lang="scss" scoped>
  .main-view {
    background-color: #fff;
    width: 100vw;
    display: flex;
    flex-direction: column;
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
      .el-icon-full-screen:hover::after,
      .el-icon-refresh-left:hover::after,
      .el-icon-delete:hover::after {
        content: attr(data-title);
        font-size: 14px;
        margin: 20px 0 0 -26px;
        border: 1px solid #ddd;
        border-radius: 5px;
        color: #333;
        background-color: #fff;
        position: fixed;
        width: auto;
      }
    }
  }
</style>
