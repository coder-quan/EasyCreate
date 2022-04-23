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
    <i class="el-icon-close" @click="close"></i>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop } from 'vue-property-decorator';
  import { Attrs } from '@/eva/interface/ElementInterface';

  @Component({
    name: 'SettingDialog',
  })
  export default class SettingDialog extends Vue {
    @Prop(Object)
    private readonly cssStyle!: Attrs; // 可以进行设置的样式
    private showSetting: boolean = false;
    private top: string = '100px';
    private left: string = '100px';
    private isFirstDrag: boolean = true; // 是否此次拖拽事件第一次触发
    private clientX: number = 0;
    private clientY: number = 0;

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
    .el-icon-close {
      float: right;
      padding: 10px;
    }
  }
</style>
