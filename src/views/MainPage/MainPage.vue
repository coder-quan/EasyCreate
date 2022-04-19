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
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MainView from './components/MainView.vue';
  import PreviewPage from '../PreviewPage/PreviewPage.vue';

  @Component({
    name: 'MainPage',
    components: { MainView, PreviewPage },
  })
  export default class MainPage extends Vue {
    private isShowView: boolean = false;

    // 回到主页时判断是否已创建页面，已创建则恢复，否则空白
    // public activated() {}

    private showView(flag: boolean) {
      this.isShowView = flag;
    }

    private checkIcon(type: string) {
      if (type === 'empty') this.showView(false);
      else if (type === 'preview') this.$router.push('./preview');
    }

    private clickMenu(title: string) {
      console.log(title);
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    height: 100vh;
  }
</style>
