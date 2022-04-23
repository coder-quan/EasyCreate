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
      <el-popconfirm
        :hide-icon="true"
        title="是否删除"
        @confirm="deleteElement"
      >
        <el-button slot="reference" type="primary">删除元素</el-button>
      </el-popconfirm>
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
      Bus.$on('show-dialog', (className: string, flag: boolean) => {
        this.className = '';
        if (flag && this.$route.name === 'main') {
          let classArray: string[] = CutClassName(className);
          catchItem([pageModule.pageData], classArray, (item, index) => {
            this.className = item[index].class;
          });
        }
        this.showSetting = this.$route.name === 'main' ? flag : false;
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
      catchItem([pageModule.pageData], [this.className], (item, index) => {
        if (item[index].class === pageModule.pageData.class)
          this.$alert('此节点为根节点，不可删除', '', {
            confirmButtonText: '确定',
          });
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
