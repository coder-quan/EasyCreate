<template>
  <div class="main">
    <nav-bar>
      <template v-slot:default="slotProps">
        <package-menu :menu="menu" :color="slotProps"></package-menu>
        <main-view></main-view>
      </template>
    </nav-bar>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import NavBar from '../NavBar/NavBar.vue';
  import MainView from './components/MainView.vue';
  import { MenuType } from '@/eva/interface/MenuInterface';

  @Component({
    name: 'MainPage',
    components: { NavBar, MainView },
  })
  export default class MainPage extends Vue {
    private menu: MenuType[] = [
      {
        icon: 'el-icon-location',
        title: '导航',
        submenu: [
          {
            title: '导航一',
            value: ['嗨害嗨'],
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
