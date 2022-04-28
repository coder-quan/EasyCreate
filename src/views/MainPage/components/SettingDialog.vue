<template>
  <div
    ref="Setting"
    v-show="showSetting"
    class="setting"
    :style="{ '--top': top, '--left': left }"
    :draggable="isDraggable"
    @dragstart="dragstart"
    @dragover="dragover"
  >
    <div class="header">
      <i
        v-if="isDraggable"
        class="el-icon-location-outline"
        @click="change(false)"
      ></i>
      <i
        v-if="!isDraggable"
        class="el-icon-location-information"
        @click="change(true)"
      ></i>
      {{ this.className }}
      <i class="el-icon-close" @click="close"></i>
    </div>
    <div class="main">
      <setting-style
        :element="element"
        @change-text="changeText"
      ></setting-style>
    </div>
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
  import { Vue, Component } from 'vue-property-decorator';
  import Bus from '@/utils/bus';
  import { CutClassName } from '@/utils/Regular';
  import { catchItem } from '@/utils/dragElement';
  import { pageModule } from '@/store/modules/page';
  import SettingStyle from './SettingStyle.vue';
  import { ElementInterface } from '@/eva/interface/ElementInterface';
  import { hasNotSubtag } from '@/eva/data/Components';

  @Component({
    name: 'SettingDialog',
    components: { SettingStyle },
  })
  export default class SettingDialog extends Vue {
    private element: ElementInterface = {
      html: '',
      class: '',
      style: { unit: {}, value: {} },
    }; // 可以进行设置的样式
    private className: string = '';
    private showSetting: boolean = false;
    private top: string = '100px';
    private left: string = '100px';
    private clientX: number = 0;
    private clientY: number = 0;
    private isDraggable: boolean = true;

    private mounted() {
      Bus.$on('show-dialog', (className: string, flag: boolean) => {
        this.className = '';
        if (flag && this.$route.name === 'main') {
          let classArray: string[] = CutClassName(className);
          catchItem([pageModule.pageData], classArray, (item, index) => {
            this.className = item[index].class;
            this.element = item[index];
            if (!hasNotSubtag.includes(this.element.html)) {
              pageModule.changeClickClass(this.className);
            }
          });
        }
        this.showSetting = this.$route.name === 'main' ? flag : false;
      });
    }

    private dragstart(e: DragEvent) {
      let top: number = (this.$refs.Setting as any).offsetTop;
      let left: number = (this.$refs.Setting as any).offsetLeft;
      this.clientY = e.clientY - top;
      this.clientX = e.clientX - left;
      return false;
    }

    private dragover(e: DragEvent) {
      e.stopPropagation();
      this.top = e.clientY - this.clientY + 'px';
      this.left = e.clientX - this.clientX + 'px';
    }

    private close() {
      this.showSetting = false;
    }

    private beforeDestroy() {
      Bus.$off('show-dialog');
    }

    private deleteElement() {
      catchItem([pageModule.pageData], [this.className], (item, index) => {
        if (item[index].class === pageModule.pageData.class) {
          this.$alert('此节点为根节点，不可删除', '', {
            confirmButtonText: '确定',
          });
        } else {
          pageModule.resetClickClass();
          item.splice(index, 1);
        }
        this.showSetting = false;
      });
    }

    private changeText(text: string) {
      this.$set(this.element, 'text', text);
    }

    private change(flag: boolean) {
      this.isDraggable = flag;
    }
  }
</script>

<style lang="scss" scoped>
  .setting {
    width: 400px;
    height: 500px;
    top: var(--top);
    left: var(--left);
    position: fixed;
    overflow: hidden scroll;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #bfbfbf;
    z-index: 999;
    scrollbar-width: none; //火狐隐藏滚动条
    &::-webkit-scrollbar {
      //谷歌隐藏滚动条
      display: none;
    }
    .header {
      border-radius: 20px 20px 0 0;
      position: fixed;
      width: 398px;
      line-height: 44px;
      text-align: center;
      font-size: 24px;
      background-color: #fff;
      border-bottom: 1px solid #bfbfbf;
      z-index: 1000;
      .el-icon-location-outline,
      .el-icon-location-information {
        float: left;
        padding: 10px;
      }
      .el-icon-close {
        float: right;
        padding: 10px;
      }
    }
    .main {
      padding: 59px 20px;
      line-height: 34px;
      font-size: 18px;
      height: 500px;
      overflow: hidden scroll;
      scrollbar-width: none; //火狐隐藏滚动条
      &::-webkit-scrollbar {
        //谷歌隐藏滚动条
        display: none;
      }
    }
    .footer {
      width: 400px;
      height: 43px;
      line-height: 43px;
      position: absolute;
      bottom: 0px;
      text-align: center;
      border-top: 1px solid #bfbfbf;
      background-color: #fff;
    }
  }
</style>
