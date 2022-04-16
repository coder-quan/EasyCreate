<template>
  <div class="main">
    <nav-bar>
      <template v-slot:default="slotProps">
        <package-menu :menu="menu" :color="slotProps"></package-menu>
        <main-view v-if="isShowView"></main-view>
      </template>
    </nav-bar>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MainView from './components/MainView.vue';
  import { MenuType } from '@/eva/interface/MenuInterface';

  @Component({
    name: 'MainPage',
    components: { MainView },
  })
  export default class MainPage extends Vue {
    private isShowView: boolean = true;
    private menu: MenuType[] = [
      {
        icon: 'el-icon-location',
        title: '撤所',
        submenu: [
          {
            title: '老八',
            value: ['嗨害嗨', '干了xdm'],
          },
        ],
      },
    ];
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    height: 100vh;
  }
</style>
