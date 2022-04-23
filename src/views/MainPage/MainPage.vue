<template>
  <div class="main">
    <nav-bar @on-add="showView">
      <template v-slot:default="slotProps">
        <package-menu :color="slotProps" @click-menu="clickMenu"></package-menu>
        <main-view v-if="isShowView" @on-check="checkIcon">
          <preview-page :isPreview="false"></preview-page>
        </main-view>
      </template>
    </nav-bar>
    <add-tag-tip
      :isClose="isClose"
      @check="checkClassName"
      @cancel="cancel"
    ></add-tag-tip>
    <setting-dialog></setting-dialog>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MainView from './components/MainView.vue';
  import PreviewPage from '../PreviewPage/PreviewPage.vue';
  import AddTagTip from './components/AddTagTip.vue';
  import SettingDialog from './components/SettingDialog.vue';
  import { basisComponents, template } from '@/eva/data/components';
  import { Attrs, ElementInterface } from '@/eva/interface/ElementInterface';
  import { pageModule } from '@/store/modules/page';

  @Component({
    name: 'MainPage',
    components: { MainView, PreviewPage, AddTagTip, SettingDialog },
  })
  export default class MainPage extends Vue {
    private isShowView: boolean = false;
    private component: string = '';
    private isClose: boolean = false;
    private cssStyle: Attrs = {};

    // 回到主页时判断是否已创建页面，已创建则恢复，否则空白
    // public activated() {}

    private showView(flag: boolean) {
      this.isShowView = flag;
    }

    private checkIcon(type: string) {
      if (type === 'empty') {
        this.showView(false);
        pageModule.resetPageData();
      } else if (type === 'preview') this.$router.push('./preview');
    }

    private clickMenu(title: string) {
      if (this.isShowView) this.isClose = true;
      else
        this.$alert('请先新建页面或选择模板', '', {
          confirmButtonText: '确定',
        });
      this.component = title;
    }

    private checkClassName(className: string) {
      let element: ElementInterface = Object.assign({}, template);
      let html: string = basisComponents.get(this.component)!;
      this.isClose = false;
      if (html) element.html = html;
      else element.html = 'div';
      element.class = className;
      pageModule.changePageData(element);
    }

    private cancel() {
      this.isClose = false;
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    height: 100vh;
  }
</style>
