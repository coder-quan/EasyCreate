<template>
  <div class="menu-container">
    <el-menu
      class="menu"
      :collapse="true"
      :background-color="color.theme"
      :text-color="color.color"
      :active-text-color="color.color"
    >
      <el-submenu v-for="(submenu, key) in menu" :index="key + ''" :key="key">
        <template slot="title">
          <i :class="submenu.icon"></i>
          <span slot="title">{{ submenu.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(item, index) in submenu.submenu"
          :index="index"
          :key="index"
        >
          <span slot="title">{{ item.title }}</span>
          <el-menu-item
            v-for="(subItem, subIndex) in item.value"
            :index="subIndex + ''"
            :key="subIndex"
            @click="clickMenu(subItem)"
          >
            {{ subItem }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { MenuType } from '../../interface/MenuInterface';
  import { Menu } from '../../data/Menu';
  @Component({
    name: 'PackageMenu',
  })
  export default class PackageMenu extends Vue {
    private menu: MenuType[] = Menu;

    @Prop(Object)
    private readonly color!: object;

    @Emit()
    private clickMenu(title: string) {
      return title;
    }
  }
</script>

<style lang="scss" scoped>
  .menu-container {
    width: 40px;
    text-align: center;
  }
  .menu {
    height: calc(100vh - var(--navbar-line-height) - 1px);
    border: 0;
    width: 40px;
  }
  ::v-deep .menu .el-submenu__title {
    padding: 0 !important;
  }
</style>
