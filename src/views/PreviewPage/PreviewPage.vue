<template>
  <div class="view">
    <el-page-header
      v-if="isPreview"
      :style="{ '--color': theme }"
      @back="goBack"
      content="主页"
    ></el-page-header>
    <div class="main-view">
      <render-element
        v-for="(item, index) in arr"
        :element="item"
        :key="index"
      ></render-element>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { pageModule } from '@/store/modules/page';
  import { themeModule } from '@/store/modules/theme';

  @Component({
    name: 'PreviewPage',
  })
  export default class PreviewPage extends Vue {
    private arr: object[] = [];
    private theme: string = '#403C3C';

    // 是否预览
    @Prop({ type: Boolean, default: true })
    private readonly isPreview!: boolean;

    private created() {
      this.arr = [pageModule.pageData];
      this.theme = themeModule.theme;
    }
    private goBack() {
      this.$router.push('/main');
    }
  }
</script>

<style lang="scss" scoped>
  .view {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none; //火狐隐藏滚动条
    &::-webkit-scrollbar {
      //谷歌隐藏滚动条
      display: none;
    }
    & ::v-deep .el-page-header {
      background-color: var(--color);
      color: var(--font-color);
      .el-page-header__content {
        color: var(--font-color);
      }
    }
    .main-view {
      height: 100%;
      width: 100%;
      // background-color: #fff;
      overflow-y: scroll;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
