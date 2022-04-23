<template>
  <div
    ref="Setting"
    v-show="showSetting"
    class="setting"
    :style="{ '--top': top, '--left': left }"
    draggable="true"
    @drag="drag"
    @dragend="dragend"
  >
    <div class="header">
      {{ this.className }}
      <i class="el-icon-close" @click="close"></i>
    </div>
    <div class="main"></div>
    <div class="footer">
      <el-button type="primary" @click="deleteElement">删除元素</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop } from 'vue-property-decorator';
  import { Attrs } from '@/eva/interface/ElementInterface';
  import Bus from '@/utils/bus';
  import { CutClassName } from '@/utils/Regular';
  import { catchItem } from '@/utils/dragElement';
  import { pageModule } from '@/store/modules/page';

  @Component({
    name: 'SettingDialog',
  })
  export default class SettingDialog extends Vue {
    private cssStyle: Attrs = {}; // 可以进行设置的样式
    private className: string = '';
    private showSetting: boolean = false;
    private top: string = '100px';
    private left: string = '100px';
    private isFirstDrag: boolean = true; // 是否此次拖拽事件第一次触发
    private clientX: number = 0;
    private clientY: number = 0;

    private mounted() {
      Bus.$on('show-dialog', (className: string) => {
        let classArray: string[] = CutClassName(className);
        this.showSetting = true;
        if (pageModule.pageData.arr)
          catchItem(pageModule.pageData.arr, classArray, (item, index) => {
            this.className = item[index].class;
          });
      });
    }

    private drag(e: DragEvent) {
      e.stopPropagation();
      let top: number = (this.$refs.Setting as any).offsetTop;
      let left: number = (this.$refs.Setting as any).offsetLeft;
      if (this.isFirstDrag) {
        this.clientY = e.clientY - top;
        this.clientX = e.clientX - left;
      }
      this.isFirstDrag = false;
      if (e.clientX && e.clientY) {
        this.top = e.clientY - this.clientY + 'px';
        this.left = e.clientX - this.clientX + 'px';
      }
    }

    private dragend(e: DragEvent) {
      this.isFirstDrag = true;
    }

    private close() {
      this.showSetting = false;
    }

    private beforeDestroy() {
      Bus.$off('show-dialog');
    }

    private deleteElement() {
      if (pageModule.pageData.arr)
        catchItem(pageModule.pageData.arr, [this.className], (item, index) => {
          item.splice(index, 1);
          this.showSetting = false;
        });
    }
  }
</script>

<style lang="scss" scoped>
  .setting {
    width: 300px;
    height: 500px;
    top: var(--top);
    left: var(--left);
    position: fixed;
    overflow: hidden scroll;
    background: #fff;
    border-radius: 20px;
    z-index: 999;
    scrollbar-width: none; //火狐隐藏滚动条
    &::-webkit-scrollbar {
      //谷歌隐藏滚动条
      display: none;
    }
    .header {
      position: fixed;
      width: 300px;
      padding-left: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 24px;
      .el-icon-close {
        float: right;
        padding: 10px;
      }
    }
    .main {
      padding: 44px 20px;
    }
    .footer {
      width: 300px;
      height: 43px;
      line-height: 43px;
      position: absolute;
      bottom: 0px;
      text-align: center;
      border-top: 1px solid #bfbfbf;
    }
  }
</style>
